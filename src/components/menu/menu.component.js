import React, { Component } from 'react';
import './menu.component.css';
import Logo from './logo.svg';

import { show } from '../../services/modals.service';
import { hideMenu } from '../../services/menu.service';

import { addNew } from '../../actions';

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    hideMenu() {
        hideMenu();
    }

    openEditor = () => {
        this.store.dispatch(addNew());
        show('editor');
    }

    render() {
        return (
            <div className="Menu js-Menu">
                <div className="menu-header">
                    <span 
                        className="icon-back menu-header__icon"
                        onClick={this.hideMenu}
                    ></span>
                    <div className="menu-header__logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
                <button className="btn btn-main menu-btn" onClick={this.openEditor}>
                    <span className="icon-add"></span>
                    <span>Add new</span>
                </button>
                <ul className="menu-items">
                    <li className="menu-items__item menu-items__item--selected">Current</li>
                    <li className="menu-items__item">Honorary</li>
                    <li className="menu-items__item">Alumni</li>
                    <li className="menu-items__item">All</li>
                </ul>
                <div className="menu-footer">
                    <a target="_blank" rel="noopener noreferrer" href="http://geoikos.com.ve/">Oikos</a>&nbsp;|&nbsp; 
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/lualparedes/oikos-registry">Source</a>
                </div>
            </div>
        );
    }

}