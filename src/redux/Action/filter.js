import {FILTER} from '../../constants';

export const filter = (typeCard, activeFilter) => ({
  type: FILTER,
  typeCard: typeCard,
  activeFilter: activeFilter
});

