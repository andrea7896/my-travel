import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Image from "react-bootstrap/Image";
import girl from "../../assets/girl.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking, faCamera, faHeart,faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import fuji from "../../assets/fuji.jpg";
import adventure from "../../assets/adventure.jpg";
import friends from "../../assets/friends.jpg";
import love from "../../assets/couples.jpg";
import { formatter } from "../../assets/Constants/constants.js";
import "./reservas.css";
import axios from 'axios';

class Reservas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservas: [],
      modalDelete:false,
      modalInfo:false,
      counter:1,
      color:"grey"
    };
  }

  componentWillMount(){
    axios
    .get("http://localhost:9002/reservas/list")
    .then(response => this.setState({ reservas: response.data }))
    .catch(err => console.log(err));
  }
 
  deleteReserva = (e,idBooking,index) => {
    e.preventDefault();
  
    const parent = this;
    axios.put("http://localhost:9002/reservas/eliminar",{params:{
      idBooking:idBooking
    }
    }).then(response => {
      parent.setState({
        reservas: response.data,
        modalDelete:false
      })
    })
    .catch(err => console.log(err));
    
  }

  toggleDelete = () => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      deleteConfirm: true
    });
  }

  toggleCancel = () =>{
    this.setState({
      modalDelete: !this.state.modalDelete,
      deleteConfirm:false
    })
  }

  toggleInfo = () =>{
    this.setState({
      modalInfo: !this.state.modalInfo
    })
  }
  render() {
    const { reservas } = this.state;
    return (
      <body id="Body">
        <Modal isOpen={this.state.modalDelete} toggle={this.toggleDelete}>
        <ModalHeader toggle={this.toggleDelete}>Cancelar reservación</ModalHeader>
        <ModalBody>
          ¿Seguro que deseas continuar?. Un administrador se pondrá en contacto para verificar su cancelación.
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={this.toggleDelete}>Continuar</Button>{' '}
        <Button outline color="secondary" onClick={this.toggleCancel}>Regresar</Button>
        </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInfo} toggle={this.toggleInfo}>
        <ModalHeader toggle={this.toggleInfo}>Puntos de viajero</ModalHeader>
        <ModalBody>
          Cuando realizas una reservación,estas sumando puntos de viajero. Los puntos de viajero pueden otorgarte promociones, descuentos y más...
        </ModalBody>
        </Modal>
        
        <Container>
          <Row>
            <Col className="profileHeader">
              <Col className="profileData">
                <div className="outPicture">
                  <Image
                    className="image"
                    src={girl}
                    width="250"
                    height="250"
                    roundedCircle
                  ></Image>
                  <div class="middle">
                    <div class="text">
                      <FontAwesomeIcon
                        icon={faCamera}
                        size="3x"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
                <Col>
                  <h1>@andrea7896</h1>
                  <p>
                    <FontAwesomeIcon icon={faHiking}></FontAwesomeIcon> Puntos
                    de viajero:
                    <i style={{ fontWeight: "bold", color: "orange" }}>
                      {" "}
                      800pts.
                    </i>
                  </p>
                  <h6 className="questionTag" onClick={this.toggleInfo}>
                    FQ: ¿Cómo añadir más puntos de viajero?.
                  </h6>
                </Col>
              </Col>
              <Col>
                <h4>Categorías favoritas</h4>
                <Row style={{ alignItems: "center" }}>
                  <div className="divCategory">
                    <Image
                      width="50px"
                      height="50px"
                      src={fuji}
                      roundedCircle
                    ></Image>
                    <p>Tranquilidad</p>
                  </div>
                  <div className="divCategory">
                    <Image
                      width="50px"
                      height="50px"
                      src={love}
                      roundedCircle
                    ></Image>
                    <p>Amor</p>
                  </div>
                </Row>
                <h4>Acerca de mi:</h4>
                <p>
                  &#128512; Hola! Soy una chica que gusta de los viajes y crear
                  experiencias inolvidables.
                </p>
              </Col>
            </Col>
          </Row>

          <Row>
            <Col className="profileContent">
              <Col>
                <h2>Tus reservaciones:</h2>
                <Col className="cardContainer">
                {reservas.length != 0 ? reservas.map(x => (
                <Card className="reservationCard">
                    <CardImg style={{ width: "100px", height:"100px" }} src={x.imgPrincipal}></CardImg>
                    <Col className="reservationInfo">
                    <Row className="rowCard"><CardText>{x.title}</CardText></Row>
                    <Row className="rowCard"><CardSubtitle>Ubicación: {x.cityName+","+x.stateName}</CardSubtitle></Row>
                    <Row className="rowCard"><CardSubtitle>Fecha: {x.hotel_date}</CardSubtitle></Row>
                    <Row className="rowCard"><CardSubtitle>MXN{formatter.format(x.price)}</CardSubtitle></Row>
                    <Row className="rowCard" style={{margin:"5px"}}><Button color="danger" onClick={e => {this.deleteReserva(e,x.idBooking,this.state.reservas.indexOf(x))}}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> Cancelar reservación</Button></Row>
                    </Col>    
                </Card>
                )):<p style={{fontSize:"15px",color:"dimgray"}}>"Parece que aun no hay nada... ¿Vamos a explorar?"</p>}
                </Col>
              </Col>
              <Col>
                <h2>Tu historia:</h2>
                <FormGroup>
                <p style={{color:"dimgray",fontSize:14}} >¿Amor?,¿Tranquilidad?,¿Diversión?...Cuéntanos sobre tu último viaje.</p>
                <Input type="textarea" name="text" id="exampleText" />
                <Row style={{display:"flex",flexFlow:"row-reverse",margin:"0px"}}>
                <Button style={{margin:"5px"}}color="info">Compartir</Button>
                </Row>
                </FormGroup>
                <Col className="cardContainer">
                  <Card className="reservationCard">
                  <Image
                      width="50px"
                      height="50px"
                      src={girl}
                      roundedCircle
                    ></Image>
                    <Col>
                    <p style={{fontWeight:"bold",margin:"0px"}}>@andrea7896</p>
                    <i>"Sin duda volveria a viajar a el Hotel L'otel Chiquitos. Un espacio tranquilo y con vista a la ciudad increible."</i>
                    <p style={{margin:"2px 0px 0px 0px"}}>
                <FontAwesomeIcon icon={faHeart} color={this.state.color} onClick={() => {
                    this.setState({color:"tomato",counter:this.state.counter+1})
                }}/>{" "}{this.state.counter}
                    </p>
                    </Col>
                  </Card>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default Reservas;
