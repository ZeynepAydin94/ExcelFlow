import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userActions';
import '../styles/Login.css'; // CSS dosyasını import ettik
import { useLogin } from '../hooks/useLogin'; // useLogin hook'unu import ettik
import { useNavigate } from 'react-router-dom';
import TextInput from "../components/form/TextInput";
import PasswordInput from "../components/form/PasswordInput";
import Button from "../components/form/Button";
const Login = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard'); // Eğer kullanıcı giriş yaptıysa Dashboard sayfasına yönlendir
    }
  }, [currentUser, navigate]);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // JWT payload
        const exp = payload.exp * 1000;
        const now = Date.now();

        if (exp > now) {
          dispatch(loginUser(JSON.parse(user)));
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      } catch (err) {
        console.error("Token parse error", err);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, [dispatch]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin(); // useLogin hook'unu kullanıyoruz
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login(username, password);
      if (userData) {
        dispatch(loginUser(userData)); // Redux'a loginUser eylemini dispatch ediyoruz
      }
    } catch (err) {
      // Handle error if necessary
    }
  };



  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <div className="fw-bold fs-2 text-center mb-4">
          <i className="bi bi-box-arrow-in-down-right me-2"></i>ExcelFlow
        </div>
        <form onSubmit={handleSubmit}>

          <TextInput
            label="Email"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />

          <PasswordInput
            label="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="success"
            className="w-100"
            loading={loading}
            disabled={loading}
          >
            Giriş Yap
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;