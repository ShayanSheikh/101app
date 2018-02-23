const KEY = '8099140-29bceed65327f7770d7a9b08b';

const INITIAL_GET_PICTURES = 'INITIAL_GET_PICTURES';
const GET_MORE_PICTURES = 'GET_MORE_PICTURES';

const initialGetPictures = pictures => ({ type: INITIAL_GET_PICTURES, pictures });
const getMorePictures = pictures => ({ type: GET_MORE_PICTURES, pictures });

export function initialFetchPictures(query) {
  query = query.toLowerCase().split(' ').join('+');
  return (dispatch) => {
    return fetch('https://pixabay.com/api/?key=' + KEY + '&q=' + query + '&image_type=photo')
      .then(res => JSON.parse(res._bodyInit))
      .then(resJson => {
        console.log(resJson);
        return dispatch(initialGetPictures(resJson.hits))
      })
      .catch(err => console.error(err));
  }
}

export function fetchMorePictures(query, page) {
  query = query.toLowerCase().split(' ').join('+');
  return (dispatch) => {
    return fetch('https://pixabay.com/api/?key=' + KEY + '&q=' + query + '&image_type=photo&page=' + page)
      .then(res => JSON.parse(res._bodyInit))
      .then(resJson => {
        console.log(resJson);
        return dispatch(getMorePictures(resJson.hits))
      })
      .catch(err => console.error(err));
  }
}

const defaultState = [];

export default function (state = defaultState, action) {
  switch (action.type) {
    case INITIAL_GET_PICTURES:
      return action.pictures;
    case GET_MORE_PICTURES:
      return [...state, ...action.pictures];
    default:
      return state;
  }
}
