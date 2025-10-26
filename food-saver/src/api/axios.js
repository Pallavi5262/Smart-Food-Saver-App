import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // for development
  // baseURL: 'https://your-backend.onrender.com/api' // when deployed
});

export default instance;
