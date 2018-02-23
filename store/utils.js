const SET_PIC = 'SET_PIC';
const SET_QUERY = 'SET_QUERY';

export const setPic = pic => ({ type: SET_PIC, pic });
export const setQuery = query => ({ type: SET_QUERY, query });

const defaultState = {
  pic: {},
  query: ''
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_PIC:
      return Object.assign({}, state, { pic: action.pic });
    case SET_QUERY:
      return Object.assign({}, state, { query: action.query });
    default:
      return state;
  }
}
