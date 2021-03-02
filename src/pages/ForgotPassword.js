import Logo from './../images/cruiserslink.png';
import {Link} from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="form-div">
      <div className="card w-100 mw-500">
        <div className="card-body px-3">
          <div className="text-center">
            <img src={Logo} width="200" alt="Logo" />
            <h4 className="my-3">Forgot Password</h4>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input type="submit" className="btn btn-primary" value="Reset Password" />
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;