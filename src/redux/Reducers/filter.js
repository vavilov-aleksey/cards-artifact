import {FILTER} from "../../constants";

const BASE_FILTER = {
  type: '',
  activeFilter: false
};

const filter = (state = BASE_FILTER, {typeCard, activeFilter, type}) => {
  switch (type) {
    case FILTER :
      return {
        type: typeCard,
        activeFilter:activeFilter
      };
    default :
      return state
  }
};

export default filter;