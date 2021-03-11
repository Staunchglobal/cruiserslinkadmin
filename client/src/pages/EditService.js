import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { SetServices } from "../Redux/actions/actions";
import ClipLoader from 'react-spinners/ClipLoader'
import { ServiceCategories } from "../util/constants";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { firestore } from "../services/base";
import Swal from "sweetalert2";

function EditService(props) {
  const { id, category } = useParams();
  const intCat = JSON.parse(category)
  const { services, setServices } = props
  const history = useHistory();
  const [serviceData, setServiceData] = useState({
    ProductName: null,
    ProductDescription: null,
    Category: null,
    SubCategory: null,
    ContactNumber: null,
    Pricing: null,
    ServiceType: null,
    ServiceStatus: null,
    ContactNumberValid: false,
  })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true);
    services.data.forEach(service => {
      if (service.id === id) { setServiceData(service); setLoading(false); }
    })
    setLoading(false);
  }, [id])
  const { ProductName, ProductDescription, Category, SubCategory, ContactNumber,
    Pricing, ServiceStatus, ServiceType, ContactNumberValid } = serviceData

  const serviceInfo = ServiceCategories.filter(x => x.id === Category)
  const sub_categories_info = serviceInfo.length > 0 ? serviceInfo[0].sub_categories : []

  const validateService = function () {
    return new Promise((resolve, reject) => {
      if (!ProductName) {
        reject({ message: 'Service Name is not valid' })
      } else if (!ProductDescription) {
        reject({ message: 'Service Description is not valid' })
      } else if (!Category) {
        reject({ message: 'Service Category is not valid' })
      } else if (!SubCategory) {
        reject({ message: 'Service SubCategory is not valid' })
      } else if (!ContactNumberValid) {
        reject({ message: 'Service Contact Number is not valid' })
      } else if (!Pricing) {
        reject({ message: 'Service Pricing is not valid' })
      } else if (!ServiceStatus) {
        reject({ message: 'Service Status is not valid' })
      } else if (!ServiceType) {
        reject({ message: 'Service Type is not valid' })
      } else {
        resolve(true);
      }
    })
  }

  const handleUpdateService = async function (e) {
    e.preventDefault();
    try {
      await validateService();
      await firestore.collection('Services').doc(id).update(serviceData);
      setServices(intCat, services.data.map(x => x.id == id ? { ...x, ...serviceData } : x))
      const response = await Swal.fire({ title: 'Success', text: 'Service Updated Successfully', icon: 'success', confirmButtonText: 'Ok' })
      if (response.isConfirmed) history.goBack();
    } catch (err) {
      Swal.fire({ title: 'Error!', text: err.message, icon: 'error' })
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card w-100 mw-600">
        <div className="card-body px-3">
          <div className="text-center">
            <h4 className="my-3">Edit Service</h4>
          </div>
          {loading ? <ClipLoader size={50} color="blue" /> :
            <form>
              <div className="form-group">
                <label htmlFor="name">Service Name</label>
                <input value={ProductName} onChange={e => setServiceData({ ...serviceData, ProductName: e.target.value })} type="text" className="form-control" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="type">Service Type</label>
                <select value={ServiceType} onChange={e => setServiceData({ ...serviceData, ServiceType: e.target.value })} id="type" className="form-control custom-select" required>
                  <option value="Commercial">Commercial</option>
                  <option value="Non-Commercial">Non-Commercial</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select onChange={e => setServiceData({ ...serviceData, Category: JSON.parse(e.target.value), SubCategory: sub_categories_info[0].id })} value={Category} id="category" className="form-control custom-select" required>
                  {ServiceCategories.map(category => {
                    return (
                      <option key={category.id} value={category.id}>{category.category_name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="subcategory">SubCategory</label>
                <select value={SubCategory} onChange={e => setServiceData({ ...serviceData, SubCategory: e.target.value })} id="subcategory" className="form-control custom-select" required>
                  {sub_categories_info.map(sc => {
                    return (
                      <option key={sc.id} value={sc.id}>{sc.sub_category_name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select value={ServiceStatus} onChange={e => setServiceData({ ...serviceData, ServiceStatus: e.target.value })} id="status" className="form-control custom-select" required>
                  {["active", "inactive"].map(x => {
                    return (
                      <option key={x} value={x}>{x}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea value={ProductDescription} onChange={e => setServiceData({ ...serviceData, ProductDescription: e.target.value })} className="form-control" id="description" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="pricing">Pricing</label>
                <input value={Pricing} onChange={e => setServiceData({ ...serviceData, Pricing: e.target.value })} type="text" className="form-control" id="pricing" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <PhoneInput
                  international
                  value={ContactNumber}
                  onChange={val => setServiceData({ ...serviceData, ContactNumber: val, ContactNumberValid: isValidPhoneNumber(val), })}
                />
              </div>
              <input onClick={handleUpdateService} onSubmit={handleUpdateService} type="submit" className="btn btn-primary" value="Update" />
            </form>
          }
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps.match.params
  const intCat = JSON.parse(category)
  return {
    services: state.servicesReducer.services[category],
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setServices: function (category, services) { dispatch(SetServices(category, services)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditService);