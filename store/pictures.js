const KEY = '8099140-29bceed65327f7770d7a9b08b';

export function getPictures(query) {
  console.log(query);
  query = query.split(' ').join('+');
  return fetch('https://pixabay.com/api/?' + KEY + '&q=' + query + '&image_type=photo')
    .then(res => res.json)
    .then(resJson => resJson.hits)
    .catch(err => console.error(err));
}
