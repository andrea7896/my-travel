import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContextProvider';
import { TextField, Grid} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container,Button} from 'reactstrap';
import * as ReactStrap from 'reactstrap';
import logo from '../assets/logo2.png';
import MaterialButton from '@material-ui/core/Button';
import '../index.css';
import axios from 'axios';


//export default = ()
export const Login = ({history}) => {

    const {generalSettings,login,isLogged}= React.useContext(GlobalContext);
    
    const [userInput,setUser]=React.useState("");
    const [passwordInput,setPassword]=React.useState("");
       
    function checkInput(){
        login(userInput,passwordInput);
        history.push('/reservas');
    }

    var onChangeTextField = setter => ({target}) => setter(target.value);

    return <body className="bodyLogin">
    <Container className="divLogin">
        <Row>
            <Col lg={6} style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                <img src={logo} alt="hi!" width="400px" className="zoomLogo d-inline-block align-top"></img>
                <h6>Get started making good memories</h6>
            </Col>
            <Col lg={6} className="loginForm">
            <Row>
                <h3>Please login</h3>
            </Row>
            <br></br>
            <Row>
            <TextField id="outlined-basic" label="User" variant="outlined" onChange={onChangeTextField(setUser)} />
            </Row>
            <br></br>
            <Row>
            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={onChangeTextField(setPassword)} />
            </Row>
            <br></br>
            <Row style={{display:"flex",justifyContent:"space-between"}}>
            <Button outline color="primary">Sign in</Button>
            
            <Button style={{marginLeft:20}} color="primary" disabled={userInput === "" || passwordInput === ""}
            onClick={checkInput}>Login</Button>
           </Row>
           </Col>
           </Row>           
    </Container>
    </body>
}

export default withRouter(Login);