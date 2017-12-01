import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/menu/menu.component';
import Main from './components/main/main.component';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Main />
            </div>            
        );
    }
}

export default App;
