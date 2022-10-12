import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="container-prod">
      <h1 className="title-prod">NUESTROS PRODUCTOS</h1>

      <div className="subcontainer-prod">
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
