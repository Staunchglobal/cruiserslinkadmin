import Boat from './../images/Boat.svg';
import {Link} from 'react-router-dom';

function Claims() {
  return (
    <div>
      <h3 className="text-center mb-3">Claims</h3>
      <div className="form-row">
        <div className="col-md-6 col-lg-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Description</th>
                  <td>This is mine</td>
                </tr>
                <tr>
                  <th>Attachment</th>
                  <td><img src={Boat} alt="attachment" className="img-thumbnail" /></td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                  <Link to="Approve" className="ml-2">Approve</Link>
                  <Link to="Reject" className="text-danger ml-2">Reject</Link>
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
                  <th>Description</th>
                  <td>abc def</td>
                </tr>
                <tr>
                  <th>Attachment</th>
                  <td><img src={Boat} alt="attachment" className="img-thumbnail" /></td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                  <Link to="Approve" className="ml-2">Approve</Link>
                  <Link to="Reject" className="text-danger ml-2">Reject</Link>
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
                  <th>Description</th>
                  <td>abc def</td>
                </tr>
                <tr>
                  <th>Attachment</th>
                  <td><img src={Boat} alt="attachment" className="img-thumbnail" /></td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                  <Link to="Approve" className="ml-2">Approve</Link>
                  <Link to="Reject" className="text-danger ml-2">Reject</Link>
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

export default Claims;