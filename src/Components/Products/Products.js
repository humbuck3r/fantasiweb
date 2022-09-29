import React from "react";
import "./Products.css";
import Sliprod from "../Slider-prod/Slider-prod"; 
const Products = () => {
  return (
    <div className="container-prod">
      <h1 className="title-prod">NUESTROS PRODUCTOS</h1>

      <div className="subcontainer-prod">
        <Sliprod/>
        <div className="content-prod">
          <p>
            Contamos con un amplio surtido en productos, abarcando carnaval,
            cotillón infantil, materias primas y accesorios de repostería,
            golosinas, manualidades, disfraces, descartables y mucho más.
            
           * Mejor ecuación Precio / Beneficio para nuestros clientes.
           * Innovación constante en nuestro modelo de ventas.
          </p>
          <button className="btn-prod">
            <h2>¡Quiero una Cotización!</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
