const SET_PIC = 'SET_PIC';
const SET_PAGE = 'SET_PAGE';
const SET_QUERY = 'SET_QUERY';

export const setPic = pic => ({ type: SET_PIC, pic });
export const setPage = page => ({ type: SET_PAGE, page });
export const setQuery = query => ({ type: SET_QUERY, query });

const defaultState = {
  pic: {},
  page: 1,
  query: ''
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_PIC:
      return Object.assign({}, state, { pic: action.pic });
    case SET_PAGE:
      return Object.assign({}, state, { page: action.page });
    case SET_QUERY:
      return Object.assign({}, state, { query: action.query });
    default:
      return state;
  }
}
