const KEY = '8099140-29bceed65327f7770d7a9b08b';

const GET_PICTURES = 'GET_PICTURES';

const getPictures = pictures => ({ type: GET_PICTURES, pictures });

export function fetchPictures(query, page) {
  query = query.toLowerCase().split(' ').join('+');
  return (dispatch) => {
    return fetch('https://pixabay.com/api/?key=' + KEY + '&q=' + query + '&image_type=photo&page=' + page)
      .then(res => JSON.parse(res._bodyInit))
      .then(resJson => {
        console.log(resJson);
        return dispatch(getPictures(resJson.hits))
      })
      .catch(err => console.error(err));
  }
}

const defaultState = [];

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_PICTURES:
      return action.pictures
    default:
      return state;
  }
}
