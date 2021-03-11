import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory, useParams } from "react-router"
import { SetUsers } from "../Redux/actions/actions"
import ClipLoader from 'react-spinners/ClipLoader'
import { Alert } from "../util/constants"
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { firestore } from '../services/base'
import Swal from 'sweetalert2'

const EmailTest = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
function EditUser(props) {
  const { id } = useParams()
  const history = useHistory()
  const { users, setUsers } = props
  const [error, setError] = useState('')
  const [errorType, setErrorType] = useState('danger')
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState({
    businessData: {},
    cruiserData: {},
    userType: ''
  })
  useEffect(() => {
    users.forEach(x => {
      if (x.id === id) {
        setUserData(x)
      }
    })
  }, [id])
  const handleChangeData = function (type, key, value) {
    if (type === "cruiser") {
      setUserData({
        ...userData,
        cruiserData: {
          ...userData.cruiserData,
          [key]: value
        }
      })
    } else if (type === "business") {
      setUserData({
        ...userData,
        businessData: {
          ...userData.businessData,
          [key]: value
        }
      })
    }
  }
  const { userType, cruiserData, businessData } = userData
  const { BoatName, Crew, OwnerCaptain, Status, } = cruiserData
  const { BusinessName, ContactEmail, ContactPerson, WEBLink, Website } = businessData
  const { Telephone, WhatsApp } = userType === "cruiser" ? cruiserData : businessData

  const handleSubmitData = function (event) {
    event.preventDefault();
    if (userType === "cruiser") {
      setLoading(true); setError(null);
      if (Telephone && !Telephone.valid) {
        setLoading(false); Swal.fire({ title: 'Error', text: 'Telephone is not valid', icon: 'error' }).then(x => { });
      } else if (WhatsApp && !WhatsApp.valid) {
        setLoading(false); Swal.fire({ title: 'Error', text: 'WhatsApp is not valid', icon: 'error' }).then(x => { });
      } else {
        firestore.collection('Users').doc(id).set(userData).then(() => {
          setUsers(users.map(user => user.id === id ? userData : user));
          setLoading(false); setError(null);
          Swal.fire({ title: 'Success', text: 'User Updated Successfully!', icon: 'success', confirmButtonText: 'Ok', }).then(x => {
            if (x.isConfirmed) history.goBack();
          })
        }).catch(err => {
          setLoading(false); Swal.fire({ title: 'Error', text: err.message, icon: 'error' }).then(x => { });
        });
      }
    } else if (userType === "business") {
      setLoading(true); setError(null);
      if (Telephone && !Telephone.valid) {
        setLoading(false); Swal.fire({ title: 'Error', text: 'Telephone is not valid', icon: 'error' }).then(x => { });
      } else if (WhatsApp && !WhatsApp.valid) {
        setLoading(false); Swal.fire({ title: 'Error', text: 'WhatsApp is not valid', icon: 'error' }).then(x => { });
      } else if (ContactEmail && !EmailTest.test(ContactEmail)) {
        setLoading(false); Swal.fire({ title: 'Error', text: 'Contact Email is not valid', icon: 'error' }).then(x => { });
      } else {
        firestore.collection('Users').doc(id).set(userData).then(() => {
          setLoading(false); Swal.fire({ title: 'Success', text: 'User Updated Successfully!', icon: 'success' }).then(x => { })
        }).catch(err => {
          setLoading(false); Swal.fire({ title: 'Error', text: err.message, icon: 'error' }).then(x => { });
        });
      }
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-100 mw-600">
        <div className="card-body px-3">
          <div className="text-center">
            <h4 className="my-3">Edit User</h4>
          </div>
          {error && Alert(errorType, error)}
          {loading && <div className="text-center">
            <ClipLoader color="blue" size={50} />
          </div>}
          {userType === "cruiser" ?
            <form>
              <div className="form-group">
                <label htmlFor="type">User Type</label>
                <select
                  value={userType}
                  onChange={e => {
                    setUserData({
                      ...userData,
                      userType: e.target.value
                    })
                  }} id="type" className="form-control custom-select" required>
                  <option value="cruiser">Cruiser</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Boat Name</label>
                <input
                  value={BoatName ? BoatName : ''}
                  onChange={e => handleChangeData(userType, "BoatName", e.target.value)}
                  type="text" className="form-control" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="crew">Crew</label>
                <input
                  value={Crew ? Crew : ''}
                  onChange={e => handleChangeData(userType, "Crew", e.target.value)}
                  type="text" className="form-control" id="crew" required />
              </div>
              <div className="form-group">
                <label htmlFor="captain">Owner Captain</label>
                <input
                  value={OwnerCaptain ? OwnerCaptain : ''}
                  onChange={e => handleChangeData(userType, "OwnerCaptain", e.target.value)}
                  type="text" className="form-control" id="captain" required />
              </div>
              <div className="form-group">
                <label htmlFor="category">Marital Status</label>
                <select
                  value={Status ? Status : ""}
                  onChange={e => handleChangeData(userType, "Status", e.target.value)}
                  id="category" className="form-control custom-select">
                  <option value="Couple">Couple</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Family">Family</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telephone</label>
                <div>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={Telephone ? Telephone.value ? Telephone.value : '' : ''}
                    onChange={value => {
                      handleChangeData(userType, "Telephone", { ...Telephone, value: value, valid: isValidPhoneNumber(value) })
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="whatsapp">Whatsapp</label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={WhatsApp ? WhatsApp.value ? WhatsApp.value : '' : ''}
                  onChange={value => {
                    handleChangeData(userType, "WhatsApp", { ...WhatsApp, value: value, valid: isValidPhoneNumber(value) })
                  }}
                />
                {/* <input
                  value={WhatsApp ? WhatsApp.value ? WhatsApp.value : '' : ''}
                  onChange={e => handleChangeData(userType, "WhatsApp", { ...WhatsApp, value: e.target.value })}
                  type="text" className="form-control" id="whatsapp" required /> */}
              </div>
              <input onClick={handleSubmitData} onSubmit={handleSubmitData} type="submit" className="btn btn-primary" value="Update" />
            </form> :
            userData.userType === "business" ?
              <form>
                <div className="form-group">
                  <label htmlFor="type">User Type</label>
                  <select
                    value={userType}
                    onChange={e => {
                      setUserData({
                        ...userData,
                        userType: e.target.value
                      })
                    }} id="type" className="form-control custom-select" required>
                    <option value="cruiser">Cruiser</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Business Name</label>
                  <input
                    value={BusinessName ? BusinessName : ""}
                    onChange={e => handleChangeData(userType, "BusinessName", e.target.value)} type="text" className="form-control" id="business_name" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Contact Email</label>
                  <input
                    value={ContactEmail ? ContactEmail : ""}
                    onChange={e => handleChangeData(userType, "ContactEmail", e.target.value)}
                    type="text" className="form-control" id="contact_email" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Contact Person</label>
                  <input
                    value={ContactPerson ? ContactPerson : ""}
                    onChange={e => handleChangeData(userType, "ContactPerson", e.target.value)}
                    type="text" className="form-control" id="contact_person" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">WEB LINK</label>
                  <input
                    value={WEBLink ? WEBLink : ""}
                    onChange={e => handleChangeData(userType, "WEBLink", e.target.value)}
                    type="text" className="form-control" id="web_link" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Website</label>
                  <input
                    value={Website ? Website : ""}
                    onChange={e => handleChangeData(userType, "Website", e.target.value)}
                    type="text" className="form-control" id="website" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telephone</label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={Telephone ? Telephone.value ? Telephone.value : '' : ''}
                    onChange={value => {
                      handleChangeData(userType, "Telephone", { ...Telephone, value: value, valid: isValidPhoneNumber(value) })
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="whatsapp">Whatsapp</label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={WhatsApp ? WhatsApp.value ? WhatsApp.value : '' : ''}
                    onChange={value => {
                      handleChangeData(userType, "WhatsApp", { ...WhatsApp, value: value, valid: isValidPhoneNumber(value) })
                    }}
                  />
                  {/* <input
                  value={WhatsApp ? WhatsApp.value ? WhatsApp.value : '' : ''}
                  onChange={e => handleChangeData(userType, "WhatsApp", { ...WhatsApp, value: e.target.value })}
                  type="text" className="form-control" id="whatsapp" required /> */}
                </div>
                <input onClick={handleSubmitData} onSubmit={handleSubmitData} type="submit" className="btn btn-primary" value="Update" />
              </form> :
              <form>
                <div className="form-group">
                  <label htmlFor="type">User Type</label>
                  <select
                    value={userType}
                    onChange={e => {
                      setUserData({
                        ...userData,
                        userType: e.target.value
                      })
                    }} id="type" className="form-control custom-select" required>
                    <option value={userType}>Select User Type</option>
                    <option value="cruiser">Cruiser</option>
                    <option value="business">Business</option>
                  </select>
                </div>
              </form>
          }
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUsers: function (users) {
      dispatch(SetUsers(users))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);