import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-mark.png';
import '../CSS/Nav.css';

export const Nav = ({ cart = [] }) => {
  const navigate = useNavigate();
  const cartCount = cart.reduce((sum, item) => sum + (item.count || 1), 0);

  return (
    <header className="nav">
      <Link to="/" className="logo" aria-label="Home">
        <img src={logo} alt="" />
      </Link>

      <div className="search" role="search">
        <i className="bx bx-search" aria-hidden="true"></i>
        <input type="search" placeholder="Search food ..." aria-label="Search food" />
      </div>

      <nav className="links" aria-label="Main">
        <ul>
          <li>
            <NavLink to="/favorites" className="icon-link" aria-label="Favorites">
              <i className="bx bx-heart" aria-hidden="true"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyCart"
              className="icon-link"
              aria-label={cartCount ? `Cart, ${cartCount} items` : 'Cart'}
            >
              <i className="bx bx-cart" aria-hidden="true"></i>
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" end className="text-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Help" className="text-link">Help</NavLink>
          </li>
          <li>
            <button className="login-btn" onClick={() => navigate('/register')}>
              Log in
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
