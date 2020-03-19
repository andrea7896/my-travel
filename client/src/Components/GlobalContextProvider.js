import React from 'react'

export const GlobalContext = React.createContext({
    // username: null,
    // password: null,
    
})

const login = (username,password) =>{
    console.log("Intento login",username,password);
    
}

export const GlobalContextProvider = ({children,settings}) => {
    const [generalSettings,setGeneralSettings] = React.useState(settings);
    const [isLogged,setLogged] = React.useState(false);
return (<GlobalContext.Provider value={{generalSettings,login}}>
    {
    children
    }
</GlobalContext.Provider>);
}