import { getAsync } from "../../lib/adapter";
const API_URL = 'http://localhost:4000/api';
// const API_URL = 'https://myhmis.herokuapp.com/api';

export const getDoctors = async () => {
  const response = await getAsync(API_URL + '/user/get-all-docs');
  return response.data;
};


const doctorService = {
    getDoctors
};

export default doctorService;
