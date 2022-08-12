import axios from 'axios';
import jsCookie from 'js-cookie';

export async function postAsync(url, body) {
  const token = jsCookie.get('token');

  try {
    const response = await axios.post(url, body, {
      headers: {
        'x-auth-token': token,
      },
    });
    return response;
  } catch (err) {
    return Promise.reject(err);
    // console.log(err)
  }
}
export async function getAsync(url) {
  const token = jsCookie.get('token');

  try {
    const response = await axios.get(url, {
      headers: {
        'x-auth-token': token,
      },
    });
    return response;
  } catch (err) {
    return Promise.reject('Network Error');
  }
}
