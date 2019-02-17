import React, { Component } from 'react';
import Hero from "./sort-deck-hero";
import {connect} from "react-redux";


class Heroes extends Component {
  render() {
    const selectedCards = this.props.heroes;
    const selectedHero = selectedCards.filter(card => card.card_type.toLowerCase() === 'hero');

    return (
      <div className='deck__heroes'>
        <Hero data={selectedHero[0] ? selectedHero[0] : ''}/>
        <Hero data={selectedHero[1] ? selectedHero[1] : ''}/>
        <Hero data={selectedHero[2] ? selectedHero[2] : ''}/>
        <Hero data={selectedHero[3] ? selectedHero[3] : ''}/>
        <Hero data={selectedHero[4] ? selectedHero[4] : ''}/>
      </div>
    );
  }
}
export default connect(state => ({
  heroes: state.selectedCards
}))(Heroes)
