import { useState } from 'react';
import { getRequest, postRequest } from '../services/apiService'; // API servis fonksiyonunu daha sonra ekleyeceğiz
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/userActions'; // Redux action'ı

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Token almak için API çağrısı yapıyoruz
      const response = await postRequest('/Auth/token', { email, password });
      const token = response?.token; // Token'ı alıyoruz

      if (token) {
        // Token'ı localStorage'a kaydediyoruz
        localStorage.setItem('token', token);

        // Kullanıcı bilgilerini almak için API çağrısı yapıyoruz
        const userResponse = await getRequest('/Auth/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Token'ı header'a ekliyoruz
          },
        });
        localStorage.setItem('user', JSON.stringify(userResponse));
        // Kullanıcı bilgilerini Redux'a kaydediyoruz
        dispatch(loginUser(userResponse));

        setLoading(false);
        return userResponse; // Kullanıcı bilgilerini döndürüyoruz
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  return { login, loading, error };
};