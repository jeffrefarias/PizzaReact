import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-collapse justify-content-between">
                <div className="navbar-nav align-items-start">
                    <NavLink className={`nav-link  `} to='/'>
                        <img className="pizzaIcon" src="./src/assets/img/icon.png" alt="" />
                    </NavLink>
                    <NavLink className={`nav-link text-white`} to="/" >
                        <h1>Pizzería Chrisis Dépanico</h1>
                    </NavLink>
                </div>
                <div className="navbar-nav align-items-end totalCart text-white">
                    <NavLink className={`nav-link`} to="/Carrito">
                        <img className="cartIcon" src="./src/assets/img/cart.png" alt="" />
                    </NavLink>
                    <p>$<span>0</span></p>
                </div>
            </div>
        </nav>
    );
}

