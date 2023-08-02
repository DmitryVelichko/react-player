import React from 'react'
import './Banner.css'
import arrowUp from '../../assets/arrowup.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-box">
            <div className='banner-text-left'>
            <p>День 1 - 6 августа 2023</p>
            <p>ЗАГОЛОВОК С НАЗВАНИЕМ КУРСА</p>
            </div>

            <div className="banner-icon">
                <img src={arrowUp} alt="Arrow Up" />
            </div>

            <div className='banner-text-right'>
            <p>Доступно до</p>
            <p>10.08.2023 00:00 (GMT +3:00)</p>
            </div>
        </div>
    </div>
  )
}

export default Banner