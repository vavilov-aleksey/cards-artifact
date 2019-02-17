import React, {Component} from 'react';
import Heroes from "./sort-deck-heroes";
import Cards from "./sort-deck-cards";
import Statistics from "./sort-deck-statistic";

export default class SortDeck extends Component {
  render() {
    return (
      <div className='deck'>
        <Heroes/>
        <Cards/>
        <Statistics/>
      </div>
    );
  }
}