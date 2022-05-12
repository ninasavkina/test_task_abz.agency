import logo from './logo.svg';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import './App.css'

export default function ButtonAppBar() {
    return (
        <div>
            <div className="Header-style">
                <div className="container">
                    <Toolbar>
                        <div className="App-logo">
                            <img src={logo}/>
                        </div>
                        <div className="btn">
                            <a className="template-btn go-contact-area">Users</a>
                            <a className="template-btn go-contact-area">Sing Up</a>
                        </div>
                    </Toolbar>
                </div>
            </div>
        </div>
    );
}
