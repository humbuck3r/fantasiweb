import React from 'react';
import "./Services.css";
import Wsp from '../../Assets/Img/wsp card.png';
import Cake from '../../Assets/Img/cake card.png';
import Buy from '../../Assets/Img/buy card.png';
import Delivery from '../../Assets/Img/delivery card.png';


const Services = () => {
    return (
      <div className="serv ">
        <h1 className='title'>NUESTROS SERVICIOS</h1>
        <h2 className='text'>¡Tu cumpleaños o evento como a vos te guste!</h2>
        <div className="cards-serv">
          <div className="card">
            <img src={Wsp} className="wsp-img" alt='' />
            <p>Atención inmediata por Whatsapp</p>
          </div>
          <div className="card">
            <img src={Cake} className="wsp-img" alt=''/>
            <p>Atención inmediata por Whatsapp</p>
          </div>
          <div className="card">
            <img src={Buy} className="wsp-img" alt=''/>
            <p>Atención inmediata por Whatsapp</p>
          </div>
          <div className="card">
            <img src={Delivery} className="wsp-img" alt=''/>
            <p>Atención inmediata por Whatsapp</p>
          </div>
        </div>
      </div>
    );
}

export default Services;
