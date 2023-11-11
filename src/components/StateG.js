import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

 const MyProvider = ({children}) => {
    const [results, setResults] = useState('')


    return (
        <MyContext.Provider  value={{results , setResults}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyProvider ;
export const useStateContext = () => useContext(MyContext);
