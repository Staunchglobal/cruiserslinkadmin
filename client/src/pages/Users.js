import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SetUsers } from '../Redux/actions/actions';
import { useAuth } from '../services/Auth';
import { firestore } from '../services/base';
import Swal from 'sweetalert2'

function Users(props) {
  const { users, setUsers } = props
  const { currentUser } = useAuth();
  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (users.length > 0) {
      firestore.collection('Users').orderBy('__name__', 'asc').startAfter(users[users.length - 1].id).get().then(snapshot => {
        setUsers([...snapshot.docs.map(x => {
          return {
            id: x.id,
            ...x.data(),
          }
        }), ...users])
      })
    } else {
      firestore.collection('Users').orderBy('__name__', 'asc').get().then(snapshot => {
        setUsers(snapshot.docs.map(x => {
          return {
            id: x.id,
            ...x.data(),
          }
        }))
      })
    }
  }, [])

  const ToggleEnableDisable = async function (id, value) {
    try {
      const response = await fetch('/api/enable_disable', { method: 'POST', headers: { Authorization: `Bearer ${currentUser.uid}` }, body: JSON.stringify({ id: id, value: value }) })
      const jsonResponse = await response.json();
      console.log(jsonResponse, response.status)
      if (response.status === 200) {
        setUsers(users.map(user => user.id === id ? { ...user, disabled: value } : user))
        Swal.fire({ title: 'Success!', text: `User changed successfully!`, icon: 'success' }).then(() => { })
      } else {
        Swal.fire({ title: 'Notice', text: `Error ${response.status}`, icon: 'error' }).then(() => { })
      }
    } catch (err) {
      Swal.fire({ title: 'Notice', text: `Error ${err.message}`, icon: 'error' }).then(() => { })
    }
  }
  return (
    <div>
      <h3 className="text-center mb-3">Users</h3>
      <div className="text-center">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {category.toUpperCase()}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {category !== "all" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setCategory("all"); }} href="#">All</a> : null}
            {category !== "cruiser" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setCategory("cruiser"); }} href="#">Cruiser</a> : null}
            {category !== "business" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setCategory("business"); }} href="#">Business</a> : null}
          </div>
        </div>
      </div>
      <div className="form-row mt-4">
        {users.filter(_user => category === "all" ? true : _user.userType === category).map((user) => {
          return (
            <div key={user.id} className="col-md-6 col-lg-4">
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{user.fullName}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>User Type</th>
                      <td>{user.userType}</td>
                    </tr>
                    <tr>
                      <th>Actions</th>
                      <td>
                        <Link to={`/edit_user/${user.id}`}>Edit</Link>
                        {user.disabled ?
                          <Link onClick={e => ToggleEnableDisable(user.id, false)} to="#" className="ml-2">Enable</Link> :
                          <Link onClick={e => ToggleEnableDisable(user.id, true)} to="#" className="text-danger ml-2">Disable</Link>
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  );
}
const mapStateToProps = state => {
  return {
    users: state.usersReducer.users
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUsers: function (users) {
      dispatch(SetUsers(users));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);