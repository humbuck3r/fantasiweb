import React from "react";
<<<<<<< HEAD
import "./Products.css";

const Products = () => {
  return (
    <div className="container-prod">
      <h1 className="title-prod">NUESTROS PRODUCTOS</h1>

      <div className="subcontainer-prod">
=======
import "./Products.css"; 
import Sliderprod from '../Slider-prod/Slider-prod'
function Products() {
  return (
    <div className="container-prod">
      <h1 className="title-prod">NUESTROS PRODUCTOS</h1>
      <div className="subcontainer-prod">

      <Sliderprod/>
      
>>>>>>> c58c6a9a71f288c2920b4132cb2492a6979f1039
        <div className="content-prod">
          <p>
            Contamos con un amplio surtido en productos, abarcando carnaval,
            cotillón infantil, materias primas y accesorios de repostería,
            golosinas, manualidades, disfraces, descartables y mucho más.
            <ul className="content-prod-list">
              <li>Mejor ecuación Precio / Beneficio para nuestros clientes.</li>
            </ul>
            <ul>
              <li>Innovación constante en nuestro modelo de ventas.</li>
            </ul>
          </p>
        </div>
      </div>
      <div>
        <button className="btn-prod">
          <h2>¡Quiero una Cotización!</h2>
        </button>
      </div>
    </div>
  );
}

export default Products;
