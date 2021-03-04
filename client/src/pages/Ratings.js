import {Link} from 'react-router-dom';

function Ratings() {
  return (
    <div>
      <h3 className="text-center mb-3">Ratings</h3>
      <div className="form-row">
        <div className="col-md-6 col-lg-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Posted By</th>
                  <td>Rene</td>
                </tr>
                <tr>
                  <th>Rating Comment</th>
                  <td>Like this tip any pictures or diagrams</td>
                </tr>
                <tr>
                  <th>Date Added</th>
                  <td>Sun Dec 27 2020 02:37:06 GMT+0500 (Pakistan Standard Time)</td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                    <Link to="Delete" className="text-danger ml-2">Delete</Link>
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
                  <th>Posted By</th>
                  <td>Rene</td>
                </tr>
                <tr>
                  <th>Rating Comment</th>
                  <td>Like this tip any pictures or diagrams</td>
                </tr>
                <tr>
                  <th>Date Added</th>
                  <td>Sun Dec 27 2020 02:37:06 GMT+0500 (Pakistan Standard Time)</td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                    <Link to="Delete" className="text-danger ml-2">Delete</Link>
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

export default Ratings;