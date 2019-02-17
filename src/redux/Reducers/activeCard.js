import {ACTIVE_CARD} from "../../constants";


const activeCard = (state = '', {activeCard, type}) => {
  switch (type) {
    case ACTIVE_CARD :
      return activeCard;
    default :
      return state
  }
};

export default activeCard;