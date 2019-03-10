import React, {Component} from 'react';
import './sort-preview.css'
import {connect} from "react-redux";
import iconW from '../../images/warning-icon.svg';
import iconS from '../../images/check-icon.svg';
import ReactSVG from 'react-svg';
import {fullDeck} from "../../redux/Action/fullDeck";


class SortPreviewInfo extends Component {

  render() {
    const selectedCards = this.props.selectedCards;

    // Search hero
    let hero = [], item = [];
    if (selectedCards.length > 0) {
      hero = selectedCards.filter(card => card.card_type.toLowerCase() === 'hero');
      item = selectedCards.filter(card => card.card_type.toLowerCase() === 'item');
    }

    const countCards = (arrCards) => {
      const arrRef =  arrCards.filter(card => card.references.length > 0 );
      let arrCount = [];
      arrRef.forEach(cell => {
        const includes = cell.references.filter(card => card.ref_type === 'includes');
        if(includes.length > 0){
          const count = includes[0].count;
          arrCount = [...arrCount, count];
        }
      });

      if(arrCards.length > 0){
      }

      let countSum = 0;
      if(arrCount.length > 0){
        const otherCard = arrCards.length - arrCount.length;
        countSum = (arrCount.reduce((acc, cur) => acc + cur) + otherCard);
      }

      return countSum;
    };

    const count  = countCards(selectedCards);

    const data = [
      {
        valid: hero.length === 5,
        title: 'Герои',
        titleInfo: `${hero.length}/5`,
        info: 'В колоде должно быть ровно 5 героев'
      },
      {valid: count >= 40, title: 'Основные карты', titleInfo: `${count}/40${count >= 40 ? '+' : ''}`, info: 'В колоде должно быть минимум 40 карт'},
      {valid: item.length >= 9, title: 'Предметы', titleInfo: `${item.length}/9${item.length >= 9 ? '+' : ''}`, info: 'В колоде должно быть минмимум 9 предметов'},
    ];

    if(count >= 40 && item.length >= 9 && hero.length === 5){
      this.props.fullDeck(true);
    }

    return (
      <div className="info">
        {
          data.map(cell => {
            return (
              <div className="block" key={cell.title}>
                <div className="title">
                  {cell.title}
                  {cell.titleInfo ? <><span>{cell.titleInfo}</span>{cell.valid ? <ReactSVG src={iconS} /> : <ReactSVG src={iconW}/>}</>  : ''}
                  {cell.cost ? <span>$ {cell.cost}</span> : ''}
                </div>
                {cell.info && !cell.valid ?
                  <div className="desc">
                    {cell.info}
                  </div>
                  : ''
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default connect(state => ({
  selectedCards: state.selectedCards
}), {fullDeck})(SortPreviewInfo)