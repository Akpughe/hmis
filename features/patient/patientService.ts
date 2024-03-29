import axios from 'axios';
const API_URL = 'https://myhmis.herokuapp.com/api';

export const getPatients = async () => {
  const response = await axios.get(API_URL + '/patient/get-all-patients');
  return response.data;
};

export const getTotalPatients = async () => {
  const response = await axios.get(API_URL + '/patient/get-total-patients');
  return response.data;
};

export const addPatient = async (patientData) => {
  const response = await axios.post(API_URL + '/user/register', patientData);
  return response.data;
};

const patientService = {
  getPatients,
  getTotalPatients,
  addPatient,
};

export default patientService;
