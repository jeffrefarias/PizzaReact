import Button from "react-bootstrap/esm/Button";

const Boton = ({ colorButton, textButton,PizzaDetalle }) => {
    return (
        <>
            <Button variant={colorButton} onClick={PizzaDetalle}>
                {textButton}
                {/* <img src={icon} className="buttonClass" /> */}
            </Button>
        </>
    );
};
export default Boton;