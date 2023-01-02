import React from "react";
import "./Products.css";
import Carousel from "react-bootstrap/Carousel";
import Anti from "../../Assets/Img/antifaz-carnaval.jpg";
import Bombitas from "../../Assets/Img/bombitas.jpg"
import Bati from "../../Assets/Img/crema-batidisima.jpg"
import Rich from "../../Assets/Img/crema-bettercreme.jpg"
import Lede from "../../Assets/Img/crema-chantilly.jpg"
import Ultra from "../../Assets/Img/crema-ultrarich.jpg"
import Desc from  "../../Assets/Img/descartable2.jpg"
import Globos from "../../Assets/Img/globos.jpg"
import Gomitas from "../../Assets/Img/Gomitas Misky.jpg"
import Juguete from "../../Assets/Img/juguetes-piñata.jpg"
import Jugpi from "../../Assets/Img/juguetes-varios.jpg"
import Skate from  "../../Assets/Img/Patinetas.jpg"
import Moldes from "../../Assets/Img/moldes.jpg"
import Merengue from "../../Assets/Img/merengue.jpg"
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
                src={Anti}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Bati}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Bombitas}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Rich}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Lede}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Ultra}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Desc}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Globos}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Gomitas}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Jugpi}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Juguete}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Skate}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Moldes}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-prod "
                src={Merengue}
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
