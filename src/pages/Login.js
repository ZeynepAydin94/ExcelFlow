import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { AppContext } from '../context/AppContext'; // Context API
import { useDispatch } from 'react-redux'; // Redux için

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin();
  const { loginUser } = useContext(AppContext); // Context API kullanımı
  const dispatch = useDispatch(); // Redux dispatch
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await login(username, password);
    if (userData) {
      // Context API ile kullanıcıyı yönet
      loginUser(userData);

      // Redux ile kullanıcıyı store'a ekle
      dispatch({ type: 'SET_USER', payload: userData });

      navigate('/dashboard'); // Login sonrası dashboard'a yönlendir
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;