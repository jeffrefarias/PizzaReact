
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaNavbar from './components/PizzaNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <PizzaNavbar />           
      </BrowserRouter>
    </>
  )
}

export default App
