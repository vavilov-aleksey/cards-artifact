import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import armor from '../../images/armor.svg';
import weapon from '../../images/weapon.svg';
import item from '../../images/item.svg';
import consumable from '../../images/consumable.svg';
import {connect} from "react-redux";


class StatisticsItem extends Component {
  filterFn(arr, type, limits1, limits2){
    let sums = [], limits = [];
    if(type === 'Consumable'){
      sums = arr.filter(card => (card.sub_type === type) || (card.sub_type === 'Deed'));
    } else {
      sums = arr.filter(card => card.sub_type === type);
    }

    let sum = sums.length;
    limits = sums.filter(card => (card.gold_cost >= limits1) && (limits2 ? (card.gold_cost <= limits2) : true));
    let limit = limits.length === 0 ? '' : limits.length;
    return {sum, limit}
  }

  render() {
    const arrCards = this.props.arrCards;

    const fnSum = (type) => this.filterFn(arrCards, type).sum;
    const fnLimit = (type, limit1, limit2) => this.filterFn(arrCards, type, limit1, limit2).limit;

    return (
      <div className='deck__statistics-item'>
        <div className="title">Предметы</div>
        <div className="rows">
          <div className="row">
            <div className="icon">
              <ReactSVG src={weapon}/>
              <span>{fnSum('Weapon')}</span>
            </div>
            <div className="icon">
              <ReactSVG src={armor}/>
              <span>{fnSum('Armor')}</span>
            </div>
            <div className="icon">
              <ReactSVG src={item}/>
              <span>{fnSum('Accessory')}</span>
            </div>
            <div className="icon">
              <ReactSVG src={consumable}/>
              <span>{fnSum('Consumable')}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">{fnLimit('Weapon', 3, 6)}</div>
            <div className="col">{fnLimit('Armor', 3, 6)}</div>
            <div className="col">{fnLimit('Accessory', 3, 6)}</div>
            <div className="col">{fnLimit('Consumable', 3, 6)}</div>
            <span>3-6</span>
          </div>
          <div className="row">
            <div className="col">{fnLimit('Weapon', 7, 10)}</div>
            <div className="col">{fnLimit('Armor', 7, 10)}</div>
            <div className="col">{fnLimit('Accessory', 7, 10)}</div>
            <div className="col">{fnLimit('Consumable', 7, 10)}</div>
            <span>7-10</span>
          </div>
          <div className="row">
            <div className="col">{fnLimit('Weapon', 11, 18)}</div>
            <div className="col">{fnLimit('Armor', 11, 18)}</div>
            <div className="col">{fnLimit('Accessory', 11, 18)}</div>
            <div className="col">{fnLimit('Consumable', 11, 18)}</div>
            <span>11-18</span>
          </div>
          <div className="row">
            <div className="col">{fnLimit('Weapon', 19)}</div>
            <div className="col">{fnLimit('Armor', 19)}</div>
            <div className="col">{fnLimit('Accessory', 19)}</div>
            <div className="col">{fnLimit('Consumable', 19)}</div>
            <span>19+</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  arrCards: state.selectedCards
}))(StatisticsItem);
