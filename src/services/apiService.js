import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';  // API'nin temel URL'si

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET isteği
export const getRequest = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

// POST isteği
export const postRequest = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
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