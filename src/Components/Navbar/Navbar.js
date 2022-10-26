import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../../Assets/Img/Fantasy - logo 1.png'
import "./Navbar.css"
import Share from '../../Assets/Img/📍Trailing icon 2.png'

function HeadNav() {
  
  window.addEventListener("scroll",function(){
    let header = document.querySelector("header");

    header.classList.toggle("abajo",this.window.scrollY>0);
    
  })
  
  return (
    <header>
    <Navbar bg="light" expand="lg" className="nav-bar fixed-top" id="nav">
    
        <Navbar.Brand href="#home">
          <a alt="logo" href="#home">
            <img src={Logo} className="logo" alt="" />
          </a>
          <a alt="share" href="#home">
        <img src={Share} className="share" alt=""/>
       </a> 
          
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto-navs">
            <Nav.Link href="#home"><h2 className="navs-title">Inicio</h2></Nav.Link>
            <Nav.Link href="#link"><h2 className="navs-title">Servicios</h2></Nav.Link>
            <Nav.Link href="#link"><h2 className="navs-title">Productos</h2></Nav.Link>
            <Nav.Link href="#link"><h2 className="navs-title">Nosotros</h2></Nav.Link>
            <Nav.Link href="#link"><h2 className="navs-title">Contacto</h2></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="btn-nav">
          <h2>Contacto</h2>
        </button>
      
    </Navbar>
    </header>
  );
}

export default HeadNav;
