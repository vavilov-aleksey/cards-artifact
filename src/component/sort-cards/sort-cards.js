import React, {Component} from 'react';
import './sort-cards.css';
import {connect} from "react-redux";
import Card from "./card";


class SortCards extends Component {

  render() {
    const {data, filter, search} = this.props;

    const filterInit = (item) => {
      return (item.card_type !== 'Passive Ability') && (item.card_type !== 'Ability');
    };

    let arrInit = data.card_list.filter(filterInit);
    if (filter.type === 'type') arrInit = arrInit.filter(item => item.card_type === filter.activeFilter);
    if (filter.type === 'rarity' && filter.activeFilter !== 'Base') arrInit = arrInit.filter(item => item.rarity === filter.activeFilter);
    if (filter.type === 'color') arrInit = arrInit.filter(item => (
      filter.activeFilter === 'Red' ? item.is_red :
        filter.activeFilter === 'Blue' ? item.is_blue :
          filter.activeFilter === 'Green' ? item.is_green :
            item.is_black

    ));
    if(search) arrInit = arrInit.filter(item => item.card_name.russian.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className='sort-cards'>
        {arrInit.map((cell, index) => {
          return (
            <Card cell={cell} index={index} key={index}/>
          )
        })}
      </div>
    );
  }
}

export default connect(state => (
  {
    data: state.data,
    filter: state.filter,
    search: state.search
  }), {})(SortCards);
