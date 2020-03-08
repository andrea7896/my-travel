import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import {BrowserRouter as Router,
Switch,Route} from "react-router-dom";
import Menu from "./Components/Menu"
import {GlobalContextProvider} from './Components/GlobalContextProvider'
import Login from './Components/Login';


import Reservas from './Components/Reservas';
import Busquedas from './Components/Busquedas';
import Principal from './Components/Principal';


function App() {
  return <Router>
    <Menu></Menu>
    <Switch>
      <Route path="/busquedas">
        <Busquedas></Busquedas>
      </Route>
      <Route path="/reservas">
      <GlobalContextProvider settings={{username: "root",password: "toor" }}>
     <Login/>
      </GlobalContextProvider>
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
