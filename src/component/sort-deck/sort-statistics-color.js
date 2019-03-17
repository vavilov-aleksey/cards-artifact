import React, {Component} from 'react';
import {connect} from "react-redux";

class StatisticsColor extends Component {
  filterFn(arr, type, limits){
    let sumColor;

    switch (type) {
      case 'is_red':
        sumColor = arr.filter(card => card.is_red).length;
        break;
      case 'is_blue':
        sumColor = arr.filter(card => card.is_blue).length;
        break;
      case 'is_green':
        sumColor = arr.filter(card => card.is_green).length;
        break;
      case 'is_black':
        sumColor = arr.filter(card => card.is_black).length;
        break;
      default:
        break;
    }


    return {sumColor}
  }


  render() {
    const arrCardsSelected = this.props.arrCardsSelected;




    const isRed = this.filterFn(arrCardsSelected, 'is_red').sumColor;
    const isBlue = this.filterFn(arrCardsSelected, 'is_blue').sumColor;
    const isGreen = this.filterFn(arrCardsSelected, 'is_green').sumColor;
    const isBlack = this.filterFn(arrCardsSelected, 'is_black').sumColor;




    let style = {
      'flexBasis': '25%'
    };


    return (
      <div className='deck__statistics-color'>
        <div className="title">Распределение по цвету</div>
        <div className="col">
          <div style={style} className='cell-red'>{isRed}</div>
          <div style={style} className='cell-blue'>{isBlue}</div>
          <div style={style} className='cell-green'>{isGreen}</div>
          <div style={style} className='cell-black'>{isBlack}</div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  arrCardsSelected: state.selectedCards,
  arrCards: state.data.card_list
}))(StatisticsColor)