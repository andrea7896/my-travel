import React, { Component } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { withRouter } from "react-router-dom";
import {formatter} from "../../assets/Constants/constants.js";
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
  FormGroup
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
      startDate: "",
      endDate: "",
      parent: this
    };
  }

  getDestacados = () => {
    axios
      .get("http://localhost:9001/hotel/getDestacados")
      .then(response => this.setState({ destacados: response.data }))
      .catch(err => console.log(err));
  };

  getBySearch = () => {
    var { startDate, endDate } = this.state;
    const parent = this;

    axios
      .get("http://localhost:9001/hotel/findSearch", {
        params: {
          startDate: moment(startDate).format("YYYY-MM-DD"),
          endDate: moment(endDate).format("YYYY-MM-DD"),
          city: this.state.city.toUpperCase()
        }
      })
      .then(function(response) {
        parent.props.history.push("/busquedas", { data: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onTextChange = e => {
    const city = e.target.value;
    this.setState({
      city
    });
    console.log(this.state.city);
  };

  showDetails = (e,id) => {
    e.preventDefault();
  this.props.history.push('/details/'+id);
  }

  

  render() {
    {
      if (this.state.destacados.length == 0) {
        this.getDestacados();
      }
    }

    console.log(this.state.destacados)

    return (
      <body>
        <div className="bodyMain">
          <div>
            <Row>
              <h1 className="titleSearch">A dónde vamos el dia de hoy ?</h1>
            </Row>
            <Row className="search-fcontainer">
              <div className="search-form">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input
                    type="text"
                    placeholder="City"
                    onChange={this.onTextChange}
                  />
                </FormGroup>
                <DateRangePicker
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
              <Card style={{ width: "18rem", height: "auto" }}>
                <CardImg
                  top
                  style={{ width: "18rem", height: 250 }}
                  src={x.imgPrincipal}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle> {x.title} </CardTitle>
                  <CardSubtitle> {x.description} </CardSubtitle>
                  <CardText><i>Price:</i><i style={{textDecoration:"line-through"}}>${x.price*.20+x.price}</i></CardText>
                  <CardText><i style={{fontSize:"25px"}}>{formatter.format(x.price)}</i></CardText> 
                  <Row style={{display:"flex"}}>
                  <i>Rate: </i>{renderRate(x.rate)}
                  </Row> 
                  <Button color="danger" onClick={e => {this.showDetails(e,x.idHotel)}}> Ver más </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </body>
    );
  }
}

const renderRate = (rate) => {
  console.log(rate);
  var starts = new Array();
    for(let i=1;i<=rate;i++){
       starts.push(<><FontAwesomeIcon icon={faStar} color="yellow"></FontAwesomeIcon></>);
    }
    return starts;
};

export default withRouter(Principal);

