import Button from "react-bootstrap/esm/Button";

const Boton = ({ colorButton, textButton,PizzaDetalle,PizzaId }) => {
    return (
        <>
            <Button variant={colorButton} onClick={() => PizzaDetalle(PizzaId) }>
                {textButton}
                {/* <img src={icon} className="buttonClass" /> */}
            </Button>
        </>
    );
};
export default Boton;