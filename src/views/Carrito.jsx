import React, { useContext } from 'react';
import { MyContext } from '../contexto/MyContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

const Carrito = () => {
    const { cart, addToCart, total, count, emptyCart,removeToCart } = useContext(MyContext);

    const addPizza = (pizza) => {
        addToCart(pizza);
    }

    const removePizzaCart = (pizza) => {
        removeToCart(pizza.id);
    }

   

    return (
        <div className="container pt-5">
            <Row>
                <Col>
                    <h1>Carrito de Compras</h1>
                </Col>
            </Row>
            {cart.length > 0 ? (
                cart.map((pizza) => (
                    <div key={pizza.id}>
                        <Row className="mb-2">
                            <Col xs={2}>
                                <Image src={pizza.img} alt={pizza.name} thumbnail />
                            </Col>
                            <Col xs={4}>
                                {pizza.name}
                            </Col>
                            <Col className='d-flex gap-2' xs={6}>
                                <div> ${pizza.price}</div>
                                <div> <Button variant="danger" onClick={() => removePizzaCart(pizza)}>-</Button></div>
                                <div>{pizza.cant}</div>
                                <div> <Button variant="primary" onClick={() => addPizza(pizza)}>+</Button></div>
                            </Col>
                        </Row>
                        <hr />
                    </div>
                ))
            ) : (
                <Alert variant="info">El carrito está vacío.</Alert>
            )}
            <Row className="d-flex fw-bold">
                <Col xs={6}>
                    Total de productos
                </Col>
                <Col xs={2}>
                    {count}
                </Col>
                <Col xs={2}>
                    Total: ${total}
                </Col>
                <Col xs={2}>
                    <Button variant="danger" onClick={() => emptyCart()}>Vaciar el carrito</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Carrito;
