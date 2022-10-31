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
      <div className="serv " id="services">
        <h1 className='title-serv'>NUESTROS SERVICIOS</h1>
        <h2 className='text-serv' >¡Tu cumpleaños o evento como a vos te guste!</h2>
        <div  className="cards-serv">
          <div className="card" data-aos="flip-right" >
            <img src={Wsp} className="wsp-img" alt='' />
            <p>Atención inmediata por WhatsApp</p>
          </div>
          <div className="card" data-aos="flip-right" >
            <img src={Cake} className="cake-img" alt=''/>
            <p>¡Personalizá todo lo que necesites!</p>
          </div>
          <div className="card"data-aos="flip-right" >
            <img src={Buy} className="buy-img" alt=''/>
            <p>¡Pagá como quieras desde donde estés!</p>
          </div>
          <div className="card"data-aos="flip-right" >
            <img src={Delivery} className="delivery-img" alt=''/>
            <p>Te llevamos el pedido a tu hogar</p>
          </div>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=542612122794">
       <button className="btn-serv">
        <h3>¡Hablemos Ahora!</h3>
       </button>
       </a>
       </div>
      </div>
      
    );
}

export default Services;
