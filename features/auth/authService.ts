import axios from 'axios';
import jsCookie from "js-cookie";

const API_URL = 'https://myhmis.herokuapp.com/api';

export const register = async (userData) => {
  const response = await axios.post(API_URL + '/user/register', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(API_URL + '/user/login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  const token = response.data.token
  jsCookie.set('token', token);
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
