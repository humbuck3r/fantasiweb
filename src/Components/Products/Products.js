import React from "react";

import Img from "../../Assets/Img/cupcake.png";

const Products = () => {
  return (
    <div>
      <div>
        <h1>NUESTROS PRODUCTOS</h1>
        <img src={Img} />
        <p>
          Contamos con un amplio surtido en productos, abarcando carnaval,
          cotillón infantil, materias primas y accesorios de repostería,
          golosinas, manualidades, disfraces, descartables y mucho más. Mejor
          ecuación Precio / Beneficio para nuestros clientes. Innovación
          constante en nuestro modelo de ventas.
        </p>
        <button className="btn">
          <h2>Contacto</h2>
        </button>
      </div>
    </div>
  );
};

export default Products;
