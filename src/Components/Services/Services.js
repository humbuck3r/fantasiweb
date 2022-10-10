import React from 'react';
import "./Services.css";
import Wsp from '../../Assets/Img/wsp card.png';
import Cake from '../../Assets/Img/cake card.png';
import Buy from '../../Assets/Img/buy card.png';
import Delivery from '../../Assets/Img/delivery card.png';


const Services = () => {
    return (
      <div className="serv ">
        <h1 className='title-serv'>NUESTROS SERVICIOS</h1>
        <h2 className='text-serv'>¡Tu cumpleaños o evento como a vos te guste!</h2>
        <div className="cards-serv">
          <div className="card">
            <img src={Wsp} className="wsp-img" alt='' />
            <p>Atención inmediata por WhatsApp</p>
          </div>
          <div className="card">
            <img src={Cake} className="wsp-img" alt=''/>
            <p>¡Personalizá todo lo que necesites!</p>
          </div>
          <div className="card">
            <img src={Buy} className="wsp-img" alt=''/>
            <p>¡Pagá como quieras desde donde estés!</p>
          </div>
          <div className="card">
            <img src={Delivery} className="wsp-img" alt=''/>
            <p>Te llevamos el pedido a tu hogar</p>
          </div>
        </div>
        <div>
       <button className="btn-serv">
        <h2>¡Hablemos Ahora!</h2>
       </button>
       </div>
      </div>
      
    );
}

export default Services;
