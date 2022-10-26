import React from 'react';
import './Footer.css';
import logo from '../../Assets/Img/logo-white.png'
import instagram from '../../Assets/Img/ig-img.png'
import facebook from '../../Assets/Img/fb-img.png'
import whatsapp from '../../Assets/Img/wsp-img2.png'



const Footer = () => {
    return (
    <div className='foot'>
            <img src={logo} className="logo-foot" alt=''/>
            <div className='linea'></div>
             <div className='social'>
                <a alt="instagram" href="https://www.instagram.com/fantasicotillon/">
                    <img src={instagram} className="icon-ig" alt=''/>
                </a>
                <a alt="instagram" href="https://www.facebook.com/Fantasicotillon">
                    <img src={facebook} className="icon-fb" alt=''/>
                </a>
                 <a alt="instagram" href="https://wa.link/qb2hf3">
                    <img src={whatsapp} className="icon-wsp" alt=''/>
                </a>
                <div className='enlace'>
                <p>Powered by</p> 
                <a href="https://linktr.ee/estudioeme">Emestudio</a>
                </div>
             </div>
    </div>
    );
}

export default Footer;
