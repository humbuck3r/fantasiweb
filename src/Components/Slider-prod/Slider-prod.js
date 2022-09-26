
import Img from '../../Assets/Img/rich.jpg';
import Lede from '../../Assets/Img/ledevit.png';
import Choco from '../../Assets/Img/chocolart.jpg'
import Carousel from 'react-bootstrap/Carousel';


function Sliprod() {
  return (
    <Carousel variant="dark">
      <Carousel.Item active>
        <img
          className="d-block w-100"
          src={Img}
          alt="First slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item active>
        <img
          className="d-block w-100"
          src={Lede}
          alt="Second slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item active>
        <img
          className="d-block w-100"
          src={Choco}
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliprod;