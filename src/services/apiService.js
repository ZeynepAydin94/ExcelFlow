import axios from 'axios';

// Her çağrıda yeni bir axios instance üretir
const createApi = (baseUrl) =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

// GET isteği
export const getRequest = async (baseUrl, endpoint, config = {}) => {
  try {
    const response = await createApi(baseUrl).get(endpoint, config);
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error?.response?.data || error;
  }
};

// POST isteği
export const postRequest = async (baseUrl, endpoint, data = {}, config = {}) => {
  try {
    const response = await createApi(baseUrl).post(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error?.response?.data || error;
  }
};

// PUT isteği
export const putRequest = async (baseUrl, endpoint, data = {}, config = {}) => {
  try {
    const response = await createApi(baseUrl).put(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error?.response?.data || error;
  }
};

// DELETE isteği
export const deleteRequest = async (baseUrl, endpoint, config = {}) => {
  try {
    const response = await createApi(baseUrl).delete(endpoint, config);
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error?.response?.data || error;
  }
};