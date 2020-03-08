import React,{Component} from 'react';
import Image from 'react-bootstrap/Image'
import mainImage  from '../../assets/mountain.png'
import './principal.css';

class Principal extends Component{

    render(){
        return <body >
            <div className="bodyMain">
            {/* <Image src={mainImage} fluid /> */}
            </div>
        </body>
    }
}

export default Principal