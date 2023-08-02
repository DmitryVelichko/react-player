import React from 'react'
import logo from '../../assets/logo.png'
import faceImg from '../../assets/face.png'
import Banner from '../Banner/Banner'
import './FirstScreen.css'

const FirstScreen = () => {
  return (
    <div className="screen1">
      <div className="nav-container">
        <div className="half-circle">

          <img className='logo-image' src={logo} alt="Cadaver Logo" />

        </div>

        <div className="nav-elements">
          <a href="#home">О продукте</a>
          <a href="#about">Видеокурсы</a>
          <a href="#services">Контакты</a>
          <a href="#contact">Партнеры</a>
        </div>
      </div>
      <div className="text-image-container">
        <div className="text-container">
          <h1 className='heading'>DOCTOR STAR CADAVER</h1>
          <h2 className='subheading'>КОМПЕТЕНЦИИ В ДЕТАЛЯХ</h2>
          <hr className="horizontal-line" />
          <p className='paragraph'>Авторский кадавер курс, направленный на детальный разбор
            анатомических особенностей зон лица и шеи, повышения компетенций профессионального сообщества врачей эстетической медицины. Впервые будет представлен анатомический разбор аппаратных методик с гистологическим обоснованием.</p>

          <div className="button-container">
            <div className="button1">
              <button>7 - 8 - 9 августа 2023 г.</button>
              <h3 className='button-p-text1'>формат онлайн</h3>
            </div>
            <div className="button2">
              <button>С 10:00 до 15:00 (мск)</button>
              <h3 className='button-p-text2'>ежедневно</h3>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={faceImg} alt="Human anatomy face" />
        </div>
      </div>
      <Banner />
    </div>
  )
}

export default FirstScreen