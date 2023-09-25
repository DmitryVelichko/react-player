import React, { useState, useEffect } from 'react';
import './AuthPage.css'
import axios from 'axios';
import Cookies from 'js-cookie';

function AuthPage() {


  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  async function handleLogin() {
    try {
      const response = await axios.get(`https://api......com/api/authentication/jwt/student?phoneNumber=${phoneNumber}`);
      console.log("!LOG/student" + response?.data)
      
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;

      Cookies.set('accessToken', accessToken, { expires: 7 });
      Cookies.set('refreshToken', refreshToken, { expires: 7 });

      window.location.reload();
      
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }   
  }

  return (
    <div className="authorization-page">
      <div className="form-container">
        <h2>Добро пожаловать!</h2>
        <p className='description'>Для авторизации, пожалуйста, введите номер телефона, <br/> который Вы оставляли при приобретении курса</p>
        <div className='notice'>
          <p className='attention-message'>*Необходимо вводить только цифры, без знака "+", скобок и дефисов</p>
          <p className='attention-message'>*Для российских номеров необходимо использовать цифру 7, а не 8</p>
        </div>
        <div className='phone-input-box'>
          <span className='plus'>+ </span>
          <input
            type="text"
            placeholder="Телефон"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button className='auth-page-btn' onClick={handleLogin}>Войти</button>
        </div>

      </div>
    </div>
  );
}

export default AuthPage;
