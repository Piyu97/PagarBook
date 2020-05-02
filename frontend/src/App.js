import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from "./redux/store"
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"


function App() {
    return (
        <Provider store={store} >
            <BrowserRouter >
                <React.Fragment >
                    <Routes />
                </React.Fragment>
            </BrowserRouter >
        </Provider>
    )
}


export default App;