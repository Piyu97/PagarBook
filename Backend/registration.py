from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
import json
import os.path
import jwt
import base64
import hashlib
from server import mysql
auth = Blueprint("auth", __name__,static_url_path='/static')


def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt).decode())


def md5_hash(string, salt):
    new_string = string+salt
    print(new_string)
    hash = hashlib.md5()
    hash.update(new_string.encode('utf-8'))
    return hash.hexdigest()

# function to check existence of Email
def check(email):
    res = 0
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM registration where email=%s""", (email,)
    )
    res = cursor.fetchall()
    cursor.connection.commit()
    cursor.close()
    if(res):
        return True
    else:
        return False


# function to signIn a user
@auth.route('/login', methods=['POST'])
def loggin():
    if request.method == 'POST':
        try:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """SELECT salt FROM registration where email=%s""", (
                    request.json["email"],)
            )
            salt = cursor.fetchall()
            cursor.connection.commit()
            cursor.close()
            verify = md5_hash(request.json["password"], salt[0]["salt"])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """SELECT password,id FROM registration where password=%s""", (
                    verify,)
            )
            result = cursor.fetchall()
            cursor.connection.commit()
            if result:
                encoded_data = jwt.encode(
                    {"id": result[0]["id"]}, "masai", algorithm="HS256")
                print(encoded_data)
                return {"token": encoded_data.decode().strip('\"')}
            else:
                return({"message": "Enter Correct password"})
        except Exception as e:
            return jsonify({"message":str(e)})
        finally:
            cursor.close()           


# function to register a user
@auth.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        print(check(request.json["email"]))
        if(check(request.json["email"])):
            return {"message":False}   
        else:
            salt = generate_salt()
            password = md5_hash(request.json["password"], salt)
            print(salt, password)
            # print(salt.decode('utf-8'))
            cursor = mysql.connection.cursor()
            cursor.execute(
                """INSERT INTO registration(id,name,email,phone,salt,password)values(NULL,%s,%s,%s,%s,%s)""", (
                    request.json["name"], request.json["email"], request.json["phone"], salt, password)
            )
            cursor.connection.commit()
            cursor.close()
            return {"message":True}


# function to get logged in user
@auth.route('/loggedPerson')
def loggedPerson(token):
    token = token.split(' ')[1]
    result = jwt.decode(token, "masai", algorithms=['HS256'])
    print(result["id"], "result")
    if(result):
        return result
    else:
        return False




# function to pass the user id value back to user
@auth.route('/getId', methods=['POST'])
def getId():
    if request.method == 'POST':
        token = request.json["token"]
        result = jwt.decode(token, "masai", algorithms=['HS256'])
        Id = result["id"]
        print(Id)
        return jsonify(Id)


# # function to get logged in person name
@auth.route('/getName')
def name():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if(ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT name from registration where id=%s""", (ans["id"],)
        )
        result = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        return jsonify(result)
    else:
        return({"message": "Invalid User"})
