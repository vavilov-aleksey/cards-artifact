import {FULL_DECK} from "../../constants";


const fullDeck = (state = false, {bool, type}) => {
  switch (type) {
    case FULL_DECK :
      return bool;
    default :
      return state
  }
};

export default fullDeck;