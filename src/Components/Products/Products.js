import React from "react";
import "./Products.css";
import Carousel from "react-bootstrap/Carousel";
import Choco from "../../Assets/Img/cupcake.png";
const Products = () => {
  return (
    <>
     
      
      <h2 className="title-prod" id="products">NUESTROS PRODUCTOS</h2>
      <div className="container-prod">
      <div className="carousel-cont">  
          <Carousel variant="dark" className="slide-prod ">
            <Carousel.Item className="slide-item">
              <img
                className="d-block w-100 img-prod "
                src={Choco}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Choco}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Choco}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          </div>
        <div className="subcontainer-prod" data-aos="zoom-in">
            <p>
              Contamos con un amplio surtido en productos, abarcando carnaval,
              cotillón infantil, materias primas y accesorios de repostería,
              golosinas, manualidades, disfraces, descartables y mucho más.
              Mejor ecuación Precio / Beneficio para nuestros clientes.
              Innovación constante en nuestro modelo de ventas.
            </p>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=542612122794">
      <button className="btn-prod">
        <h2>¡Quiero una Cotización!</h2>
      </button>
      </a>
    </>
  );
};

export default Products;
