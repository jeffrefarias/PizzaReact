import { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('../../public/pizzas.json');
        const data = await response.json();
        setPizzas(data);
        console.log(data);
      } catch (error) {
        console.error("Hubo un error al obtener las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);


  return (
    <MyContext.Provider value={{pizzas}}>
      {children}
    </MyContext.Provider>
  )
}

export default PizzaProvider;