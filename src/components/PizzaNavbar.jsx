import { NavLink } from "react-router-dom";
import { MyContext } from '../contexto/MyContext';
import { useContext } from 'react';


const Navbar = () => {
    const { total } = useContext(MyContext);


    return (
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-collapse justify-content-between">
                <div className="navbar-nav align-items-start">
                    <NavLink className={`nav-link  `} to='/'>
                        <img className="pizzaIcon" src="./src/assets/img/icon.png" alt="" />
                    </NavLink>
                    <NavLink className={`nav-link text-white`} to="/" >
                        <h1>Pizzería Chrisís Dépanico</h1>
                    </NavLink>
                </div>
                <div className="navbar-nav align-items-end totalCart text-white">
                    <NavLink className={`nav-link`} to="/Carrito">
                        <img className="cartIcon" src="./src/assets/img/cart.png" alt="" />
                    </NavLink>
                    <p>$ <span>{total}</span></p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
