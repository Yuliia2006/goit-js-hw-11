import axios from "axios";

const API_KEY = '50800171-f0005a0681d5ee847775b056c';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  };

  return axios.get(BASE_URL, { params })
    .then(response => {
      if (response.data.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }
      return response.data; 
    });
}