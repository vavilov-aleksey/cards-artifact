import {INIT_DATA} from "../../constants";

const data = (state={}, {data, type}) => {
  switch(type) {
    case INIT_DATA :
      //Todo можно ли так делать в редьюсере
      const cards = data.card_list.map(card => {
        return(
          {...card,
            selectCard: false
          }
        )
      });
      return {
        ...data,
        card_list: cards
      };
    default:
      return state
  }
};

export default data;