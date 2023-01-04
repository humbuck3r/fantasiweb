import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import Slider2 from "../../Assets/Img/1.jpg"


function Slider() {
  return (
    <Carousel variant="dark" className="slide" id="home">
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