import React, { createContext, useContext,useState} from 'react';

const StateContext = createContext();

const initialState = {
   chat:false,
   cart:false,
   userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children}) =>{
    const [activeMenu, setActiveMenu] = useState (true);
     const [isClicked, setIsclicked] = useState (initialState);
     const [screenSize, setScreenSize] = useState ();
   
        const handleClick = (clicked) => {
            setIsclicked({...initialState, [clicked]: true});
        }

    return (
    <StateContext.Provider value={
        {activeMenu,setActiveMenu,isClicked,
     setIsclicked,handleClick,screenSize, setScreenSize}}>
        {children}
    </StateContext.Provider>
)}

export const useStateContext = ()  => useContext (StateContext);