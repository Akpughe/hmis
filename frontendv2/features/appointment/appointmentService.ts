const API_URL = 'http://localhost:4000/api';
import { getAsync, postAsync } from '../../lib/adapter';

export const getAllAppointments = async () => {
  const response = await getAsync(API_URL + '/schedule/get-all-appointments');
  return response.data;
};

export const createAppointments = async (appointment) => {
  const response = await postAsync(API_URL + '/schedule/book-appointment', appointment);
  return response.data;
};


const appointmentService = {
    getAllAppointments,
    createAppointments
}

export default appointmentService;