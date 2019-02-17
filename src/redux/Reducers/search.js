import {SEARCH} from "../../constants";

const search = (state='', {value, type}) => {
  switch(type) {
    case SEARCH :
      return value;
    default:
      return state
  }
};

export default search;