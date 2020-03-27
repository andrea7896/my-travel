import React,{Component} from 'react'
import { withRouter } from "react-router-dom";
import Image from "react-bootstrap/Image";
import axios from "axios";
import {
    Row,
    Col,
    Container,
    Input,
    Button,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Form,
    FormGroup
  } from "reactstrap";
  
  import fuji from "../../assets/fuji.jpg";
  import adventure from "../../assets/adventure.jpg";
  import friends from "../../assets/friends.jpg";
  import love from "../../assets/couples.jpg";
  import "../Principal/principal.css";
class CategoryButtons extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    getByCategory = e => {
        console.log("este es el console",this.props);
        e.preventDefault();
        const v = e.currentTarget.dataset.div_id;
        this.props.history.push(`/busquedas/${v}`);
      };
    
    render(){
        return <div className="btnContainer">
        <Col className="btnEmotions">
          <div class="outer-div">
            <div
              class="inner-div"
              data-div_id={1}
              onClick={this.getByCategory}
            >
              <Image
                src={fuji}
                width="150"
                height="150"
                roundedCircle
              ></Image>
            </div>
          </div>
          <p>Tranquilidad</p>
        </Col>

        <Col className="btnEmotions zoom">
          <div class="outer-div">
            <div
              class="inner-div"
              data-div_id={2}
              onClick={this.getByCategory}
            >
              <Image
                src={adventure}
                width="150"
                height="150"
                roundedCircle
              ></Image>
            </div>
          </div>
          <p>Aventura</p>
        </Col>
        <Col className="btnEmotions zoom">
          <div class="outer-div">
            <div class="inner-div"
            data-div_id={3}
            onClick={this.getByCategory}>
              <Image
                src={love}
                width="150"
                height="150"
                roundedCircle
              ></Image>
            </div>
          </div>
          <p>Amor</p>
        </Col>
        <Col className="btnEmotions zoom">
          <div class="outer-div">
            <div class="inner-div"
            data-div_id={4}
            onClick={this.getByCategory}>
              <Image
                src={friends}
                width="150"
                height="150"
                roundedCircle
              ></Image>
            </div>
          </div>
          <p>Amistad</p>
        </Col>
      </div>
    }
}

export default withRouter(CategoryButtons);