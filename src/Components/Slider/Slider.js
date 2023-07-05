import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import Slider1 from "../../Assets/Img/hist.jpg"
import Slider3 from "../../Assets/Img/SLIDERHORARIO.png"
import Slider4 from "../../Assets/Img/slidertodo.png"
function Slider() {
  return (
    <Carousel variant="dark" className="slide" id="home">
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Slider1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Slider3}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Slider4}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;