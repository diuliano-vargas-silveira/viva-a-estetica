import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import "./footer.css"

export function Footer() {
  return <footer className="footer">
    <nav>
      <Link to={ROUTES.PRACTICES}>TREINOS</Link>
      <Link to={ROUTES.HOME}>FEED</Link>
      <Link to={ROUTES.POOLOCK}>POOLOCK</Link>
    </nav>
  </footer>;
}
