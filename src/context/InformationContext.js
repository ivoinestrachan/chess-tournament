import React,{useState, createContext} from 'react';

export const InformationContext = createContext();

export const InformationContextProvider = props => {
  const [information, setInformation] = useState([])

  return (
    <InformationContext.Provider value={{information, setInformation}}>
      {props.children}
    </InformationContext.Provider>
  )

}