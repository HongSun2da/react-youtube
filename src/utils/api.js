import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '48'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) => {
    try{
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        console.log(data);
        return data;
    } catch(error){
        console.error(error);
    }
}
