import {SELECTED_CARD, SELECTED_CARD_CLEAR} from "../../constants";


const selectedCards = (state = [], {card, type}) => {
  switch (type) {
    case SELECTED_CARD :
      return [...state,card];
    case SELECTED_CARD_CLEAR:
      return [];
    default :
      return state
  }
};

export default selectedCards;