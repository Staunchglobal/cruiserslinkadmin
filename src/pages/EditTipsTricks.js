function EditTipsTricks() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-100 mw-600">
        <div className="card-body px-3">
          <div className="text-center">
            <h4 className="my-3">Edit Tip & Trick</h4>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" className="form-control custom-select" required>
                <option value="">Select Category</option>
                <option value="1">Yacht</option>
                <option value="2">Boat</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subcategory">SubCategory</label>
              <select id="subcategory" className="form-control custom-select" required>
                <option value="">Select SubCategory</option>
                <option value="1">Yacht</option>
                <option value="2">Boat</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="type">Status</label>
              <select id="type" className="form-control custom-select" required>
                <option value="">Select Status</option>
                <option value="1">Active</option>
                <option value="2">Pending</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" required></textarea>
            </div>
            <input type="submit" className="btn btn-primary" value="Update" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTipsTricks;