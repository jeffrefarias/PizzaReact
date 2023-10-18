import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../contexto/MyContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ImagenPizza from '../assets/img/pizzaali.png'


const ProductoDetlle = () => {
    const { id } = useParams();
    const { pizzas, addToCart } = useContext(MyContext);


    const pizzaId = pizzas.findIndex(e => e.id === id)
    const pizzaDetalle = pizzas[pizzaId];


    return (

        <div className="container pt-5">
            <Card className='CardCustom'>
                <div className='d-flex gap-3'>
                    <div>
                        <Card.Img className='imgPizzaDetalle' variant="top" src={pizzaDetalle.img} />
                    </div>
                    <div>
                        <div className=''>
                            <h1>{pizzaDetalle.name}</h1>
                        </div>
                        <hr />
                        <div className=''>
                            <p>{pizzaDetalle.desc}</p>
                        </div>
                        <div className=''><p><strong>Ingredients:</strong></p></div>
                        <div className=''>
                            <ul>
                                {pizzaDetalle.ingredients.map((ingredient, index) => (
                                    <li key={index}>
                                        <img className='pizzaIconLi' src={ImagenPizza} alt="Ingredient Icon" /> {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='d-flex justify-content-between '>
                            <h2>Precio: ${pizzaDetalle.price} </h2>
                            <button className='btn btn-primary' onClick={() => addToCart(pizzaDetalle)}>Agregar</button>                          
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    );

}


export default ProductoDetlle
