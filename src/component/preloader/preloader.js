import React, { Component } from 'react';
import icon from "../../images/icon-artifact.svg";
import ReactSVG from 'react-svg';
import './preloader.css'

export default class Preloader extends Component {
  render() {
    return (
      <div className='preloader'>
        <ReactSVG src={icon} />
      </div>
    );
  }
}