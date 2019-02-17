import {POPUP_ERROR} from "../../constants";

const popupError = (state=false, {text, type}) => {
  switch(type) {
    case POPUP_ERROR :
      return text;
    default:
      return state
  }
};

export default popupError;