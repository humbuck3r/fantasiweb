import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import Slider1 from "../../Assets/Img/slider1.png"
import Slider2 from "../../Assets/Img/Slider2.png"
import Slider3 from "../../Assets/Img/Slider3.png"


function Slider() {
  return (
    <Carousel variant="dark" className="slide">
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Slider2}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Slider2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Slider2}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;