import "./navigation-sidebar.css";
import { Link } from "./element/link";
import { FadedDividerLine } from "./element/faded-divider-line";
import { useLocation } from "react-router-dom";

function NavigationSidebar() {
  const { pathname: currentPath } = useLocation();

  return (
    <div className="navigation-sidebar">
      <Link to="/" text="Home" isActive={currentPath === "/"} />
      <FadedDividerLine />
      <Link to="/diary" text="Diary" isActive={currentPath === "/diary"} />
      <FadedDividerLine />
      <Link to="/about" text="About" isActive={currentPath === "/about"} />
    </div>
  );
}

export { NavigationSidebar };
