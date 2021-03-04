import Logo from './../images/cruiserslink.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../services/Auth';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [_error, setError] = useState('')
  const history = useHistory();

  const handleSignIn = async function (event) {
    try {
      event.preventDefault();
      setError(null); setLoading(true);
      if (email && password) {
        const cred = await login(email, password)
        cred.user.getIdTokenResult()
          .then(idTokenResult => {
            if (!!idTokenResult.claims.admin) {
              setLoading(false); setError(null); setEmail(''); setPassword('');
              history.push('/')
            } else {
              setLoading(false);
              setError('Entered User is not An Admin.');
            }
          }).catch(err => {
            setLoading(false);
            setError(err.message);
          })
      } else {
        setLoading(false); setError('Please Add A Valid Email or Password')
      }
    } catch (err) {
      setLoading(false); setError(err.message)
    }
  }
  return (
    <div className="form-div">
      <div className="card w-100 mw-500">
        <div className="card-body px-3">
          <div className="text-center">
            <img src={Logo} width="200" alt="Logo" />
            <h4 className="my-3">Admin Login</h4>
            {loading &&
              <div className='my-5 d-flex justify-content-around'>
                <div className='spinner-border text-primary' role='status'>
                  <span className='sr-only'>Loading...</span>
                </div>
              </div>
            }
            {_error &&
              <div class="alert alert-danger" role="alert">
                {_error}
              </div>
            }
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setError(null);
                }} type="email" className="form-control" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setError(null);
                }}
                type="password" className="form-control" id="password" required />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input type="submit" onSubmit={handleSignIn} onClick={handleSignIn} className="btn btn-primary" value="Login" />
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;