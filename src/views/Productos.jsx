import { useState, useEffect } from 'react';
// import { MyContext } from '../contexto/MyContext';
import Card from 'react-bootstrap/Card';
import Button from '../components/Button'

const Productos = () => {
    const [pizzas, setPizzas] = useState([]);



    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('../../public/pizzas.json');
                const data = await response.json();
                setPizzas(data);
            } catch (error) {
                console.error("Hubo un error al obtener las pizzas:", error);
            }
        };

        fetchPizzas();
    }, []);

    // console.log(fetchPizzas);


    return (
        <div className="container gallery pt-5">
            <div className="row">
                {pizzas.map(pizza => (
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
                                    <Button colorButton="primary" textButton="Ver Más"/>
                                    <Button colorButton="danger" textButton="Añadir"/>                        
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