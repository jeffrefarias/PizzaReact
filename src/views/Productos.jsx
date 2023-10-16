import { MyContext } from '../contexto/MyContext';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
// import Boton from '../components/Button'
import { useNavigate } from 'react-router-dom';


const Productos = () => {
    const navigate = useNavigate();
    const { pizzas } = useContext(MyContext);


    const PizzaDetalle = (pizzaId) => {       
        navigate(`/ProductoDetalle/${pizzaId}`);
    };



    return (
        <div className="container gallery pt-5">
            <div className="row">
                
            {pizzas.map((pizza) => (
                    <div className="col-lg-3 mb-5" key={pizza.id}>
                        <Card>
                            <Card.Img variant="top" src={pizza.img} />
                            <Card.Body>
                                <div><h2>{pizza.name}</h2></div>
                                <hr />
                                <div>
                                    <p><strong>Ingredients:</strong></p>
                                    <ul>
                                        {pizza.ingredients.map((ingredient, index) => (
                                            <li key={index}>
                                                <img className='pizzaIconLi' src="./src/assets/img/pizzaali.png" alt="Ingredient Icon" /> {ingredient}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card.Body>
                            <Card.Footer className='text-center fs-3'>
                                <div>$ {pizza.price}</div>
                                <div className='d-flex justify-content-center gap-4 mt-2'>
                                <button className="btn bg-primary" onClick={() => PizzaDetalle(pizza.id)}>Ver más</button>
                                    {/* <Boton colorButton="danger" textButton="Añadir" onClick={() => PizzaDetalle(pizza.id)}/> */}
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Productos;