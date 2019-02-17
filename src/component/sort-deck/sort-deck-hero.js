import React, { Component } from 'react';
import './sort-deck.css'

export default class Hero extends Component {
  render() {
    const data = this.props;

    return (
      <div className={
        (data.data.is_red ? 'red' :
          data.data.is_black ? 'black' :
            data.data.is_blue ? 'blue' :
            data.data.is_green ? 'green' : '') + ' deck__hero'}>
        {data.data.ingame_image ?
          <img src={data.data.ingame_image.default} alt=''/>
          : ''
        }
      </div>
    );
  }
}