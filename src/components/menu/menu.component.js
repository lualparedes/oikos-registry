import React, { Component } from 'react';
import './menu.component.css';
import Logo from './logo.svg';

import { openEditor } from '../../actions';
import { g } from '../../assets/scripts/utils';

export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    openEditor = () => {
        this.props.store.dispatch(openEditor());
        console.log(this.props.store.getState().isEditorOpen);
        document.querySelector('.backdrop--editor').style.display = 'flex';
        this.showEditor();
    }

    // or what about a sort of service?
    showEditor() {
        g('.js-editorModal').classList.add('a-modal-show');
        g('.js-editorBackdrop').classList.add('a-backdrop-show');

        if (g('.js-editorModal').classList.contains('a-modal-hide')) {
            g('.js-editorModal').classList.remove('a-modal-hide');
            g('.js-editorBackdrop').classList.remove('a-backdrop-hide');
        }
    }

    // for the editor component
    hideEditor() {
        g('.js-modal').classList.add('a-modal-hide');
        g('.js-backdropModal').classList.add('a-backdrop-hide');
        g('.js-modal').classList.remove('a-modal-show');
        g('.js-backdropModal').classList.remove('a-backdrop-show');

        setTimeout(() => {
            g('.js-modal').classList.remove('a-modal-hide');
            g('.js-backdropModal').classList.remove('a-backdrop-hide');
        }, 1000);        
    }

    render() {
        return (
            <div className="Menu">
                <div className="menu-header">
                    <span className="icon-back menu-header__icon"></span>
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