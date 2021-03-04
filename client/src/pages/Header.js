import LogoWhite from './../images/logoWhite.png';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../services/Auth';

function Header() {
  const { logout } = useAuth();
  const history = useHistory();
  const handleLogOut = async function (event) {
    event.preventDefault();
    try {
      await logout();
      history.push('/login')
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand mr-auto mr-lg-0" to="/">
        <img src={LogoWhite} alt="Logo" width="170" />
      </NavLink>
      <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink activeClassName="active" exact={true} className="nav-link" to="/">Dashboard <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/users">Users</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/services">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/tips">Tips & Tricks</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/claims">Claims</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/settings">Settings</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleLogOut} activeClassName="active" exact={true} className="nav-link" to="#">Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
