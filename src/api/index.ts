import axios from 'axios';
import { API_KEY, API_URL } from '../core/constants';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});
