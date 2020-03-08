import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import logo from '../../assets/andy_logo.png'
class Menu extends Component{

    render(){
        return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src={logo} width="150px" className="d-inline-block align-top"
        ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/busquedas">Hoteles</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/reservas">login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    }

}

export default Menu