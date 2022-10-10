import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import Slider1 from "../../Assets/Img/slider1.png"
import Slider2 from "../../Assets/Img/Slider2.png"
import Slider3 from "../../Assets/Img/Slider3.png"

function Slider() {
  return (
    <div className="slide">
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
   
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;
