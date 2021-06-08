import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { SetServices } from "../Redux/actions/actions";
import ClipLoader from 'react-spinners/ClipLoader'
import mapboxgl from 'mapbox-gl'
import { firestore, storage } from "../services/base";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { CategoriesToName, SubCategoriesToName } from "../util/constants";
// console.log(process.env)
function ServiceShow(props) {
  const [user, setUser] = useState(null)
  const { category, serviceId } = useParams()
  const { services, serviceData, setServices } = props
  const intCat = JSON.parse(category)
  const mapContainer = useRef(null);
  const map = useRef(null);
  const history = useHistory()

  useEffect(() => {
    console.log(intCat, serviceId, serviceData)
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [serviceData.LocationLongitude, serviceData.LocationLatitude],
      zoom: 15,
      interactive: false
    });
    fetchUser()
    const marker = new mapboxgl.Marker({ color: 'green' })
      .setLngLat([serviceData.LocationLongitude, serviceData.LocationLatitude])
      .addTo(map.current);
  }, [])

  const fetchUser = function () {
    firestore.collection('Users').doc(serviceData.PublishedBy).get().then(snap => {
      setUser({ ...snap.data(), id: snap.id })
    }).catch(err => {
      Swal.fire({ title: 'Error!', text: err.message, cancelButtonText: 'Ok' }).then()
    })
  }

  const handleDeleteService = function (event, id) {
    event.preventDefault()
    // console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this service and all the reviews linked to it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const storeRef = storage.ref(`ServiceImages/${id}`);
          await firestore.collection('Services').doc(id).delete();
          await firestore.collection('ServiceDetails').doc(id).delete();
          // await storeRef.delete();
          await Swal.fire({ title: 'Success', text: 'Service Deleted Successfully', icon: 'success' });
          setServices(intCat, services.data.filter(x => x.id !== id));
          history.goBack()
        } catch (err) {
          Swal.fire({ title: 'Error', text: err.message, icon: 'error' }).then((value) => { })
        }
      }
    })
  }
  const EnableDisableService = function (id, value) {
    firestore.collection('Services').doc(id).update({
      ServiceStatus: value ? "active" : "inactive"
    }).then(y => {
      setServices(intCat, services.data.map(x => x.id === id ? { ...x, ServiceStatus: value ? "active" : "inactive" } : x));
      Swal.fire({ title: 'Success!', text: 'Service Changed Successfully', icon: 'success' }).then(_ => { })
    }).catch(err => {
      Swal.fire({ title: 'Error!', text: err.message, icon: 'error' }).then(_ => { })
    })
  }
  return (
    !serviceData ?
      <div className="text-center">
        <ClipLoader size={60} color="blue" />
      </div> :
      <div>
        <h3 className="text-center mt-3">{serviceData.ProductName}</h3>
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
                      <td>{serviceData.ServiceType}</td>
                    </tr>
                    <tr>
                      <th>Category</th>
                      <td>{CategoriesToName[serviceData.Category]}</td>
                    </tr>
                    <tr>
                      <th>SubCategory</th>
                      <td>{SubCategoriesToName[serviceData.SubCategory]}</td>
                    </tr>
                    <tr>
                      <th>Service Attachments</th>
                      <td>{serviceData.ProductImagesCount}</td>
                    </tr>
                    <tr>
                      <th>Service Description</th>
                      <td>{serviceData.ProductDescription}</td>
                    </tr>
                    <tr>
                      <th>Pricing</th>
                      <td>{serviceData.Pricing}</td>
                    </tr>
                    <tr>
                      <th>Contact Number</th>
                      <td>{serviceData.ContactNumber}</td>
                    </tr>
                    <tr>
                      <th>Average Ratings</th>
                      <td>{serviceData.avgRating}</td>
                    </tr>
                    <tr>
                      <th>Total Ratings</th>
                      <td>{serviceData.numRating}</td>
                    </tr>
                    <tr>
                      <th>Time</th>
                      <td>{serviceData.StartTime}:00 - {serviceData.EndTime}:00</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{serviceData.ServiceStatus}</td>
                    </tr>
                    <tr>
                      <th>{ }</th>
                      <td>{serviceData.DateSubmitted.toDate().toString()}</td>
                    </tr>
                    <tr>
                      <th>Ratings</th>
                      <td><Link to={`/ratings/service/${serviceData.id}`}>View Ratings</Link></td>
                    </tr>
                    <tr>
                      <th>Attachments</th>
                      <td>
                        <div className="d-inline-block position-relative">
                          {serviceData.ProductImages.map((image, imageIndex) => {
                            return image ?
                              <div>
                                <img src={image} class="img-thumbnail" alt={serviceData.ProductName}>

                                </img>
                                <Link title="Delete" class="img-delete"
                                // onClick={e => handleDeleteServiceImage(serviceData, imageIndex)}
                                >
                                  <i className="fas fa-trash-alt text-danger"></i>
                                </Link>
                              </div> : null
                          })}

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Actions</th>
                      <td>
                        <Link className="text-primary mr-3" to={`/edit_service/${serviceData.Category}/${serviceData.id}`}>Edit</Link>
                        {serviceData.ServiceStatus === "pending" ?
                          <Link
                            onClick={e => { e.preventDefault(); EnableDisableService(serviceData.id, true); }}
                            className="text-primary mr-3" to="#">Approve</Link> :
                          serviceData.ServiceStatus === "inactive" ?
                            <Link
                              onClick={e => { e.preventDefault(); EnableDisableService(serviceData.id, true); }}
                              className="text-success  mr-3" to="#">Activate</Link> :
                            <Link
                              onClick={e => { e.preventDefault(); EnableDisableService(serviceData.id, false); }}
                              className="text-danger mr-3" to='#'>Disable</Link>
                        }
                        <Link
                          onClick={e => handleDeleteService(e, serviceData.id)}
                          to="#"
                          className="text-danger mr-3">Delete</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {user ?
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
                        <td>{user.fullName}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <th>User Type</th>
                        <td>{user.userType}</td>
                      </tr>
                      {
                        user?.cruiserData?.BoatName ?
                          <tr>
                            <th>Boat Name</th>
                            <td>{user?.cruiserData?.BoatName}</td>
                          </tr> : null
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div> : null
          }
        </div>
        <div>
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>

  );
}
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  const { category, serviceId } = ownProps.match.params
  const intcat = JSON.parse(category)
  return {
    services: state.servicesReducer.services[intcat],
    serviceData: state.servicesReducer.services[intcat].data.find(service => service.id === serviceId)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setServices: function (category, services) {
      dispatch(SetServices(category, services))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceShow);
