import React, {Component} from 'react';
import './sort-header.css'
import HeaderCell from "./sort-header-cell";
import {dataBasket, dataColor, dataRarity, dataType} from '../../data/defaultData'
import {connect} from "react-redux";
import {search} from "../../redux/Action/search";

class SortHeaderGroup extends Component {

  render() {
    const data = this.props;
    return (
      <div className='sort-header__group'>
        <div className="sort-header__group-title">
          {data.data.typeName}
        </div>
        <div className="sort-header__group-cell">
          {data.data.typeSort.map((cell, index) => {

            return (
              <HeaderCell data={cell} key={index} type={data.data.type}/>
            )
          })}
        </div>
      </div>
    )
  }
}

class SortHeader extends Component {
  changeSearch = (event) =>{
    this.props.search(event.target.value)
  };

  render() {
    return (
      <div className="sort-header">
        <input type="search" placeholder='Поиск' onChange={this.changeSearch}/>

        <SortHeaderGroup data={dataType}/>
        <SortHeaderGroup data={dataRarity}/>
        <SortHeaderGroup data={dataColor}/>
        <SortHeaderGroup data={dataBasket}/>

      </div>
    );
  }
}

export default connect(state=>({}), {search})(SortHeader)