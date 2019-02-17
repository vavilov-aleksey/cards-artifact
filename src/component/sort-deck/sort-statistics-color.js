import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import creep from "../../images/creep.svg";
import improvement from "../../images/improvement.svg";
import spell from "../../images/spell.svg";
import {connect} from "react-redux";

class StatisticsColor extends Component {
  filterFn(arr, type, limits){
    let sumColor;

    switch (type) {
      case 'is_red':
        sumColor = arr.filter(card => card.is_red === true).length;
        break;
      case 'is_blue':
        sumColor = arr.filter(card => card.is_blue === true).length;
        break;
      case 'is_green':
        sumColor = arr.filter(card => card.is_green === true).length;
        break;
      case 'is_black':
        sumColor = arr.filter(card => card.is_black === true).length;
        break;
      default:
        break;
    }

    let limit = arr.filter(card => card.card_type === '')

    return {sumColor}
  }


  render() {
    const arrCardsSelected = this.props.arrCardsSelected;
    const arrCards = this.props.arrCards;


    // const returnRefer = (cardActive, arrCards) => {
    //   const includes = cardActive.references.filter(card => card.ref_type === 'includes');
    //   let count, name, manaCost, type;
    //   if (includes.length !== 0) {
    //     count = includes[0].count;
    //     let idCardRefer = includes[0].card_id;
    //     const card = arrCards.filter(card => card.card_id === idCardRefer);
    //     name = card[0].card_name.russian;
    //     manaCost = card[0].mana_cost;
    //     type = card[0].card_type;
    //   } else {
    //     name = cardActive.card_name.russian;
    //     manaCost = cardActive.mana_cost;
    //     type = cardActive.card_type;
    //   }
    //
    //   return {count, name, manaCost, type};
    // };

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
        <div className="rows">
          <div className="row">
            <span>0</span>
            <div className="bar">
              <div style={style} className="cell-red">&nbsp;</div>
              <div style={style} className="cell-blue">&nbsp;</div>
              <div style={style} className="cell-green">&nbsp;</div>
              <div style={style} className="cell-black">&nbsp;</div>
              <span>1</span></div>
          </div>
          <div className="row">
            <span>0</span>
            <div className="bar">
              <div style={style} className="cell-red">&nbsp;</div>
              <div style={style} className="cell-blue">&nbsp;</div>
              <div style={style} className="cell-green">&nbsp;</div>
              <div style={style} className="cell-black">&nbsp;</div>
              <span>2</span></div>
          </div>
          <div className="row">
            <span>0</span>
            <div className="bar">
              <div  style={style} className="cell-red">&nbsp;</div>
              <div  style={style} className="cell-blue">&nbsp;</div>
              <div  style={style} className="cell-green">&nbsp;</div>
              <div  style={style} className="cell-black">&nbsp;</div>
              <span>3</span></div>
          </div>
          <div className="row">
            <span>0</span>
            <div className="bar">
              <div style={style} className="cell-red">&nbsp;</div>
              <div style={style} className="cell-blue">&nbsp;</div>
              <div style={style} className="cell-green">&nbsp;</div>
              <div style={style} className="cell-black">&nbsp;</div>
              <span>4</span></div>
          </div>
          <div className="row">
            <span>0</span>
            <div className="bar">
              <div style={style} className="cell-red">&nbsp;</div>
              <div style={style} className="cell-blue">&nbsp;</div>
              <div style={style} className="cell-green">&nbsp;</div>
              <div style={style} className="cell-black">&nbsp;</div>
              <span>5</span></div>
          </div>
          <div className="row">
            <span>0</span>
            <div className="bar">
              <div style={style} className="cell-red">&nbsp;</div>
              <div style={style} className="cell-blue">&nbsp;</div>
              <div style={style} className="cell-green">&nbsp;</div>
              <div style={style} className="cell-black">&nbsp;</div>
              <span>6</span></div>
          </div>
          <div className="row">
            <span>0</span>
            <div className="bar">
              <div style={style} className="cell-red">&nbsp;</div>
              <div style={style} className="cell-blue">&nbsp;</div>
              <div style={style} className="cell-green">&nbsp;</div>
              <div style={style} className="cell-black">&nbsp;</div>
              <span>7</span></div>
          </div>
          <div className="row">
            <span>0</span>
            <div className="bar">
              <div style={style} className="cell-red">&nbsp;</div>
              <div style={style} className="cell-blue">&nbsp;</div>
              <div style={style} className="cell-green">&nbsp;</div>
              <div style={style} className="cell-black">&nbsp;</div>
              <span>8+</span></div>
          </div>
        </div>
        <div className="col">
          <div style={style} className='cell-red'>{isRed}</div>
          <div style={style} className='cell-blue'>{isBlue}</div>
          <div style={style} className='cell-green'>{isGreen}</div>
          <div style={style} className='cell-black'>{isBlack}</div>
        </div>
        <div className="col">
          <div className='col-cell'>
            <ReactSVG src={spell}/>
            <span>0</span>
          </div>
          <div className='col-cell'>
            <ReactSVG src={creep}/>
            <span>0</span>
          </div>
          <div className='col-cell'>
            <ReactSVG src={improvement}/>
            <span>0</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  arrCardsSelected: state.selectedCards,
  arrCards: state.data.card_list
}))(StatisticsColor)