import axios from 'axios';

const API_BASE_URL = 'http://localhost:5230/api';  // API'nin temel URL'si

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET isteği
export const getRequest = async (endpoint, header) => {
  try {
    const response = await api.get(endpoint, header);
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

// POST isteği
export const postRequest = async (endpoint, data, header) => {
  try {
    const response = await api.post(endpoint, data, header);
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

// PUT isteği
export const putRequest = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};

// DELETE isteği
export const deleteRequest = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};