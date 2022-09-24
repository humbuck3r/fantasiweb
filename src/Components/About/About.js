import React from "react";
import Logo from "../../Assets/Img/Fantasy - logo 1.png";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <img src={Logo} alt="" />
      <h1>SOBRE NOSOTROS</h1>
      <p>
        Fantasi es una empresa familiar que nace a mediados de 2007. Actualmente
        cuenta con un local dedicado a la venta de cotillón y repostería. Con un
        amplio surtido de productos para carnaval, cumpleaños infantiles,
        bautismos, halloween, pascuas, fiestas navideñas, quinces, etc. A base
        de mucho esfuerzo y esmero, sigue hoy más vigente que nunca ofreciendo
        los mejores precios y la mayor calidad del mercado.
      </p>
    </div>
  );
};

export default About;
