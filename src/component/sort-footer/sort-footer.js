import React, {Component} from 'react';
import './sort-footer.css'
import {connect} from "react-redux";
import {selectedCardsClear} from "../../redux/Action/selectedCards";

class SortFooter extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const desc = this.desc.value;
    const name = this.name.value;

    const dataAlert = {
      'nameDeck': name,
      'descriptionDeck' : desc,
      'selectedCards': this.props.selectedCards
    };

    console.log(dataAlert);

    this.desc.value = '';
    this.name.value = '';
    this.props.selectedCardsClear();
  };

  render() {
    const fullDeck = this.props.fullDeck;

    return (
      <form className="sort-footer" onSubmit={this.handleSubmit}>
        <textarea placeholder='Описание колоды'
                  ref={(input) => this.desc = input}
        />
        <input type="text"
               placeholder='Название колоды'
               required ref={(input) => this.name = input}
        />
        <input type="submit" value='Сохранить' disabled={!fullDeck}/>
      </form>
    );
  }
}

export default connect(state => ({
  fullDeck: state.fullDeck,
  selectedCards: state.selectedCards
}), {selectedCardsClear})(SortFooter);
