function TipTrickShow() {
  
  return (
    <div>
      <h3 className="text-center mt-3">Battery power to the windlass</h3>
      <div className="id-div">
        <div className="form-row mb-3">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th colspan="2" className="text-center">Tip & Trick Details</th>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>We use a battery close to the windlass which is being charged via a ACR this ensures power at all time and we just use a group 24 start battery which seem to last about 5 years.</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>Anchoring</td>
                </tr>
                <tr>
                  <th>SubCategory</th>
                  <td>Subcategory</td>
                </tr>
                <tr>
                  <th>Anonymous</th>
                  <td>false</td>
                </tr>
                <tr>
                  <th>Posted By Name</th>
                  <td>Gypsy Blues</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>active</td>
                </tr>
                <tr>
                  <th>Average Ratings</th>
                  <td>4.00</td>
                </tr>
                <tr>
                  <th>Total Ratings</th>
                  <td>-1</td>
                </tr>
                <tr>
                  <th>Date Added</th>
                  <td>Sun Apr 25 2021 01:16:31 GMT+0500 (Pakistan Standard Time)</td>
                </tr>
                <tr>
                  <th>Ratings</th>
                  <td><a href="#">View Ratings</a></td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td><a className="text-primary mr-3" href="#">Edit</a><a className="text-danger mr-3" href="#">Disable</a><a className="text-danger mr-3" href="#">Delete</a></td>
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

export default TipTrickShow;
