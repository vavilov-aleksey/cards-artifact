import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactSVG from 'react-svg';
import creep from "../../images/creep.svg";
import spell from "../../images/spell.svg";
import improvement from "../../images/improvement.svg";
import hero from "../../images/hero.svg";
import accessory from "../../images/health.svg";
import armor from "../../images/armor.svg";
import consumable from "../../images/consumable.svg";
import weapon from "../../images/weapon.svg";

class Card extends Component {
  render() {
    const data = this.props;
    const arrCards = this.props.init;
    const dopCount = this.props.dopCount;


    const returnRefer = (cardActive, arrCards) => {
      const includes = cardActive.references.filter(card => card.ref_type === 'includes');
      let count, name, manaCost, type;
      if (includes.length !== 0) {
        count = includes[0].count;
        let idCardRefer = includes[0].card_id;
        const card = arrCards.filter(card => card.card_id === idCardRefer);
        name = card[0].card_name.russian;
        manaCost = card[0].mana_cost;
        type = card[0].card_type;
      } else {
        name = cardActive.card_name.russian;
        manaCost = cardActive.mana_cost;
        type = cardActive.card_type;
      }

      return {count, name, manaCost, type};
    };

    const count = returnRefer(data.data, arrCards).count;
    const name = returnRefer(data.data, arrCards).name;
    const manaCost = returnRefer(data.data, arrCards).manaCost;
    const countDopCard = count ? '' : dopCount[0].count;

    let icon;
    icon = returnRefer(data.data, arrCards).type === 'Creep' ? creep :
            returnRefer(data.data, arrCards).type === 'Spell' ? spell :
              returnRefer(data.data, arrCards).type === 'Improvement' ? improvement :
                returnRefer(data.data, arrCards).type === 'Hero' ? hero :
                  (data.data.card_type === 'Item' && data.data.sub_type === 'Accessory') ? accessory :
                    (data.data.card_type === 'Item' && data.data.sub_type === 'Armor') ? armor :
                      (data.data.card_type === 'Item' && data.data.sub_type === 'Consumable') ? consumable :
                        (data.data.card_type === 'Item' && data.data.sub_type === 'Weapon') ? weapon : consumable;


    return (
      <div className='deck__card'>
        <img src={data.data.mini_image.default} alt=""/>
        <div className={
          (data.data.is_red ? 'red' :
            data.data.is_black ? 'black' :
              data.data.is_blue ? 'blue' :
                data.data.is_green ? 'green' : 'gold') + ' deck__card-block'}>
          <ReactSVG src={icon}/>
          {data.data.gold_cost ? <small>{data.data.gold_cost}</small> : ''}
          {manaCost ? <small>{manaCost}</small> : ''}
          <span className='deck__card-title'>{name}</span>
          {data.data.ingame_image.default ? <img src={data.data.ingame_image.default} alt=""/> : ''}
          {count ? <span>x{count}</span> : ''}
          {countDopCard ? <span>x{countDopCard}</span> : ''}
        </div>
      </div>
    );
  }
}
export default connect(state => ({
  init: state.data.card_list
}))(Card)
