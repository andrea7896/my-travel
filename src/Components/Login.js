import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContextProvider';
import { TextField, Grid} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container,Button} from 'reactstrap';
import * as ReactStrap from 'reactstrap';
import MaterialButton from '@material-ui/core/Button';
import '../index.css';


//export default = ()
export const Login = () => {
    const {username, password} = React.useContext(GlobalContext);


    const [userInput,setUser]=React.useState("");
    const [passwordInput,setPassword]=React.useState("");
    

    //del provider
    //console.log("Login -> username", username);
    
    function checkInput(){
        if(username === userInput && password === passwordInput){
            console.log("Login exitoso")
        }else{
            console.log("Acceso denegado")
        }
    }

    var onChangeTextField = setter => ({target}) => setter(target.value);

    return <body className="bodyLogin">
    <Container className="divLogin">
            <Grid xs={6}>
                <h1>My travels</h1>
                <h6>Get started making good memories</h6>
            </Grid>
            <Grid xs={6} className="loginForm">
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

           
           </Grid>
           <ReactStrap.Button>Ramiro</ReactStrap.Button>
            <MaterialButton>Ramiro2</MaterialButton>
            
            
    </Container>
    </body>
}

export default Login;