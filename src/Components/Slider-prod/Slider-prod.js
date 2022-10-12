
import Img from '../../Assets/Img/rich.jpg';
import Lede from '../../Assets/Img/ledevit.png';
import Choco from '../../Assets/Img/img-productos.png'
import Carousel from 'react-bootstrap/Carousel';
import './Slider-prod.css'; 

function Sliprod() {
  return (
    <Carousel variant="dark">
      <Carousel.Item active>
        <img className="img-slide d-block" src={Img} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item active>
        <img className="img-slide d-block" src={Lede} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item active>
        <img className=" img-slide d-block" src={Choco} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliprod;