import React, {Component} from 'react';
import StatisticsColor from "./sort-statistics-color";
import StatisticsItem from "./sort-statistics-item";

export default class Statistics extends Component {
  render() {
    return (
      <div className='deck__statistics'>
        <StatisticsColor/>
        <StatisticsItem/>
      </div>
    );
  }
}