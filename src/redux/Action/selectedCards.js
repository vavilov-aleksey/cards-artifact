import {SELECTED_CARD, SELECTED_CARD_CLEAR} from '../../constants';

export const selectedCards = (card) => ({
  type: SELECTED_CARD,
  card
});

export const selectedCardsClear = () => ({
  type: SELECTED_CARD_CLEAR
});
