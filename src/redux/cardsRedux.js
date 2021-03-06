/* eslint-disable linebreak-style */
import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => (card.columnId == columnId));
export const getCardsForSearch = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));
// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');
// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_CARD });
export const createAction_moveCard = payload => ({ payload, type: MOVE_CARD });
// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    case MOVE_CARD: 
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}