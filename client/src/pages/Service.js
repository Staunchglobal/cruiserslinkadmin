import { useEffect, useState } from 'react'
import { SetServices } from '../Redux/actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firestore, storage } from '../services/base'
import { CategoriesToName, SubCategoriesToName } from '../util/constants'
import Swal from 'sweetalert2'
const names = ["Yacht Services", "Anchorages Marinas Boatyards", "Food & Drinks", "Tips & Tricks", "Destination Info", "Health", "Places Of Interest", "Government && Customs", "Miscellanous", "Messaging"]
const Service = function (props) {
    const { stats, services, id, setServices, limit } = props
    const intId = JSON.parse(id);
    const [totalPages, setTotalPages] = useState(Math.floor(stats.total / limit) + 1);
    const [activePage, setActivePage] = useState(1);
    const [activeState, setActiveState] = useState("all");
    useEffect(() => {
        if (activeState === "all") {
            setTotalPages(Math.floor(stats.total / limit) + 1); setActivePage(1);
        } else if (activeState === "pending") {
            setTotalPages(Math.floor(stats.pending / limit) + 1); setActivePage(1);
        } else if (activeState === "active") {
            setTotalPages(Math.floor(stats.active / limit) + 1); setActivePage(1);
        } else if (activeState === "inactive") {
            setTotalPages(Math.floor(stats.inactive / limit) + 1); setActivePage(1);
        }
    }, [activeState])

    useEffect(() => {
        fetchServices();
        // console.log('Runs Active Page Effect')
    }, [activePage])
    const fetchServices = function () {
        if (services.data.length > 0) {
            firestore
                .collection('Services')
                .orderBy('DateSubmitted', 'desc')
                .where('Category', '==', intId)
                .startAfter(services.data[services.data.length - 1].DateSubmitted)
                .limit(limit)
                .get()
                .then(snapshot => {
                    setServices(intId, [...services.data, ...snapshot.docs.map((doc, index) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    })]
                    )
                }).catch(err => {
                    console.log(err)
                })
        } else {
            firestore
                .collection('Services')
                .where('Category', '==', intId)
                .orderBy('DateSubmitted', 'desc')
                .limit(limit)
                .get()
                .then(snapshot => {
                    setServices(intId, snapshot.docs.map((doc, index) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    }))
                }).catch(err => {
                    console.log(err)
                })
        }
    }

    const handleDeleteServiceImage = function (service, imageId) {
        try {
            Swal.fire({
                title: 'Notice!',
                text: 'Are you sure to want to delete this image Attachment? \n This action will be irrversible',
                icon: 'question',
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'Cancel',
            }).then(async result => {
                try {
                    if (result.isConfirmed) {
                        await storage.ref(`ServiceImages/${service.id}/${imageId}`).delete();
                        await firestore.collection('Services').doc(service.id).update({
                            ProductImages: service.ProductImages.filter((img, imgIndex) => imgIndex !== imageId),
                            ProductImagesCount: service.ProductImagesCount - 1,
                        })
                        setServices(intId, services.data.map((y, i) => {
                            return y.id === service.id ?
                                {
                                    ...y,
                                    ProductImages: y.ProductImages.filter((z, k) => k !== imageId),
                                    ProductImagesCount: y.ProductImagesCount - 1
                                }
                                : y
                        }))
                        await Swal.fire({ title: 'Success', text: 'Service Attachment Removed Successfully!', icon: 'success' })
                    }
                } catch (err) {
                    Swal.fire({ title: 'Error', text: err.message, icon: 'error' }).then(_ => { })
                }
            })

        } catch (err) {

        }
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
                    setServices(intId, services.data.filter(x => x.id !== id));
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
            setServices(intId, services.data.map(x => x.id === id ? { ...x, ServiceStatus: value ? "active" : "inactive" } : x));
            Swal.fire({ title: 'Success!', text: 'Service Changed Successfully', icon: 'success' }).then(_ => { })
        }).catch(err => {
            Swal.fire({ title: 'Error!', text: err.message, icon: 'error' }).then(_ => { })
        })
    }
    const data = services.data.filter((_user, index) => {
        const typeFilter = activeState === "all" ? true : _user.ServiceStatus === activeState
        const pageFilter = ((index + 1) >= (activePage - 1 * limit)) && ((index + 1) < (activePage * limit))
        return typeFilter && pageFilter
    });
    // console.log(activePage,totalPages)
    return (
        data.length === 0 ?
            <div>
                <h5 className="text-primary">{names[intId - 1]}</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {activeState.toUpperCase()}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {activeState !== "all" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("all") }} href="#">All</a> : null}
                        {activeState !== "pending" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("pending") }} href="#">Pending</a> : null}
                        {activeState !== "active" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("active") }} href="#">Active</a> : null}
                        {activeState !== "inactive" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("inactive") }} href="#">Inactive</a> : null}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        No Services Present Yet.
                    </div>
                </div>
            </div> :
            <div id="Yacht" className="id-div">
                <h5 className="text-primary">{names[intId - 1]} ({activeState === "all" ? stats.total : activeState === "pending" ? stats.pending : activeState === "active" ? stats.active : stats.inactive})</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {activeState.toUpperCase()}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {activeState !== "all" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("all") }} href="#">All</a> : null}
                        {activeState !== "pending" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("pending") }} href="#">Pending</a> : null}
                        {activeState !== "active" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("active") }} href="#">Active</a> : null}
                        {activeState !== "inactive" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("inactive") }} href="#">Inactive</a> : null}
                    </div>
                </div>
                {data.map((entry, index) => {
                    return (
                        <div key={entry.id} className="form-row mt-3 mb-3">
                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <tbody>
                                            <tr>
                                                <th colSpan="2" className="text-center">{entry.ProductName}</th>
                                            </tr>
                                            <tr>
                                                <th>Service Type</th>
                                                <td>{entry.ServiceType}</td>
                                            </tr>
                                            <tr>
                                                <th>Category</th>
                                                <td>{CategoriesToName[entry.Category]}</td>
                                            </tr>
                                            <tr>
                                                <th>SubCategory</th>
                                                <td>{SubCategoriesToName[entry.SubCategory]}</td>
                                            </tr>
                                            <tr>
                                                <th>Service Attachments</th>
                                                <td>{entry.ProductImagesCount}</td>
                                            </tr>
                                            <tr>
                                                <th>Service Description</th>
                                                <td>{entry.ProductDescription}</td>
                                            </tr>
                                            <tr>
                                                <th>Pricing</th>
                                                <td>{entry.Pricing}</td>
                                            </tr>
                                            <tr>
                                                <th>Contact Number</th>
                                                <td>{entry.ContactNumber}</td>
                                            </tr>
                                            <tr>
                                                <th>Average Ratings</th>
                                                <td>{entry.avgRating.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <th>Total Ratings</th>
                                                <td>{entry.numRating}</td>
                                            </tr>
                                            <tr>
                                                <th>Time</th>
                                                <td>{`${entry.StartTime}:00 - ${entry.EndTime > 23 ? 0 : entry.EndTime}:00`}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{entry.ServiceStatus}</td>
                                            </tr>
                                            <tr>
                                                <th>Date Added</th>
                                                <td>{entry.DateSubmitted.toDate().toString()}</td>
                                            </tr>
                                            <tr>
                                                <th>Ratings</th>
                                                <td><Link to={`/ratings/service/${entry.id}`}>View Ratings</Link></td>
                                            </tr>
                                            <tr>
                                                <th>Attachments</th>
                                                <td>
                                                    <div className="d-inline-block position-relative">
                                                        {entry.ProductImages.map((image, imageIndex) => {
                                                            return image ?
                                                                <div>
                                                                    <img src={image} class="img-thumbnail" alt={entry.ProductName}>

                                                                    </img>
                                                                    <Link title="Delete" class="img-delete" onClick={e => handleDeleteServiceImage(entry, imageIndex)}>
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
                                                    <Link className="text-primary mr-3" to={`/edit_service/${entry.Category}/${entry.id}`}>Edit</Link>
                                                    {entry.ServiceStatus === "pending" ?
                                                        <Link onClick={e => { e.preventDefault(); EnableDisableService(entry.id, true); }} className="text-primary mr-3" to="#">Approve</Link> :
                                                        entry.ServiceStatus === "inactive" ?
                                                            <Link onClick={e => { e.preventDefault(); EnableDisableService(entry.id, true); }} className="text-success  mr-3" to="#">Activate</Link> :
                                                            <Link onClick={e => { e.preventDefault(); EnableDisableService(entry.id, false); }} className="text-danger mr-3" to='#'>Disable</Link>
                                                    }
                                                    <Link onClick={e => handleDeleteService(e, entry.id)} to="#" className="text-danger mr-3">Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>View Full Listing</th>
                                                <td><Link to={`/serviceshow/${entry.Category}/${entry.id}`}>View Service</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {totalPages > 0 ?
                    < nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {activePage !== 1 ?
                                <li className="page-item">
                                    <button onClick={e => { e.preventDefault(); setActivePage(activePage - 1); }} type="button" className="page-link" tabIndex="-1">Previous</button>
                                </li> : null
                            }
                            {[activePage - 1, activePage, activePage + 1].map(i => {
                                return (
                                    i <= totalPages && i > 0 ?
                                        i === activePage ?
                                            <li key={i} className="page-item active" > <button type="button" className="page-link">{i}</button></li> :
                                            <li key={i} className="page-item"><button type="button" onClick={e => { e.preventDefault(); setActivePage(i); }} className="page-link">{i}</button></li> : null
                                )
                            })
                            }
                            {activePage !== totalPages ?
                                <li className="page-item">
                                    <button onClick={e => { e.preventDefault(); setActivePage(activePage + 1); }} type="button" className="page-link">Next</button>
                                </li> : null
                            }
                        </ul>
                    </nav> : null
                }
            </div >
    )
}
const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps
    const intId = JSON.parse(id);
    // console.log(intId)
    // console.log(state.servicesReducer.services[id], id)
    return {
        services: state.servicesReducer.services[id],
        stats: state.statsReducer.services_by_category[id]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setServices: function (category, services) {
            dispatch(SetServices(category, services))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Service)