import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../CSS/Nav.css';

export const Nav = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/register');
  };

  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" height="90px" />
      </div>
      <div className="search">
        <i className="bx bx-search"></i>
        <input type="search" placeholder="Search food ..." />
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/favorites"><i className='bx bxs-heart' ></i></NavLink>
          </li>
          <li>
            <NavLink to="/MyCart"><i className='bx bxs-cart'></i></NavLink>
          </li>
          <li>
            <NavLink to="/" className='home'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Help" className='help'>Help</NavLink>
          </li>
          <li>
            <button onClick={handleLogin}>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
