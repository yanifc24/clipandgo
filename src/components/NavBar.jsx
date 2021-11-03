import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo2 from '../assets/imagenes/logo2.png'
import CartWidget from '../components/CartWidget'
import {Link} from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
             <Container>
               <Navbar.Brand as= {Link} to="/"><img src= {Logo2}  className="App-logo" alt="logo" width= "150px"/></Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link className="item-menu" as= {Link} to="/">Inicio</Nav.Link>
                    <Nav.Link className="item-menu"  href="#link">Sobre nosotros</Nav.Link>
                
                    <NavDropdown className="item-menu"  title="Productos" id="basic-nav-dropdown">
                       <NavDropdown.Item as= {Link} to="/categoria/agendas">Agendas</NavDropdown.Item>
                       <NavDropdown.Item as= {Link} to="/categoria/útiles">Útiles escolares</NavDropdown.Item>
                       <NavDropdown.Item as= {Link} to="/categoria/adhesivos">Adhesivos</NavDropdown.Item>
                       <NavDropdown.Divider />
                       <NavDropdown.Item as= {Link} to="/categoria/tecnología">Tecnología</NavDropdown.Item>
                    </NavDropdown>
                  <Nav.Link className="item-menu"  href="#link">Contacto</Nav.Link>
                  <Nav.Link as= {Link} to="/cart"><CartWidget/></Nav.Link> 
               </Nav>
      
               </Navbar.Collapse>
             </Container>
  
            </Navbar>


            
        </div>
    )
}

export default NavBar





