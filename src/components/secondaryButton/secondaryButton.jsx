import { Button } from "./secondaryButton.style";
import { Link } from "react-router-dom";

function SecondaryButton(props) {
    return(
        <Link to={props.caminho}>
          <Button disabled={props.disable}>{props.texto}</Button>
        </Link>
    )
}

export default SecondaryButton;