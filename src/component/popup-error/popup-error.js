import React, { Component } from 'react';
import {connect} from "react-redux";
import './popup-error.css'

class PopupError extends Component {
  render() {
    const error = this.props.popup;
    return (
      <div className='popup-error'>
        {error}
      </div>
    );
  }
}

export default connect(state=>({
  popup: state.popupError
}))(PopupError);
