import React,{Component} from 'react'
import{
Container
}from "reactstrap";
import CategoryButtons from "../CategoryButtons"

class Puntos extends Component{

    render(){
        return <body style={{
            backgroundImage: "linear-gradient(180deg, #a3fbcd 0%, #31ada5 100%)", height:"100vh"
            }}>
            <Container style={{padding:"15px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{color:"white",textShadow: "-5px 1px 2px rgba(65, 63, 63, 0.26)"}}>PRÓXIMAMENTE...</h1>
            <h2 style={{color:"white",textShadow: "-5px 1px 2px rgba(65, 63, 63, 0.26)"}}>Puntos de interés</h2>
            <p>Agrega experiencias increibles a tu viaje buscando actividades por nuestras categorías.</p>
            <CategoryButtons></CategoryButtons>
            </Container>
            </body>
    }
}

export default Puntos