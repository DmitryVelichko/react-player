import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AuthPage.css'

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (login === '1' && password === '2') {
      // Redirect to the Dashboard page if login and password match
      navigate('/logged-in');
    } else {
    
      alert('Login failed');
    }
  };

  return (
    <div className="authorization-page">
      <div className="form-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
