import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const getPatients = async () => {
    const response = await axios.get(API_URL + '/patient/get-all-patients');
    return response.data;
}

export const getTotalPatients = async () => {
    const response = await axios.get(API_URL + '/patient/get-total-patients');
    return response.data;
}

const patientService = {
    getPatients,
    getTotalPatients
}

export default patientService;