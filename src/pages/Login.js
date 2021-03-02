import Logo from './../images/cruiserslink.png';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="form-div">
      <div className="card w-100 mw-500">
        <div className="card-body px-3">
          <div className="text-center">
            <img src={Logo} width="200" alt="Logo" />
            <h4 className="my-3">Admin Login</h4>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input type="submit" className="btn btn-primary" value="Login" />
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;