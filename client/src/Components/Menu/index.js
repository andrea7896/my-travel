// import React,{Component} from 'react';
import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Button} from 'react-bootstrap';
import logo from '../../assets/logo2.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faHiking, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from "react-router";
import './menu.css';

export const Menu = (props) => {
    // render(){
        
        const history = useHistory();
        const {generalSettings,login,isLogged,setLogged} = React.useContext(GlobalContext);
        console.log("sddsds",isLogged);
        var route;
        if(isLogged){
            route = "/reservas"
        }else{
            route = "/login"
        }

        return (<Navbar collapseOnSelect expand="lg" className="my-navbar" variant="dark">
        <Link to="/">
            <Navbar.Brand>
                <img src={logo} alt="hi!" width="150px" className="zoomLogo d-inline-block align-top"></img>
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link to="/busquedas/" className="navLink nav-link"><FontAwesomeIcon icon={ faHotel }/> Hoteles</Link>
            <Link to="/puntos" className="navLink nav-link"><FontAwesomeIcon icon={ faMapMarkedAlt }/> Puntos de interés</Link>
        </Nav>
        <Nav>
            <Link to="/reservas" className="navLink nav-link"><FontAwesomeIcon icon={ faHiking }/> Welcome andrea7896!</Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
    // }
}
export default Menu;