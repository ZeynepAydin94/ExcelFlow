import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userActions";
import { authService } from "../services/authService";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const tokenResponse = await authService.login(email, password);
      const token = tokenResponse?.token;

      if (!token) throw new Error("Token alınamadı");

      localStorage.setItem("token", token);

      const user = await authService.fetchUser(token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(loginUser(user));
      return user;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};