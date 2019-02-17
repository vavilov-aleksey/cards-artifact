import {PRELOADER} from "../../constants";

const preloader = (state = true, {bool, type}) => {
  switch (type) {
    case PRELOADER :
      return bool;
    default :
      return state
  }
};

export default preloader;