import { useState } from 'react';
import { postRequest } from '../services/apiService'; // API servis fonksiyonunu daha sonra ekleyeceğiz.

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await postRequest('/login', { username, password });
      setLoading(false);
      return response;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  return { login, loading, error };
};