import React, {Component} from 'react';
import Card from "./sort-deck-card";
import {connect} from "react-redux";


class Cards extends Component {
  render() {
    let selectedCards = this.props.heroes;


    const removeDuplicates = (arr) => {
      let set = new Set(arr);
      let it = set.values();
      return Array.from(it);
    };

    const counter = selectedCards.reduce((o, i) => {
      if (!o.hasOwnProperty(i.card_id)) {
        o[i.card_id] = 0;
      }
      o[i.card_id]++;
      return o;
    }, {});
    const result = Object.keys(counter).map((id) => {
      return {id: Number(id), count: counter[id]};
    });


    selectedCards = removeDuplicates(selectedCards);


    return (
      <div className='deck__cards'>
        {selectedCards.map((card, index) => {
          const count = result.filter(id => {
            if(card.card_id === id.id) {
              return id.count
            }
          });
          return (
            <Card key={index} data={card} dopCount={count}/>
          )
        })}
      </div>
    );
  }
}

export default connect(state => ({
  heroes: state.selectedCards
}))(Cards)
