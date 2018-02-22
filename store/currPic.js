const SET_PIC = 'SET_PIC';
const SET_PAGE = 'SET_PAGE';

export const setPic = pic => ({ type: SET_PIC, pic });
export const setPage = page => ({ type: SET_PAGE, page });

const defaultState = {
  pic: {},
  page: 1
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_PIC:
      return Object.assign({}, state, { pic: action.pic });
    case SET_PAGE:
      return Object.assign({}, state, { page: action.page });
    default:
      return state;
  }
}
