import Logo from './../images/cruiserslink.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../services/base';

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState('danger')
  const [loading, setLoading] = useState(false)
  const handleSendChangePasswordRequest = function (event) {
    event.preventDefault();
    setLoading(true);
    auth.sendPasswordResetEmail(email).then(() => {
      setMessage('Please Check Your Email To Reset Password'); setType('success'); setEmail('');
    }).catch(err => {
      setMessage(err.message); setType('danger');
    })
    setLoading(false);
  }
  return (
    <div className="form-div">
      <div className="card w-100 mw-500">
        <div className="card-body px-3">
          <div className="text-center">
            <img src={Logo} width="200" alt="Logo" />
            <h4 className="my-3">Forgot Password</h4>
            {loading &&
              <div className='my-5 d-flex justify-content-around'>
                <div className='spinner-border text-primary' role='status'>
                  <span className='sr-only'>Loading...</span>
                </div>
              </div>
            }
            {message &&
              <div className={`alert alert-${type}`} role="alert">
                {message}
              </div>
            }
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" className="form-control" id="email" required />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                onClick={handleSendChangePasswordRequest}
                onSubmit={handleSendChangePasswordRequest} type="submit" className="btn btn-primary" value="Reset Password" />
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;