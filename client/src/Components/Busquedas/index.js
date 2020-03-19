import React,{Component} from 'react'
import { withRouter } from "react-router-dom";
import CategoryButtons from "../CategoryButtons/index";
class Busquedas extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             hasProps: false
        }
    }
    

    componentWillMount() {
        if(this.props.location && this.props.location.state) {
            console.log(this.props.location.state)
            this.setState({ hasProps: true })
        }
    }

    render(){
        return <CategoryButtons></CategoryButtons>
    }
}

export default withRouter(Busquedas);