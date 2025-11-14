import { useState } from 'react';
import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Scorpion Calzados
      </Link>

      
      <button
        className="navbar__toggle"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul className={`navbar__links ${open ? 'show' : ''}`}>
        <li><Link to="/category/Running" onClick={() => setOpen(false)}>Running</Link></li>
        <li><Link to="/category/Lifestyle" onClick={() => setOpen(false)}>Lifestyle</Link></li>
        <li><Link to="/category/Casual" onClick={() => setOpen(false)}>Casual</Link></li>
        <li><Link to="/detalle" onClick={() => setOpen(false)}>Detalle</Link></li>
      </ul>

      <div className="navbar__cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;