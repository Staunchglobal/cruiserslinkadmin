import { useState } from "react"
import { useAuth } from "../services/Auth"
import app, { auth } from '../services/base'
import firebase from 'firebase/app'
function Settings() {
  const { currentUser } = useAuth()
  const [email, setEmail] = useState(currentUser.email)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState(null)
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [error, setError] = useState('')
  const [errorType, setErrorType] = useState('danger')
  const [loading, setLoading] = useState('')
  const reauthenticate = (pass) => {
    const user = app.auth().currentUser;
    const cred = firebase.default.auth.EmailAuthProvider.credential(user.email, pass);
    return user.reauthenticateWithCredential(cred);
  }
  const handleChangePassword = function (event) {
    event.preventDefault()
    if (email && currentPassword && newPassword && confirmNewPassword) {
      if (newPassword === confirmNewPassword) {
        setError(null); setLoading(true);
        reauthenticate(currentPassword).then(() => {
          const user = firebase.default.auth().currentUser;
          if (user.email !== email) {
            user.updateEmail(email).then(() => {
              user.updatePassword(newPassword).then(() => {
                setError('Password/Email Changed Successfully'); setLoading(false); setErrorType('success');
                setNewPassword(''); setConfirmNewPassword(''); setCurrentPassword('');
              })
                .catch((error) => {
                  setError(error.message); setLoading(false); setErrorType('danger');
                });
            }).catch(err => {
              setError(error.message); setLoading(false); setErrorType('danger');
            })
          } else {
            user.updatePassword(newPassword).then(() => {
              setError('Password Changed Successfully'); setLoading(false); setErrorType('success');
              setEmail(''); setNewPassword(''); setConfirmNewPassword(''); setCurrentPassword('');
            })
              .catch((error) => {
                setError(error.message); setLoading(false); setErrorType('danger');
              });
          }
        }).catch((error) => {
          setError(error.message); setLoading(false); setErrorType('danger');
        });
      } else {
        setError('Passwords Do Not Match'); setLoading(false); setErrorType('danger');
      }
    } else {
      setError('Please Add Valid Credentials')
      setLoading(false); setErrorType('danger')
    }
  }
  // console.log(email)
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-100 mw-600">
        <div className="card-body px-3">
          <div className="text-center">
            <h4 className="my-3">Settings</h4>
            {loading &&
              <div className='my-5 d-flex justify-content-around'>
                <div className='spinner-border text-primary' role='status'>
                  <span className='sr-only'>Loading...</span>
                </div>
              </div>
            }
            {error &&
              <div className={`alert alert-${errorType}`} role="alert">
                {error}
              </div>
            }
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                type="email"
                className="form-control"
                id="email"
                required />
            </div>
            <div className="form-group">
              <label htmlFor="new_password">New Password</label>
              <input
                value={newPassword}
                onChange={e => {
                  setNewPassword(e.target.value);
                  setError(null);
                }}
                type="password" className="form-control" id="new_password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm New Password</label>
              <input
                value={confirmNewPassword}
                onChange={e => {
                  setConfirmNewPassword(e.target.value);
                  setError(null);
                }}
                type="password" className="form-control" id="confirm_password" required />
            </div>
            <div className="form-group">
              <label htmlFor="current_password">Current Password</label>
              <input
                value={currentPassword}
                onChange={e => {
                  setCurrentPassword(e.target.value);
                  setError(null);
                }}
                type="password" className="form-control" id="current_password" required />
            </div>
            <input onClick={handleChangePassword} onSubmit={handleChangePassword} type="submit" className="btn btn-primary" value="Update" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;