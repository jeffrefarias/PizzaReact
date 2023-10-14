
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaNavbar from './components/PizzaNavbar'
import Productos from './views/Productos'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <PizzaNavbar />           
        <Productos />           
      </BrowserRouter>
    </>
  )
}

export default App
