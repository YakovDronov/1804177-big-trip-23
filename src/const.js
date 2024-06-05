const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

const Filters = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const TripEmptyMessage = {
  [Filters.EVERYTHING]: 'Click New Event to create your first point',
  [Filters.FUTURE]: 'There are no future events now',
  [Filters.PRESENT]: 'There are no present events now',
  [Filters.PAST]: 'There are no past events now'
};

const isEmpty = (array) => !(array && array.length > 0);

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export {Filters, TripEmptyMessage, isEmpty, Mode, SortType};
