import "./link.css";
import { Link as RouterLink } from "react-router-dom";

function Link({ text, isActive, ...rest }) {
  let className = null;
  className = isActive ? "link link--active" : "link";

  return (
    <RouterLink className={className} {...rest}>
      {text}
    </RouterLink>
  );
}

export { Link };
