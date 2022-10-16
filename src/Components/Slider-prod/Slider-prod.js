
import Img from '../../Assets/Img/rich.jpg';
import Lede from '../../Assets/Img/ledevit.png';
import Choco from '../../Assets/Img/img-productos.png'

import './Slider-prod.css'; 
import Carousel from 'react-bootstrap/Carousel';

function Sliprod() {
  return (
    <Carousel variant="dark" className="slide">
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Choco}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Choco}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img fluid"
          src={Choco}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliprod;