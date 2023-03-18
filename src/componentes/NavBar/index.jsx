import CardWidget from "../CardWidget";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


function NavBar () {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><NavLink to={"/"}> EAMP </NavLink></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><NavLink to ={"/category/blends"}> Blens de Té </NavLink></Nav.Link>
            <Nav.Link href="#features"><NavLink to ={"/category/tisana"}> Tisanas </NavLink></Nav.Link>
            <Nav.Link href="#pricing"><NavLink to ={"/category/tazones"}> Tazones </NavLink></Nav.Link>
            <Nav.Link href="#pricing"><NavLink to ={"/category/difusor"}> Difusores </NavLink></Nav.Link>
          </Nav>
          <CardWidget />
        </Container>
      </Navbar>
        
    )
}

export default NavBar;