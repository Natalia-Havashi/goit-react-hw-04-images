import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '36947214-e67710a045a4cff9982bc6142',
  per_page: 12,
};


export const getImagesSerch = async (query, page) => {
  try {
    const { data } = await axios.get('', {
      params: {
        q: query,
        page,
        per_page: 12, 
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};











