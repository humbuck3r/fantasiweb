import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../../Assets/Img/Fantasy - logo 1.png'
import "./Navbar.css"

function HeadNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="nv">
        <Navbar.Brand href="#home">
          <a alt="logo" href="#">
            <img src={Logo} className="" alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navs">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="btn-nav">
          <h2>Contacto</h2>
        </button>
      </Container>
    </Navbar>
  );
}

export default HeadNav;
