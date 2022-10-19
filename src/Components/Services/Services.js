import React from 'react';
import { useEffect } from 'react';
import "./Services.css";
import Wsp from '../../Assets/Img/wsp-img.png';
import Cake from '../../Assets/Img/cake-img.png';
import Buy from '../../Assets/Img/buy-img.png';
import Delivery from '../../Assets/Img/delivery-img.png';
import Aos from 'aos';
import "aos/dist/aos.css";

const Services = () => {
    
    useEffect(() => {
      Aos.init({duration: 2000})
    }
    ,[]);
  
  
  
  
  return (
      <div className="serv ">
        <h1 className='title-serv' data-aos="fade-left">NUESTROS SERVICIOS</h1>
        <h2 className='text-serv' data-aos="flip-right">¡Tu cumpleaños o evento como a vos te guste!</h2>
        <div  className="cards-serv">
          <div className="card" data-aos="flip-left">
            <img src={Wsp} className="wsp-img" alt='' />
            <p>Atención inmediata por WhatsApp</p>
          </div>
          <div className="card" data-aos="flip-left">
            <img src={Cake} className="cake-img" alt=''/>
            <p>¡Personalizá todo lo que necesites!</p>
          </div>
          <div className="card" data-aos="flip-left">
            <img src={Buy} className="buy-img" alt=''/>
            <p>¡Pagá como quieras desde donde estés!</p>
          </div>
          <div className="card" data-aos="flip-left">
            <img src={Delivery} className="delivery-img" alt=''/>
            <p>Te llevamos el pedido a tu hogar</p>
          </div>
        </div>
        <div>
       <button className="btn-serv">
        <h3>¡Hablemos Ahora!</h3>
       </button>
       </div>
      </div>
      
    );
}

export default Services;
