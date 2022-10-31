import React from "react";
import "./About.css";
import iconoubi from "../../Assets/Img/icono-ubi.png";
import Scroll from "../Scroll-up/Scroll";
const About = () => {
  return (
    <div className="about">
      <div className="content-text">
        <h1 className="title-about">SOBRE NOSOTROS</h1>
        <p className="text-about">
          Fantasi es una empresa familiar que nace a mediados de 2007.
          Actualmente cuenta con un local dedicado a la venta de cotillón y
          repostería. Con un amplio surtido de productos para carnaval,
          cumpleaños infantiles, bautismos, halloween, pascuas, fiestas
          navideñas, quinces, etc. A base de mucho esfuerzo y esmero, sigue hoy
          más vigente que nunca ofreciendo los mejores precios y la mayor
          calidad del mercado.
        </p>
        <div className="scroll-container">
          <a href="https://www.google.com/maps/place/Fantasi+COTILLON/@-32.928982,-68.856196,15z/data=!4m5!3m4!1s0x0:0x6b8cb66bad18e402!8m2!3d-32.928982!4d-68.856196">
          <button
            className="btn-about"
            
          >
           
            <img src={iconoubi} className="btn-icono" alt="" />
            <h2>Visitanos en nuestra tienda</h2>
          </button>
          </a>
          <Scroll />
        </div>
      </div>
    </div>
  );
};

export default About;
