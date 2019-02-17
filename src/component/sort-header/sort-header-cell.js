import React, { Component } from 'react';
import icon from "../../images/icon-artifact.svg";
import ReactSVG from 'react-svg'
import {connect} from "react-redux";
import {filter} from "../../redux/Action/filter";
import {selectedCardsClear} from "../../redux/Action/selectedCards";


class HeaderCell extends Component {

  checkSelected = () => {
    this.props.filter(this.props.type, this.props.data.typeFilter);
    if(this.props.type === 'clear'){
      this.props.selectedCardsClear();
    }
  };

  render() {
    const data = this.props;
    let style = {
      fill: data.data.bgc
    };


    return (
      <div className={this.props.filters.activeFilter === data.data.typeFilter ? 'active sort-header__cell' : 'sort-header__cell'}
           title={data.data.name}
           key={data.data.name}
           onClick={this.checkSelected.bind(this, data)}
      >
        {
          data.data.img ?
            <img src={'./images/' + data.data.img} alt=""/>
            :
            <ReactSVG src={icon} svgStyle={style}/>
        }
      </div>
    );
  }
}

export default connect(state => ({
  filters: state.filter
}), {filter,selectedCardsClear})(HeaderCell)