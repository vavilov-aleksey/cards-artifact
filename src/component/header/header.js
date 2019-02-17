import React, { Component } from 'react';
import './header.css'


export default class Header extends Component {
  render() {
    return (
        <React.Fragment>
            <header>
                Колоды ARTIFACT
            </header>
            <div className="menu">
                <ul>
                    <li>Создать</li>
                </ul>
            </div>
        </React.Fragment>
    );
  }
}



