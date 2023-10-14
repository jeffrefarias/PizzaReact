import { createContext, useState } from 'react';
// import Image from '../../public/pizzas.json'

export const MyContext = createContext(); 

const ImgProvider = ({children}) => {

  return(
    <MyContext.Provider>
      {children}
    </MyContext.Provider>
  )
}

export default ImgProvider;