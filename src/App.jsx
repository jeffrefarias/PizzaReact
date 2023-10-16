
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaNavbar from './components/PizzaNavbar'
import Productos from './views/Productos'
import ProductoDetalle from './views/ProductoDetalle'
import  PizzaProvider  from './contexto/MyContext';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <BrowserRouter>
      <PizzaProvider>
        <PizzaNavbar />
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/ProductoDetalle/:id" element={<ProductoDetalle />} />
        </Routes>
      </PizzaProvider>
      </BrowserRouter>
    </>
  )
}

export default App
