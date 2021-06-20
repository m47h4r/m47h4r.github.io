import "./link.css";
import { Link as RouterLink } from "react-router-dom";

function Link({ text, ...rest }) {
  return (
    <RouterLink className="link" {...rest}>
      {text}
    </RouterLink>
  );
}

export { Link };
