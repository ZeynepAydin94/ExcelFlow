import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../store/userActions';
import '../styles/Login.css'; // CSS dosyasını import ettik
import { useLogin } from '../hooks/useLogin'; // useLogin hook'unu import ettik
const Login = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
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

  const handleLogout = () => {
    dispatch(logoutUser());
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {currentUser && (
        <div>
          <p>Welcome, {currentUser.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;