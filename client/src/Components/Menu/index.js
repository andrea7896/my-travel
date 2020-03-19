import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/logo2.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faHiking, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';

import './menu.css';

class Menu extends Component{
    render(){
        return (<Navbar collapseOnSelect expand="lg" className="my-navbar" variant="dark">
        <Link to="/">
            <Navbar.Brand>
                <img src={logo} alt="hi!" width="150px" className="zoomLogo d-inline-block align-top"></img>
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link to="/busquedas" className="navLink nav-link"><FontAwesomeIcon icon={ faHotel }/> Hoteles</Link>
            <Link to="/puntos" className="navLink nav-link"><FontAwesomeIcon icon={ faMapMarkedAlt }/> Puntos de interés</Link>
        </Nav>
        <Nav>
            <Link to="/login" className="navLink nav-link"><FontAwesomeIcon icon={ faHiking }/> login</Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
)
}
}
export default Menu;