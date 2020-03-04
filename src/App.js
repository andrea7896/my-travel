import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import {GlobalContextProvider} from './Components/GlobalContextProvider'
import Login from './Components/Login'

function App() {
  return (
    <>
    <GlobalContextProvider settings={{username: "root",password: "toor" }}>
   
    
    <Login></Login>
    

    </GlobalContextProvider>
    </>
  );
}

export default App;
