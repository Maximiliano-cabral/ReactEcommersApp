import { Link } from "react-router";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Scorpion Calzados
      </Link>

      <ul className="navbar__links">
        <li><Link to="/category/Running">Running</Link></li>
        <li><Link to="/category/Lifestyle">Lifestyle</Link></li>
        <li><Link to="/category/Casual">Casual</Link></li>
        <li><Link to="/detalle">Detalle</Link></li>
      </ul>

      <div className="navbar__cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;