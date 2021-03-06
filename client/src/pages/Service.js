import { useEffect, useState } from 'react'
import { SetServices } from '../Redux/actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firestore } from '../services/base'
import { CategoriesToName, SubCategoriesToName } from '../util/constants'
const names = ["Yacht Services", "Anchorages Marinas Boatyards", "Food & Drinks", "Tips & Tricks", "Telecom", "Health", "Pets", "Government && Customs", "Miscellanous", "Messaging"]
const Service = function (props) {
    const { stats, services, id, setServices } = props
    const intId = JSON.parse(id)
    const [activePage, setActivePage] = useState(0);
    useEffect(() => {
        if (services.data.length > 0) {
            firestore
                .collection('Services')
                .orderBy('DateSubmitted', 'desc')
                .orderBy('__name__', 'desc')
                .where('Category', '==', intId)
                .startAfter(services.data[services.data.length - 1].id)
                .limit(25)
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
                .orderBy('DateSubmitted', 'desc')
                .orderBy('__name__', 'desc')
                .where('Category', '==', intId)
                .limit(25)
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
    }, [])
    return (
        services.count === 0 ?
            <div>
                <h5 className="text-primary">{names[intId - 1]}</h5>
                <div className="form-row">
                    <div className="col">
                        No Services Present Yet.
                    </div>
                </div>
            </div> :
            <div id="Yacht" className="id-div">
                <h5 className="text-primary">{names[intId - 1]}</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Pending</a>
                        <a className="dropdown-item" href="#">Active</a>
                        <a className="dropdown-item" href="#">Inactive</a>
                    </div>
                </div>
                {services.data.map((entry, index) => {
                    return (
                        <div key={entry.id} className="form-row">
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

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <button type="button" className="page-link" tabIndex="-1">Previous</button>
                        </li>
                        <li className="page-item active"><button type="button" className="page-link">1</button></li>
                        <li className="page-item"><button type="button" className="page-link">2</button></li>
                        <li className="page-item"><button type="button" className="page-link">3</button></li>
                        <li className="page-item">
                            <button type="button" className="page-link">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps
    const intId = JSON.parse(id);
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