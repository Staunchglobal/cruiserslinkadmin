function ServiceShow() {
  
  return (
    <div>
      <h3 className="text-center mt-3">Curacao Marine</h3>
      <div className="id-div">
        <div className="form-row mb-3">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th colSpan={2} className="text-center">Service Details</th>
                  </tr>
                  <tr>
                    <th>Service Type</th>
                    <td>Commercial</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>Yacht Services</td>
                  </tr>
                  <tr>
                    <th>SubCategory</th>
                    <td />
                  </tr>
                  <tr>
                    <th>Service Attachments</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Service Description</th>
                    <td>Storage, repairs, slips, hauling, painting, etc.</td>
                  </tr>
                  <tr>
                    <th>Pricing</th>
                    <td>$$10 or more</td>
                  </tr>
                  <tr>
                    <th>Contact Number</th>
                    <td>+59994658936</td>
                  </tr>
                  <tr>
                    <th>Average Ratings</th>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <th>Total Ratings</th>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>Time</th>
                    <td>9:00 - 17:00</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>active</td>
                  </tr>
                  <tr>
                    <th>Date Added</th>
                    <td>Fri Jun 04 2021 18:01:41 GMT+0500 (Pakistan Standard Time)</td>
                  </tr>
                  <tr>
                    <th>Ratings</th>
                    <td><a href="#">View Ratings</a></td>
                  </tr>
                  <tr>
                    <th>Attachments</th>
                    <td>
                      <div className="d-inline-block position-relative">
                        <div>
                          <img src="https://firebasestorage.googleapis.com/v0/b/cruisersadvisor.appspot.com/o/ServiceImages%2F46a09536-dd09-44d4-a788-64a45a574f14%2F0?alt=media&token=8867b662-b73d-4ed1-811c-4ce750f72902" className="img-thumbnail" alt="Na" />
                          <a href="#" title="Delete" className="img-delete">
                            <i className="fas fa-trash-alt text-danger" />
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Actions</th>
                    <td>
                      <a className="text-primary mr-3" href="#">Edit</a><a className="text-danger mr-3" href="#">Disable</a>
                      <a className="text-danger mr-3" href="#">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="form-row mt-3 mb-3">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th colSpan={2} className="text-center">User Details</th>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>User 1</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>user1@test.com</td>
                  </tr>
                  <tr>
                    <th>User Type</th>
                    <td>Cruiser</td>
                  </tr>
                  <tr>
                    <th>Actions</th>
                    <td>
                      <a className="text-primary mr-3" href="#">Edit</a><a className="text-danger mr-3" href="#">Disable</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <iframe className="iframe-map" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d27217.031659997225!2d74.32309205556929!3d31.49313900252803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3919037e77334edf%3A0xb899f6f639f1db66!2sLahore%20British%20School%2C%20Ghazali%20Park%2C%20Wadat%20Colony%2C%20Combo%20Colony%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!3m2!1d31.5194731!2d74.3097602!4m5!1s0x391905c3ff7c1273%3A0x13cd1a467c901f96!2sSystem%20Plus%2C%20D.H.A.%20Main%20Boulevard%2C%20New%20Super%20Town%20Lahore!3m2!1d31.494517899999998!2d74.37633129999999!5e0!3m2!1sen!2s!4v1623119877224!5m2!1sen!2s" width={100} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
    </div>

  );
}

export default ServiceShow;
