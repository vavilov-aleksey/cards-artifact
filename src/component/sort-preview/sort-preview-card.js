import React, {Component} from 'react';
import './sort-preview.css'
import {connect} from "react-redux";

class SortPreviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navSelected: 'primary'
    }
  }

  navClickSelected = event => {
    this.setState({navSelected: event.target.getAttribute('data-name')})
  };


  render() {
    const navSelected = this.state.navSelected;
    const arrCards = this.props.cards;
    const cardActive = this.props.activeCard;


    const returnImg = (cards, cardActive) => {
      const cardAct = cardActive ? cards.filter(card => card.card_id === cardActive)[0] : cards[0];
      const img1 = cardAct.large_image.russian;
      let img2 = '';
      const includes = cardAct.references.filter(card => card.ref_type === 'includes');
      if (includes.length !== 0) {
        let arrFilter = cards.filter(card => card.card_id === includes[0].card_id);
        img2 = arrFilter[0].large_image.russian;
      }
      return {img1, img2};
    };

    const img1 = returnImg(arrCards, cardActive).img1;
    const img2 = returnImg(arrCards, cardActive).img2;

    return (
      <div className="card">
        <div className={!img2 ? 'primary' : navSelected === 'primary' ? 'primary' : 'secondary'}>
          <img src={img1}
               alt=""
               data-name="primary"
               onClick={this.navClickSelected}/>
        </div>
        {img2 ?
          <div className={navSelected === 'primary' ? 'secondary' : 'primary'}>
            <img src={img2}
                 alt="" data-name='secondary'
                 onClick={this.navClickSelected}/>
          </div>
          : ''
        }
      </div>
    );
  }
}

export default connect(state => ({
  cards: state.data.card_list,
  activeCard: state.activeCard
}))(SortPreviewCard);