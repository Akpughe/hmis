import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const register = async (userData) => {
  const response = await axios.post(API_URL + '/user/register', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

export const login = async (userData: {
  userData: {
    userNumber: string;
    password: string;
  };
}) => {
  const response = await axios.post(API_URL + '/user/login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

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
