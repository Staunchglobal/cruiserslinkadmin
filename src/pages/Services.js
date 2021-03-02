import {Link} from 'react-router-dom';

function Services() {
  return (
    <div>
      <h3 className="text-center">Services</h3>
      <div id="Yacht" className="id-div">
        <h5 className="text-primary">Yacht Services</h5>
        <div className="form-row">
          <div className="col-sm-6 col-lg-4">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th colSpan="2" className="text-center">National Hospital Lahore</th>
                  </tr>
                  <tr>
                    <th>Service Type</th>
                    <td>Commercial</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>Health</td>
                  </tr>
                  <tr>
                    <th>SubCategory</th>
                    <td>Hospitals</td>
                  </tr>
                  <tr>
                    <th>Service Attachments</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Service Description</th>
                    <td>National Hospital Lahore is a very good hospital but the problem is that they will charge you a lot of money and will almost rip you off. So think twice before going there.</td>
                  </tr>
                  <tr>
                    <th>Pricing</th>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <th>Contact Number</th>
                    <td>+923229499463</td>
                  </tr>
                  <tr>
                    <th>Average Ratings</th>
                    <td>1.00</td>
                  </tr>
                  <tr>
                    <th>Total Ratings</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Time</th>
                    <td>8:00 - 0:00</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <th>Ratings</th>
                    <td><Link to="/ratings">View Ratings</Link></td>
                  </tr>
                  <tr>
                    <th>Actions</th>
                    <td>
                      <Link to="/edit_service">Edit</Link>
                      <Link to="Delete" className="text-danger ml-2">Delete</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="Marinas" className="id-div">
        <h5 className="text-primary">Anchorages, Marinas Boatyards</h5>
        <div className="form-row">
          <div className="col-sm-6 col-lg-4">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th colSpan="2" className="text-center">National Hospital Lahore</th>
                  </tr>
                  <tr>
                    <th>Service Type</th>
                    <td>Commercial</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>Health</td>
                  </tr>
                  <tr>
                    <th>SubCategory</th>
                    <td>Hospitals</td>
                  </tr>
                  <tr>
                    <th>Service Attachments</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Service Description</th>
                    <td>National Hospital Lahore is a very good hospital but the problem is that they will charge you a lot of money and will almost rip you off. So think twice before going there.</td>
                  </tr>
                  <tr>
                    <th>Pricing</th>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <th>Contact Number</th>
                    <td>+923229499463</td>
                  </tr>
                  <tr>
                    <th>Average Ratings</th>
                    <td>1.00</td>
                  </tr>
                  <tr>
                    <th>Total Ratings</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Time</th>
                    <td>8:00 - 0:00</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <th>Ratings</th>
                    <td><Link to="/ratings">View Ratings</Link></td>
                  </tr>
                  <tr>
                    <th>Actions</th>
                    <td>
                      <Link to="/edit_service">Edit</Link>
                      <Link to="Delete" className="text-danger ml-2">Delete</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="Food" className="id-div">
        <h5 className="text-primary">Food & Drinks</h5>
        <div className="form-row">
          <div className="col">
            No Services Present Yet.
          </div>
        </div>
      </div>
      <div id="Tips" className="id-div">
        <h5 className="text-primary">Tips & Tricks</h5>
        <div className="form-row">
          <div className="col">
            No Services Present Yet.
          </div>
        </div>
      </div>
      <div id="Telecom" className="id-div">
        <h5 className="text-primary">Telecom</h5>
        <div className="form-row">
          <div className="col">
            No Services Present Yet.
          </div>
        </div>
      </div>
      <div id="Health" className="id-div">
        <h5 className="text-primary">Health</h5>
        <div className="form-row">
          <div className="col">
            No Services Present Yet.
          </div>
        </div>
      </div>
      <div id="Pets" className="id-div">
        <h5 className="text-primary">Pets</h5>
        <div className="form-row">
          <div className="col">
            No Services Present Yet.
          </div>
        </div>
      </div>
      <div id="Customs" className="id-div">
        <h5 className="text-primary">Government & Customs</h5>
        <div className="form-row">
          <div className="col">
            No Services Present Yet.
          </div>
        </div>
      </div>
      <div id="Miscellanous" className="id-div">
        <h5 className="text-primary">Miscellanous</h5>
        <div className="form-row">
          <div className="col">
            No Services Present Yet.
          </div>
        </div>
      </div>
      <div id="Messaging" className="id-div">
        <h5 className="text-primary">Messaging</h5>
        <div className="form-row">
          <div className="col">
            No Services Present Yet.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;