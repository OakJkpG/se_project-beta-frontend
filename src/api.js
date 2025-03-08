import axios from 'axios';

const API_URL = 'https://your-backend-url.com/api';

export const getBooks = async () => {
  const response = await axios.get(`${API_URL}/books/`);
  return response.data;
};
