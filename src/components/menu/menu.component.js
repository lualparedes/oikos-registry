import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './menu.component.css';
import Logo from './logo.svg';

import { show } from '../../services/modals.service';
import { hideMenu } from '../../services/menu.service';

import { addNewRecord } from '../../actions';

import { g } from '../../assets/scripts/utils';

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    hideMenu() {
        hideMenu();
    }

    openEditor = () => {
        this.store.dispatch(addNewRecord());
        show('editor');
        g('.editor-content').classList.add('editor-content--active');
        g('.editor-footer').classList.add('editor-footer--active');
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
                    <Route exact={true} path={process.env.PUBLIC_URL + '/'} render={() => ([
                        <Link to={process.env.PUBLIC_URL + '/'}><li className="menu-items__item menu-items__item--selected">Current</li></Link>,
                        <Link to="honorary"><li className="menu-items__item">Honorary</li></Link>,
                        <Link to="alumni"><li className="menu-items__item">Alumni</li></Link>,
                        <Link to="all"><li className="menu-items__item">All</li></Link>,
                    ])}/>
                    <Route path={process.env.PUBLIC_URL + '/honorary'} render={() => ([
                        <Link to={process.env.PUBLIC_URL + '/'}><li className="menu-items__item">Current</li></Link>,
                        <Link to="honorary"><li className="menu-items__item menu-items__item--selected">Honorary</li></Link>,
                        <Link to="alumni"><li className="menu-items__item">Alumni</li></Link>,
                        <Link to="all"><li className="menu-items__item">All</li></Link>,
                    ])}/>
                    <Route path={process.env.PUBLIC_URL + '/alumni'} render={() => ([
                        <Link to={process.env.PUBLIC_URL + '/'}><li className="menu-items__item">Current</li></Link>,
                        <Link to="honorary"><li className="menu-items__item">Honorary</li></Link>,
                        <Link to="alumni"><li className="menu-items__item menu-items__item--selected">Alumni</li></Link>,
                        <Link to="all"><li className="menu-items__item">All</li></Link>,
                    ])}/>
                    <Route path={process.env.PUBLIC_URL + '/all'} render={() => ([
                        <Link to={process.env.PUBLIC_URL + '/'}><li className="menu-items__item">Current</li></Link>,
                        <Link to="honorary"><li className="menu-items__item">Honorary</li></Link>,
                        <Link to="alumni"><li className="menu-items__item">Alumni</li></Link>,
                        <Link to="all"><li className="menu-items__item menu-items__item--selected">All</li></Link>,
                    ])}/>
                </ul>
                <div className="menu-footer">
                    <a target="_blank" rel="noopener noreferrer" href="http://geoikos.com.ve/">Oikos</a>&nbsp;|&nbsp; 
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/lualparedes/oikos-registry">Source</a>
                </div>
            </div>
        );
    }

}