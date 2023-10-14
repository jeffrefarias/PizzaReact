import Button from "react-bootstrap/esm/Button";

const Boton = ({ colorButton, textButton }) => {
    return (
        <>
            <Button variant={colorButton}>
                {textButton}
                {/* <img src={icon} className="buttonClass" /> */}
            </Button>
        </>
    );
};
export default Boton;