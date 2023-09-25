import React from 'react'
import classes from './Footer.module.css'
import footerLogo from '../../assets/footerLogo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className={classes.footerContainer}>
                <div className={classes.logo}>
                    <img src={footerLogo} alt="Logo" />
                </div>

                <p className={classes.text}>
                    2023 © ООО «КИТ МЕД». Все права защищены.<br />
                    Москва, Бульвар Энтузиастов д.2 Б.Ц. Голден Гейт; тел.: 8 (495) 225-99-55
                </p>
        </div>
        </div>
    )
}

export default Footer