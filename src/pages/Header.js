import {Link} from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mr-auto mr-lg-0" to="/">CruisersLink</Link>
      <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Dashboard <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tips">Tips & Tricks</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/claims">Claims</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
