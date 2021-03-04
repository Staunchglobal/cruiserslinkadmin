function Settings() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-100 mw-600">
        <div className="card-body px-3">
          <div className="text-center">
            <h4 className="my-3">Settings</h4>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="new_password">New Password</label>
              <input type="password" className="form-control" id="new_password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm New Password</label>
              <input type="password" className="form-control" id="confirm_password" required />
            </div>
            <div className="form-group">
              <label htmlFor="current_password">Current Password</label>
              <input type="password" className="form-control" id="current_password" required />
            </div>
            <input type="submit" className="btn btn-primary" value="Update" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;