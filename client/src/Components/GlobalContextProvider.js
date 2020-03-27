import React from 'react'
import axios from "axios";

export const GlobalContext = React.createContext({
    // username: null,
    // password: null,
    
})

const login = async(email,password,setLogged) =>{
    try{
    const res = await axios.post("http://localhost:9001/user/login",{
        email:email,
        password:password
    });
    setLogged(true);
    const info = res.data;
    return info;
    }catch(e){
        console.error(e);
    }
}

const logout = (setLogged) => {
    setLogged(false);
    return;
}

export const GlobalContextProvider = ({children,settings}) => {
    const [generalSettings,setGeneralSettings] = React.useState(settings);
    const [isLogged,setLogged] = React.useState(false);

return (<GlobalContext.Provider value={{generalSettings,login,logout,isLogged,setLogged}}>
    {
    children
    }
</GlobalContext.Provider>);
}