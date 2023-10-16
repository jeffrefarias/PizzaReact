import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../contexto/MyContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const ProductoDetlle = () => {
    const { id } = useParams();
    const { pizzas } = useContext(MyContext);

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
                        <div className='footerDetalle'>
                            <p>{pizzaDetalle.desc}</p>
                        </div>
                        <div className='footerDetalle'><p><strong>Ingredients:</strong></p></div>
                        <div className='footerDetalle'>
                            <ul>
                                {pizzaDetalle.ingredients.map((ingredient, index) => (
                                    <li key={index}>
                                        <img className='pizzaIconLi' src="./src/assets/img/pizzaali.png" alt="Ingredient Icon" /> {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='d-flex justify-content-between footerDetalle'>
                            <h2>Precio: ${pizzaDetalle.price} </h2>
                            <button className='btn btn-danger'> Añadir </button>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    );

}


export default ProductoDetlle
