import React from 'react'
import logo2 from '../../assets/logohalfcircle123.png'
import faceImg from '../../assets/face.png'
import './Promo.css'
import './Media.css'

const Promo = () => {
  return (
    <div className="screen1">
      <div className="nav-container">
        <div className="half-circle">

          <img className='logo-image' src={logo2} alt="Cadaver Logo" />

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
              <button>7 - 8 - 9 августа&nbsp;2023&nbsp;г.</button>
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
      {/* <div className='server-notice'>
        <p>В связи с повышенной нагрузкой на сервера, при просмотре видео могли наблюдаться неполадки. На данный момент ситуация с серверами стабилизирована, однако часть конфигураций все еще производятся, в связи с чем начало трансляции второго дня может быть с небольшой задержкой.</p>
        <p>Приносим извинения за доставленные неудобства.</p>
      </div> */}
    </div>
  )
}

export default Promo