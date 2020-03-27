import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter as Router,
Switch,Route} from "react-router-dom";
import Menu from "./Components/Menu"
import {GlobalContextProvider, GlobalContext} from './Components/GlobalContextProvider';

import Login from './Components/Login';
import Puntos from './Components/Puntos';
import Reservas from './Components/Reservas';
import Busquedas from './Components/Busquedas';
import Principal from './Components/Principal';
import Details from './Components/Detalles';




function App() {
  
  return <Router>
    <GlobalContextProvider>
    <Menu></Menu>
    </GlobalContextProvider>
  
    <Switch>
      <Route path="/busquedas/:idCategory" exact={false}>
        <Busquedas/>
      </Route>

      <Route path="/busquedas/" exact={false}>
        <Busquedas/>
      </Route>

      <Route path="/puntos">
        <Puntos/>
      </Route>
      
      <Route path="/details/:id">
        <Details/>
      </Route>

      <Route path="/login">
      <GlobalContextProvider  settings={{username: "andrea@hotmail.com",password: "toor" }}>
      <Login/>
      </GlobalContextProvider>
      </Route>

      <Route path="/reservas">
        <Reservas/>
      </Route>

      <Route path="/">
        <Principal/>
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
