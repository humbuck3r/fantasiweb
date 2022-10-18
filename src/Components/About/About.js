import React from "react";
import "./About.css";
import iconoubi from '../../Assets/Img/icono-ubi.png';
const About = () => {
  return (
    <div className="about" >
      <div className="content-text">
      <h1 className="title-about">SOBRE NOSOTROS</h1>
      <p className="text-about">
        Fantasi es una empresa familiar que nace a mediados de 2007. Actualmente
        cuenta con un local dedicado a la venta de cotillón y repostería. Con un
        amplio surtido de productos para carnaval, cumpleaños infantiles,
        bautismos, halloween, pascuas, fiestas navideñas, quinces, etc. A base
        de mucho esfuerzo y esmero, sigue hoy más vigente que nunca ofreciendo
        los mejores precios y la mayor calidad del mercado.
      </p>
      </div>
      <div>
        <button className="btn-about">
          <img src={iconoubi}  className="btn-icono" alt=''/>
          <h2>Visitanos en nuestra tienda</h2>
        </button>
      </div>
    </div>
  );
};

export default About;
