import {combineReducers} from 'redux'
import data from "./data";
import preloader from "./preloader";
import filter from "./filter";
import activeCard from "./activeCard";
import selectedCards from "./selectedCards";
import search from "./search";
import popupError from "./popupError";
import fullDeck from "./fullDeck";

export default combineReducers({
  data,
  preloader,
  filter,
  activeCard,
  selectedCards,
  search,
  popupError,
  fullDeck
})