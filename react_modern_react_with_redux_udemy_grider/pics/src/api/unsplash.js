import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID 124680309868a36295c9ffb16a53d1fb66c5adccbc6c793db3bd1495e32c78a0`
  }
});
