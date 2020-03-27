import React, { Component } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import logo from "../../assets/mytravel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { withRouter } from "react-router-dom";
import { formatter } from "../../assets/Constants/constants.js";
import CategoryButtons from "../CategoryButtons/index";
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
  FormGroup,
  Alert,
  FormFeedback
} from "reactstrap";

import fuji from "../../assets/fuji.jpg";
import adventure from "../../assets/adventure.jpg";
import friends from "../../assets/friends.jpg";
import love from "../../assets/couples.jpg";
import moment from "moment";
import "./principal.css";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      destacados: [],
      cityExist: true,
      inputValid: false,
      startDate: "",
      endDate: "",
      parent: this
    };
  }

  componentWillMount(){
    axios
    .get("http://localhost:9002/hotel/getDestacados")
    .then(response => this.setState({ destacados: response.data }))
    .catch(err => console.log(err));
  }
  getBySearch = () => {
    var { startDate, endDate, city } = this.state;
    const parent = this;

    if(city != "" && startDate != "" && endDate != ""){
    parent.props.history.push("/busquedas", {
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
      city: city.toUpperCase()
    });
    }else{
      parent.setState({
        cityExist:false,
        inputValid:true
      })
    }
  };

  onTextChange = e => {
    const city = e.target.value;
    if(city != ""){ 
    this.setState({
      city,
      inputValid:false,
      cityExist:true
    });
    }
    console.log(this.state.city);
  };

  showDetails = (e, element) => {
    e.preventDefault();
    this.props.history.push("/details/" + element.idHotel, { element });
  };

  render() {
    return (
      <body>
        <div className="bodyMain">
          <div>
            <Row className="RowContainer">
              <h1 className="titleSearch">A dónde vamos el dia de hoy ?</h1>
            </Row>
            <Row className="search-fcontainer RowContainer">
              <div className="search-form">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input invalid={this.state.inputValid}
                    type="Search"
                    size="lg"
                    placeholder="City"
                    onChange={this.onTextChange}
                  />
                  {!this.state.cityExist && <Alert className="alertSearch" color="danger">Oh no! Completa tu búsqueda.</Alert>
                  }
                </FormGroup>
                
                <DateRangePicker required
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                />
                <Button
                  className="btn-Search"
                  color="success"
                  onClick={this.getBySearch}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </div>
            </Row>
          </div>
        </div>

        <Row className="body-content">
          <Col sm="12" md="4">
            <h3> Emociones </h3>
            <p>
              Sigue tus emociones y encuentra el viaje que has estado
              buscando...
            </p>
          </Col>
          <Col md="8">
            <CategoryButtons params={this.parent}></CategoryButtons>
          </Col>
        </Row>

        <Row className="body-content">
          <Col sm="12" md="4">
            <h3>Destacados</h3>
            <p>Mira dónde estan viajando todos.</p>
          </Col>
        </Row>
        <Row className="body-content">
          {this.state.destacados.map(x => (
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
                    {x.title}
                    <Row style={{ display: "flex", margin: "auto" }}>
                      {renderRate(x.rate)}
                    </Row>
                  </CardText>
                  <CardSubtitle> {
                  (x.description).substr(0,100)
                  }...</CardSubtitle>
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
                      this.showDetails(e, x);
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
      </body>
    );
  }
}

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

export default withRouter(Principal);
