import { useEffect, useState } from 'react'
import { SetServices } from '../Redux/actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firestore } from '../services/base'
import { CategoriesToName, SubCategoriesToName } from '../util/constants'
const names = ["Yacht Services", "Anchorages Marinas Boatyards", "Food & Drinks", "Tips & Tricks", "Telecom", "Health", "Pets", "Government && Customs", "Miscellanous", "Messaging"]
const Service = function (props) {
    const { stats, services, id, setServices, limit } = props
    const intId = JSON.parse(id);
    const [totalPages, setTotalPages] = useState(Math.floor(stats.total / limit) + 1);
    const [activePage, setActivePage] = useState(1);
    const [activeState, setActiveState] = useState("all");
    useEffect(() => {
        fetchServices();
    }, [])
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
                    setServices(intId, snapshot.docs.map((doc, index) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    })
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
    const data = services.data.filter((_user, index) => {
        const typeFilter = activeState === "all" ? true : _user.ServiceStatus === activeState
        const pageFilter = index + 1 > (activePage - 1 * limit) && index + 1 < (activePage * limit)
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
                            <div className="col-sm-6 col-lg-12">
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
                                                <td>{entry.avgRating}</td>
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
                    )
                })}
                {totalPages > 0 ?
                    < nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {activePage !== 1 ?
                                <li className="page-item disabled">
                                    <button type="button" className="page-link" tabIndex="-1">Previous</button>
                                </li> : null
                            }
                            {[1, 2, 3].map(i => {
                                return (
                                    i <= totalPages ?
                                        i === activePage ?
                                            <li key={i} className="page-item active" > <button type="button" className="page-link">{i}</button></li> :
                                            <li key={i} className="page-item"><button type="button" className="page-link">{i}</button></li> : null
                                )
                            })
                            }
                            {activePage !== totalPages ?
                                <li className="page-item">
                                    <button type="button" className="page-link">Next</button>
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
    console.log(state.servicesReducer.services[id], id)
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