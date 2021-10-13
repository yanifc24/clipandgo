import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo2 from '../assets/imagenes/logo2.png'

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src= {Logo2}  className="App-logo" alt="logo" width= "150px"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Sobre nosotros</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Agendas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Útiles escolares</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Adhesivos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Tecnología</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


            
        </div>
    )
}

export default NavBar
