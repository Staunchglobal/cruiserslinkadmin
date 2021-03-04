import {Link} from 'react-router-dom';

function Users() {
  return (
    <div>
      <h3 className="text-center mb-3">Users</h3>
      <div className="form-row">
        <div className="col-md-6 col-lg-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Imran Hayat</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>imran.hayat92@gmail.com</td>
                </tr>
                <tr>
                  <th>User Type</th>
                  <td>Business</td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                  <Link to="/edit_user">Edit</Link>
                  <Link to="Enable" className="ml-2">Enable</Link>
                  <Link to="Disable" className="text-danger ml-2">Disable</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Imran Hayat</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>imran.hayat92@gmail.com</td>
                </tr>
                <tr>
                  <th>User Type</th>
                  <td>Business</td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                  <Link to="/edit_user">Edit</Link>
                  <Link to="Enable" className="ml-2">Enable</Link>
                  <Link to="Disable" className="text-danger ml-2">Disable</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Imran Hayat</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>imran.hayat92@gmail.com</td>
                </tr>
                <tr>
                  <th>User Type</th>
                  <td>Business</td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                  <Link to="/edit_user">Edit</Link>
                  <Link to="Enable" className="ml-2">Enable</Link>
                  <Link to="Disable" className="text-danger ml-2">Disable</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;