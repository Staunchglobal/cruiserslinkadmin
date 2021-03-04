function EditUser() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-100 mw-600">
        <div className="card-body px-3">
          <div className="text-center">
            <h4 className="my-3">Edit User</h4>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="type">User Type</label>
              <select id="type" className="form-control custom-select" required>
                <option value="">Select User Type</option>
                <option value="1">Cruiser</option>
                <option value="2">Business</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Boat Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="crew">Crew</label>
              <input type="text" className="form-control" id="crew" required />
            </div>
            <div className="form-group">
              <label htmlFor="captain">Owner Captain</label>
              <input type="text" className="form-control" id="captain" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Marital Status</label>
              <select id="category" className="form-control custom-select" required>
                <option value="">Select Marital Status</option>
                <option value="1">Couple</option>
                <option value="2">Male</option>
                <option value="2">Female</option>
                <option value="2">Male</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telephone</label>
              <input type="text" className="form-control" id="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" className="form-control" id="whatsapp" required />
            </div>
            <input type="submit" className="btn btn-primary" value="Update" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;