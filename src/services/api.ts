import axios from 'axios';

// Consumindo uma api usada por JSON-SERVER

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
