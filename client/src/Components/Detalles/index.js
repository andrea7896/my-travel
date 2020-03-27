import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "./detalles.css";
import { Col,Row,Form,FormGroup,Label,Input,Button,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import moment from 'moment';
import logo from "../../assets/mytravel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faWifi,faConciergeBell,faBroom,faUtensils,faSnowflake,faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { formatter } from "../../assets/Constants/constants.js";
import axios from 'axios';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      username: "andrea7896",
      firstname: "",
      lastname: "",
      email:"",
      firstnameValid:false,
      lastnameValid:false,
      emailValid:false,
      images: [],
      modal: false,
      properties: {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
        //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }
    };
  }

   componentWillMount() {
    console.log(this.props.location.state.element);
    var hotelInfo = this.props.location.state.element;
        
    this.setState({
      data: hotelInfo,
      images: [
        hotelInfo.imgPrincipal || logo,
        hotelInfo.imgExtra1 || logo,
        hotelInfo.imgExtra2 || logo,
        hotelInfo.imgExtra3 || logo
      ]
    });

  }

  onChange = e => {
    const {name,value} = e.target;
    this.setState({
      [name]: value
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  submit = e => {
    e.preventDefault();
    
    this.state.firstname != "" ? this.setState({firstnameValid:false}):this.setState({firstnameValid:true});
    this.state.lastname != "" ? this.setState({lastnameValid:false}):this.setState({lastnameValid:true});
    this.state.email != "" ? this.setState({emailValid:false}):this.setState({emailValid:true});
    const parent = this;
    if(this.state.firstname != "" && this.state.lastname != "" && this.state.email != ""){
      var values = {
          username: parent.state.username,
          firstname: parent.state.firstname,
          lastname: parent.state.lastname,
          email:parent.state.email,
          hotel_Date: moment(this.state.data.start_date).format("YYYY-MM-DD")+","+moment(this.state.data.end_date).format("YYYY-MM-DD"),
          idHotel: parent.state.data.idHotel
      }

      axios.post("http://localhost:9002/reservas/reservar",{ params: values})
      .then(function(response){
        console.log(response)
        parent.setState({
          username: "andrea7896",
          firstname:"",
          lastname:"",
          email:"",
          firstnameValid:false,
          lastnameValid:false,
          emailValid:false,
          modal: true
        })
      })
      .catch(function(err){
        console.log(err);
      })
      
    }
    
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Reservación realizada</ModalHeader>
        <ModalBody>
          Genial!, parece que estas a un paso más cerca de tu próximo viaje. Nuestros administradores se comunicarán contigo
          para confirmar tu reservación.
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.toggle}>Entendido</Button>{' '}
        </ModalFooter>
        </Modal>
        <Row className="RowContainer">
          <Col md={4} lg="6">
            <div className="slide-container">
              <Fade {...this.state.properties}>
                <div className="each-fade">
                  <div className="image-container">
                    <img alt="primera imagen" src={this.state.images[0]} />
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img alt="segunda imagen" src={this.state.images[1]} />
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img alt="tercer imagen" src={this.state.images[2]} />
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img alt="cuarta imagen" src={this.state.images[3]} />
                  </div>
                </div>
              </Fade>
            </div>
            <div className="detailInfo">
              <h5>Categoria</h5>
              <p style={{color:"#27496d",fontWeight:"bold"}}>{this.state.data.categoryName}</p>
              <p>"{this.state.data.categoryDescription}."</p>
              <h5>Servicios</h5>
              <Row className="detailServices">
                <Col style={{display:"flex",flexDirection:"column"}}>
                {this.state.data.wifi === 1 ? <i><FontAwesomeIcon icon={faWifi}></FontAwesomeIcon> Wifi gratis</i>:""}
                {this.state.data.roomSer === 1 ? <i><FontAwesomeIcon icon={faConciergeBell}></FontAwesomeIcon> Servicio a la habitación</i>:""}
                {this.state.data.cleanSer === 1 ? <i><FontAwesomeIcon icon={faBroom}></FontAwesomeIcon> Servicio de limpieza</i>:""}
                </Col>
                <Col style={{display:"flex",flexDirection:"column"}}>
                {this.state.data.airCon === 1 ? <i><FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon> Aire acondicionado/Calefacción</i>:""}
                {this.state.data.foodSer === 1 ? <i><FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon> Restaurantes | Buffet Continental</i>:""}
                {this.state.data.pool === 1 ? <i><FontAwesomeIcon icon={faSwimmer}></FontAwesomeIcon> Psicina</i>:""}
                </Col>          
              </Row>
            </div>
          </Col>

          <Col md={4} lg={6} className="detailInfo">
            <h1>{this.state.data.title}</h1>
            <i>Clasificación: {renderRate(this.state.data.rate)}</i>
            <div className="detailContainer">
                <h5>Ubicación</h5>
                <p>{this.state.data.cityName + ", " + this.state.data.stateName}.</p>
                <h5>Descripción</h5>
                <p>{this.state.data.description}.</p>
                <h5>Fecha disponible</h5>
                <div className="detailDates">
                <p>Del dia:<h6>{moment(this.state.data.start_date).format("YYYY-MM-DD")}</h6></p>
                <p>Hasta:<h6>{moment(this.state.data.end_date).format("YYYY-MM-DD")}</h6></p>
                </div>
                <Row className="detailPrice">
                <h5>Precio de paquete:</h5>  
                <i>MXN</i>
                <i style={{ textDecoration: "line-through" }}>
                {formatter.format(this.state.data.price * 0.2 + this.state.data.price)}
                </i>
                <i style={{ fontSize: "25px", color: "#fe4c50" }}>
                MXN{formatter.format(this.state.data.price)}
                </i>
                </Row>
                <div className="detailReserva">
                  <h3>Reserva ahora mismo</h3>
                  <Col>
                  <Form>
                  <FormGroup>
                    <Label>Usuario:</Label>
                    <Input required type="text" name="username" id="user" value={this.state.username} disabled="true"/>
                    <Label>Nombre(s):</Label>
                    <Input invalid={this.state.firstnameValid} required type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={this.onChange}/>
                    <Label>Apellido(s):</Label>
                    <Input invalid={this.state.lastnameValid} required type="text" name="lastname" id="lastname" value={this.state.lastname} onChange={this.onChange}/>
                    <Label>Email:</Label>
                    <Input invalid={this.state.emailValid} required type="email" name="email" id="email" value={this.state.email} onChange={this.onChange} placeholder="correo@correoexample.com"/>
                  </FormGroup>
                  <Button color="success" block onClick={this.submit}>Reservar</Button>
                  </Form>
                  </Col>
                </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const renderRate = (rate) => {
    var starts = new Array();
      for(let i=1;i<=rate;i++){
         starts.push(<><FontAwesomeIcon icon={faStar} color="#ffcd59"></FontAwesomeIcon></>);
      }
      return starts;
  };

export default withRouter(Details);
