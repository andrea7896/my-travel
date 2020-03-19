import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter as Router,
Switch,Route} from "react-router-dom";
import Menu from "./Components/Menu"
import {GlobalContextProvider} from './Components/GlobalContextProvider';

import Login from './Components/Login';
import Puntos from './Components/Puntos';
import Reservas from './Components/Reservas';
import Busquedas from './Components/Busquedas';
import Principal from './Components/Principal';
import Details from './Components/Detalles';


function App() {
  return <Router>
    <Menu></Menu>

    <Switch>
      <Route path="/busquedas">
        <Busquedas></Busquedas>
      </Route>

      <Route path="/puntos">
        <Puntos></Puntos>
      </Route>
      
      <Route path="/details">
        <Details></Details>
      </Route>

      <Route path="/login">
      <GlobalContextProvider  settings={{username: "andrea@hotmail.com",password: "toor" }}>
      <Login/>
      </GlobalContextProvider>
      </Route>

      <Route path="/reservas">
        <Reservas></Reservas>
      </Route>

      <Route path="/">
        <Principal></Principal>
      </Route>
      
    </Switch>

  </Router>
    // <>
    // {/* <GlobalContextProvider settings={{username: "root",password: "toor" }}>
    // <Login/>
    // </GlobalContextProvider> */}
    // </>
  
}

export default App;
