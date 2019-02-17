import {POPUP_ERROR} from "../../constants";

export const popupError = (text) => ({
  type: POPUP_ERROR,
  text
});
