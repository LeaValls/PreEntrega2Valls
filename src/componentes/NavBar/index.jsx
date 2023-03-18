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
          <Navbar.Brand href="#home"><NavLink style={{ textDecoration: "none", color: "black" }} to={"/"}> EAMP </NavLink></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><NavLink style={{ textDecoration: "none", color: "black" }} to ={"/category/blends"}>Blens de Té</NavLink></Nav.Link>
            <Nav.Link href="#features"><NavLink style={{ textDecoration: "none", color: "black" }} to ={"/category/tisana"}>Tisanas</NavLink></Nav.Link>
            <Nav.Link href="#pricing"><NavLink style={{ textDecoration: "none", color: "black" }} to ={"/category/tazones"}>Tazones</NavLink></Nav.Link>
            <Nav.Link href="#pricing"><NavLink style={{ textDecoration: "none", color: "black" }} to ={"/category/difusor"}>Difusores</NavLink></Nav.Link>
          </Nav>
          <CardWidget />
        </Container>
      </Navbar>
        
    )
}

export default NavBar;