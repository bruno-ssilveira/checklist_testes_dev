import { Button } from "./primaryButton.style";
import { Link } from "react-router-dom";

function PrimaryButton(props) {
    return(
        <Link to={props.caminho}>
          <Button disabled={props.disabled}>{props.texto}</Button>
        </Link>
    )
}

export default PrimaryButton;