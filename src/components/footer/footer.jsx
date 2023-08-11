import { Link } from "react-router-dom";

import "./footer.css"

export function Footer() {
  return <footer className="footer">
    <nav><Link to="/treinos">TREINOS</Link> <Link to="/home">FEED</Link> <Link to="/poolock">POOLOCK</Link></nav>
  </footer>;
}
