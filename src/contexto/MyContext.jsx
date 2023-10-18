import { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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

  const addToCart = (pizza) => {
     const mismaPizza = cart.find(index => index.id === pizza.id)
     if(!mismaPizza){
      setCart([...cart, { ...pizza, cant: 1}]);
      setTotal(() => total + pizza.price);
      setCount(() => count + 1)
     }else{
      mismaPizza.cant += 1;
      setTotal(() => total + pizza.price);
      setCount(() => count + 1)
      setCart([...cart]);
     }   
  }

  const emptyCart = () => {
    setCart([]);
    setTotal(0);
    setCount(0);
  }

  const removeToCart = (id) => {
    const updateCart = cart.map((pizza) => {
      if(pizza.id === id) {
        const updatePizza = {... pizza, cant: pizza.cant - 1 }
        setCount(() => count - 1);
        setTotal(() => total - pizza.price)
        return updatePizza
      }
      return pizza
    }).filter( item => item.cant > 0)
    setCart(updateCart);
  }


  return (
    <MyContext.Provider value={{pizzas,count,total,cart,addToCart,emptyCart,removeToCart}}>
      {children}
    </MyContext.Provider>
  )
}

export default PizzaProvider;