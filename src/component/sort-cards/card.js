import React, {Component} from 'react';
import {connect} from "react-redux";
import {activeCard} from "../../redux/Action/activeCard";
import {selectedCards} from "../../redux/Action/selectedCards";
import {popupError} from "../../redux/Action/popupError";
import ReactSVG from 'react-svg';
import armor from '../../images/armor.svg';
import creep from '../../images/creep.svg';
import spell from '../../images/spell.svg';
import hero from '../../images/hero.svg';
import improvement from '../../images/improvement.svg';
import accessory from '../../images/health.svg';
import weapon from '../../images/weapon.svg';
import consumable from '../../images/consumable.svg';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
      isSelected: false
    };
  }

  isErrorPopup = (text) => {
    this.props.popupError(text);
    setTimeout(() => {
      this.props.popupError(false)
    }, 3500);
  };

  checkSelected = () => {
    this.props.activeCard(this.props.cell.card_id);
    // this.setState({cardActive: true});
  };

  doubleCheckSelected = () => {
    if(this.state.count > 0) this.setState({count: this.state.count - 1});
    if(this.props.cell.card_type === 'Hero') this.setState({isSelected: true});

    let hero = [], count = 0;
    const arrCards = this.props.selectedCard;
    if (arrCards.length > 0) {
      hero = arrCards.filter(card => card.card_type.toLowerCase() === 'hero')
    }

    if (hero.some(card => card.card_id === this.props.cell.card_id)) {
      this.isErrorPopup('В колоде уже есть этот герой');
      return;
    }

    const counter = arrCards.reduce((o, i) => {
      if (!o.hasOwnProperty(i.card_id)) {
        o[i.card_id] = 0;
      }
      o[i.card_id]++;
      return o;
    }, {});

    const result = Object.keys(counter).map((id) => {
      return {id: Number(id), count: counter[id]};
    });

    result.forEach(arrCount => {
      if (arrCount.id === this.props.cell.card_id) {
        count = arrCount.count;
        if(count >= 2) this.setState({isSelected: true})
      }
    });


    if (hero.length === 5) {
      const getHero = this.props.cell.card_type.toLowerCase();
      if (getHero !== 'hero') {
        if (count >= 3) {
          this.isErrorPopup('В колоде не может быть больше трех копий одной карты');
          return;
        }
        this.props.selectedCards(this.props.cell)
      }
      if (getHero === 'hero') {
        this.isErrorPopup('В колоде не может быть больше 5 героев');
      }
    } else {
      if (count >= 3) {
        this.isErrorPopup('В колоде не может быть больше трех копий одной карты');
        return;
      }
      this.props.selectedCards(this.props.cell)
    }
  };


  render() {
    const {cell, cardSelected} = this.props;
    const count = this.state.count;

    let icon;
    icon = cell.card_type === 'Creep' ? creep :
           cell.card_type === 'Spell' ? spell :
           cell.card_type === 'Improvement' ? improvement :
           cell.card_type === 'Hero' ? hero :
           (cell.card_type === 'Item' && cell.sub_type === 'Accessory') ? accessory :
           (cell.card_type === 'Item' && cell.sub_type === 'Armor') ? armor :
           (cell.card_type === 'Item' && cell.sub_type === 'Consumable') ? consumable :
           (cell.card_type === 'Item' && cell.sub_type === 'Weapon') ? weapon : consumable;



    return (
      <div className={`card ${this.state.isSelected ? 'selected' : ''} ${cell.card_id === cardSelected ? 'active' : ''}`}
           onClick={this.checkSelected.bind(this, cell.card_id)}
           onDoubleClick={this.doubleCheckSelected.bind(this, cell)}
      >
        <img src={cell.mini_image.default} alt=""/>
        <div
          className={
            (cell.is_red ? 'red' :
              cell.is_black ? 'black' :
                cell.is_blue ? 'blue' :
                cell.is_green ? 'green' :
                  'gold') + " card-desc"}>
          <ReactSVG src={icon}/>
          {cell.gold_cost ? <small>{cell.gold_cost}</small> : ''}
          <span>{cell.card_name.russian}</span>
          {(cell.card_type.toLowerCase() !== 'hero') && this.state.count ? <small>x{count}</small> : ''}
        </div>
        <div className="overlay">&nbsp;</div>
      </div>
    )
  }
}


export default connect(state => ({

  selectedCard: state.selectedCards
}), {activeCard, selectedCards, popupError})(Card);