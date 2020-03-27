import React,{useState,useEffect} from "react";
import { withRouter } from "react-router-dom";
import CategoryButtons from "../CategoryButtons/index";
import logo from "../../assets/mytravel.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatter } from "../../assets/Constants/constants.js";
import moment from 'moment';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import { useParams, useHistory, useLocation } from "react-router-dom";
import "./busqueda.css";
import axios from "axios";
const Busquedas = () => {
  const { idCategory } = useParams();
  const history = useHistory();
  const { state } = useLocation();
  const [hotels,setHotels] = useState([]);
  const [nameCategory,setCategoryName] = useState("");
  // console.log("Busquedas -> state", state);
  // console.log("Busquedas -> idCategory", idCategory);

   useEffect(() => {
        var url;
        var values;

        if(idCategory == undefined && state == undefined){
          url = "http://localhost:9002/hotel/listAll"
          values = {};
        }else if(idCategory == undefined){
          url = "http://localhost:9002/hotel/findSearch"
          const {startDate,endDate,city} = state;
          values = {
            startDate: moment(startDate).format("YYYY-MM-DD"),
            endDate: moment(endDate).format("YYYY-MM-DD"),
            city: city.toUpperCase()
          }
        }else if(state == undefined){
          url = "http://localhost:9002/hotel/find/"+idCategory; 
          values = {};
        }
       
       axios
          .get(url, {
            params: values
          })
          .then(function(response) {
           console.log("RESPUESTA",response.data);
           return setHotels(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });

          switch(idCategory){
            case "1":
              setCategoryName("Tranquilidad");
              break;
            case "2":
              setCategoryName("Aventura");
              break;
            case "3":
              setCategoryName("Amor");
              break;
            case "4":
              setCategoryName("Amistad");
              break;
            default:
              break;  
          }
  }, [idCategory, state]);
  
  const showDetails = (e, element) => {
    e.preventDefault();
    history.push("/details/" + element.idHotel, { element });
  };

  

  return (
    <div>
      {console.log(hotels)}
      <Container className="container-busqueda">
        <CategoryButtons></CategoryButtons>
      </Container>
      <Row className="body-content">
        <Container>
          <h1>Tu resultado:</h1>
          {idCategory ? <h6>{"Hoteles por categoria: "+nameCategory}</h6>: state ? <h6>{"Hoteles por búsqueda: "+state.city+" del "+state.startDate+" al "+state.endDate}</h6>:
          <h6>Todos nuestros Hoteles</h6>}
          <Container>
          <Row className="body-content">
          {hotels.map(x => (
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px"
              }}
            >
              <Card className="cardHotel"
                style={{ width: "18rem", height: "auto", alignItems: "center" }}
              >
                <CardImg
                  top
                  style={{ width: "18rem", height: 250 }}
                  src={x.imgPrincipal || logo}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardText>
                    {" "}
                    {x.title}
                    <Row style={{ display: "flex", margin: "auto" }}>
                      {renderRate(x.rate)}
                    </Row>{" "}
                  </CardText>
                  <CardSubtitle> {(x.description).substr(0,100)}...</CardSubtitle>
                  <CardText>
                    <i>MXN </i>
                    <i style={{ textDecoration: "line-through" }}>
                      {formatter.format(x.price * 0.2 + x.price)}
                    </i>
                  </CardText>
                  <CardText>
                    <i style={{ fontSize: "25px", color: "#fe4c50" }}>
                      MXN {formatter.format(x.price)}
                    </i>
                  </CardText>
                  <Button
                    color="danger"
                    onClick={e => {
                      showDetails(e, x);
                    }}
                  >
                    {" "}
                    Ver más{" "}
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
          </Container>
        </Container>
      </Row>
    </div>
  );
};

const renderRate = rate => {
  var starts = new Array();
  for (let i = 1; i <= rate; i++) {
    starts.push(
      <>
        <FontAwesomeIcon icon={faStar} color="#ffcd59"></FontAwesomeIcon>
      </>
    );
  }
  return starts;
};
export default withRouter(Busquedas);
