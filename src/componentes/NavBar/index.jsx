import CardWidget from "../CardWidget";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar () {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">EAMP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Blens de Té</Nav.Link>
            <Nav.Link href="#features">Tisanas</Nav.Link>
            <Nav.Link href="#pricing">Tazones</Nav.Link>
            <Nav.Link href="#pricing">Difusores</Nav.Link>
          </Nav>
          <CardWidget />
        </Container>
      </Navbar>
        
    )
}

export default NavBar;