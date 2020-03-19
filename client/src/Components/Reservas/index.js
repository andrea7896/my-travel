import React,{Component} from 'react';
import {Container,Col} from 'reactstrap';
import Image from "react-bootstrap/Image";
import girl from "../../assets/girl.jpg";
class Reservas extends Component{

    render(){
        return <div>
            <Container>
                <Col>
                <Image
                src={girl}
                width="150"
                height="150"
                roundedCircle
              ></Image>
                </Col>
            </Container>
        </div>
    }
}

export default Reservas