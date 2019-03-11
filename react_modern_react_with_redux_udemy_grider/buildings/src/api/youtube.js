import axios from 'axios';

const KEY = 'AIzaSyB9QsbPxJHts_hRC2CnvhTpKaX_6lN5g48';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const youtube = axios.create({
  baseURL: BASE_URL,
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});

export default youtube;
