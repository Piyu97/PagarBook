import json
import os.path
import csv
import jwt
import base64
import math
import hashlib
from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import jwt
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Stupid@55655'
app.config['MYSQL_DB'] = 'pagar'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
           

@app.route('/competitions',methods=['GET'])
def competitions():
        token = request.headers.get("Authorization")
        ans = loggedPerson(token) 
        if request.method=='GET' and ans:
            try:
                cursor = mysql.connection.cursor()
                cursor.execute(
                    """SELECT * from competition"""
                )
                result = cursor.fetchall()
                cursor.connection.commit()
                return jsonify(result)
            except Exception as e:
                return {"message":str(e)}
            finally:
                cursor.close()
        else:
            return {"message":"You need to Login"}



from registration import auth
from registration import loggedPerson
app.register_blueprint(auth, url_prefix="/auth")
