import "./navigation-sidebar.css";
import { Link } from "./element/link";
import { FadedDividerLine } from "./element/faded-divider-line";

function NavigationSidebar() {
  return (
    <div className="navigation-sidebar">
      <Link to="/blog" text="Blog" />
      <FadedDividerLine />
      <Link to="/about" text="About" />
    </div>
  );
}

export { NavigationSidebar };
