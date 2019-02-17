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

    // Sum
    const weaponCount = this.filterFn(arrCards, 'Weapon').sum;
    const armorCount = this.filterFn(arrCards, 'Armor').sum;
    const accessoryCount = this.filterFn(arrCards, 'Accessory').sum;
    const consumableCount = this.filterFn(arrCards, 'Consumable').sum;
    // weaponLimit
    const weaponLimit3 = this.filterFn(arrCards, 'Weapon', 3, 6).limit;
    const weaponLimit7 = this.filterFn(arrCards, 'Weapon', 7, 10).limit;
    const weaponLimit11 = this.filterFn(arrCards, 'Weapon', 11, 18).limit;
    const weaponLimit19 = this.filterFn(arrCards, 'Weapon', 19).limit;
    // armorLimit
    const armorLimit3 = this.filterFn(arrCards, 'Armor', 3, 6).limit;
    const armorLimit7 = this.filterFn(arrCards, 'Armor', 7, 10).limit;
    const armorLimit11 = this.filterFn(arrCards, 'Armor', 11, 18).limit;
    const armorLimit19 = this.filterFn(arrCards, 'Armor', 19).limit;
    // accessoryLimit
    const accessoryLimit3 = this.filterFn(arrCards, 'Accessory', 3, 6).limit;
    const accessoryLimit7 = this.filterFn(arrCards, 'Accessory', 7, 10).limit;
    const accessoryLimit11 = this.filterFn(arrCards, 'Accessory', 11, 18).limit;
    const accessoryLimit19 = this.filterFn(arrCards, 'Accessory', 19).limit;
    // consumableLimit
    const consumableLimit3 = this.filterFn(arrCards, 'Consumable', 3, 6).limit;
    const consumableLimit7 = this.filterFn(arrCards, 'Consumable', 7, 10).limit;
    const consumableLimit11 = this.filterFn(arrCards, 'Consumable', 11, 18).limit;
    const consumableLimit19 = this.filterFn(arrCards, 'Consumable', 19).limit;

    return (
      <div className='deck__statistics-item'>
        <div className="title">Предметы</div>
        <div className="rows">
          <div className="row">
            <div className="icon">
              <ReactSVG src={weapon}/>
              <span>{weaponCount}</span>
            </div>
            <div className="icon">
              <ReactSVG src={armor}/>
              <span>{armorCount}</span>
            </div>
            <div className="icon">
              <ReactSVG src={item}/>
              <span>{accessoryCount}</span>
            </div>
            <div className="icon">
              <ReactSVG src={consumable}/>
              <span>{consumableCount}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">{weaponLimit3}</div>
            <div className="col">{armorLimit3}</div>
            <div className="col">{accessoryLimit3}</div>
            <div className="col">{consumableLimit3}</div>
            <span>3-6</span>
          </div>
          <div className="row">
            <div className="col">{weaponLimit7}</div>
            <div className="col">{armorLimit7}</div>
            <div className="col">{accessoryLimit7}</div>
            <div className="col">{consumableLimit7}</div>
            <span>7-10</span>
          </div>
          <div className="row">
            <div className="col">{weaponLimit11}</div>
            <div className="col">{armorLimit11}</div>
            <div className="col">{accessoryLimit11}</div>
            <div className="col">{consumableLimit11}</div>
            <span>11-18</span>
          </div>
          <div className="row">
            <div className="col">{weaponLimit19}</div>
            <div className="col">{armorLimit19}</div>
            <div className="col">{accessoryLimit19}</div>
            <div className="col">{consumableLimit19}</div>
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
