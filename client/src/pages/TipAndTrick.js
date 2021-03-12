import { useEffect, useState } from 'react'
import { SetTipAndTricks } from '../Redux/actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firestore, storage } from '../services/base'
import { CategoriesToName, TipsAndTricksCategories, TipsAndTricksSubCategories } from '../util/constants'
import Swal from 'sweetalert2'
const TipAndTrick = function (props) {
    const { stats, tipsandtricks, id, setTipsAndTricks, limit } = props
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
        fetchTipsAndTricks();
        // console.log('Runs Active Page Effect on tips and tricks')
    }, [activePage])
    const fetchTipsAndTricks = function () {
        if (tipsandtricks.data.length > 0) {
            firestore
                .collection('TipsAndTricks')
                .orderBy('timePosted', 'desc')
                .where('category', '==', intId)
                .startAfter(tipsandtricks.data[tipsandtricks.data.length - 1].timePosted)
                .limit(limit)
                .get()
                .then(snapshot => {
                    setTipsAndTricks(intId, [...snapshot.docs.map((doc, index) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    }), ...tipsandtricks.data]
                    )
                }).catch(err => {
                    console.log(err)
                })
        } else {
            firestore
                .collection('TipsAndTricks')
                .where('category', '==', intId)
                .orderBy('timePosted', 'desc')
                .limit(limit)
                .get()
                .then(snapshot => {
                    setTipsAndTricks(intId, snapshot.docs.map((doc, index) => {
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

    const handleDeleteTipAndTrick = function (event, id) {
        event.preventDefault()
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this tip and trick and all the reviews linked to it.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // const storeRef = storage.ref(`ServiceImages/${id}`);
                    await firestore.collection('TipsAndTricks').doc(id).delete();
                    await firestore.collection('TipsAndTricksReviews').doc(id).delete();
                    // await storeRef.delete();
                    await Swal.fire({ title: 'Success', text: 'Tip And Trick Deleted Successfully', icon: 'success' });
                    setTipsAndTricks(intId, tipsandtricks.data.filter(x => x.id !== id));
                } catch (err) {
                    Swal.fire({ title: 'Error', text: err.message, icon: 'error' }).then((value) => { })
                }
            }
        })
    }

    const EnableDisableTipAndTrick = function (id, value) {
        firestore.collection('TipsAndTricks').doc(id).update({
            status: value ? "active" : "inactive"
        }).then(y => {
            setTipsAndTricks(intId, tipsandtricks.data.map(x => x.id === id ? { ...x, status: value ? "active" : "inactive" } : x));
            Swal.fire({ title: 'Success!', text: 'Tip And Trick Changed Successfully', icon: 'success' }).then(_ => { })
        }).catch(err => {
            Swal.fire({ title: 'Error!', text: err.message, icon: 'error' }).then(_ => { })
        })
    }
    const data = tipsandtricks.data.filter((tip_and_trick, index) => {
        // console.log(tip_and_trick.status)
        const typeFilter = activeState === "all" ? true : tip_and_trick.status === activeState
        const pageFilter = ((index + 1) >= (activePage - 1 * limit)) && ((index + 1) < (activePage * limit))
        return typeFilter && pageFilter
    });
    // console.log(activePage,totalPages)
    return (
        data.length === 0 ?
            <div>
                <h5 className="text-primary">{TipsAndTricksCategories[intId]}</h5>
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
                        No Tips And Tricks Present Yet.
                    </div>
                </div>
            </div> :
            <div id="Yacht" className="id-div">
                <h5 className="text-primary">{TipsAndTricksCategories[intId]} ({activeState === "all" ? stats.total : activeState === "pending" ? stats.pending : activeState === "active" ? stats.active : stats.inactive})</h5>
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
                                                <th colSpan="2" className="text-center">{entry.subject}</th>
                                            </tr>
                                            <tr>
                                                <th>Description</th>
                                                <td>{entry.description}</td>
                                            </tr>
                                            <tr>
                                                <th>Category</th>
                                                <td>{TipsAndTricksCategories[entry.category]}</td>
                                            </tr>
                                            <tr>
                                                <th>SubCategory</th>
                                                <td>{entry.SubCategory ? TipsAndTricksSubCategories[entry.SubCategory] : '--'}</td>
                                            </tr>
                                            <tr>
                                                <th>Anonymous</th>
                                                <td>{JSON.stringify(entry.anonymous)}</td>
                                            </tr>
                                            <tr>
                                                <th>Posted By Name</th>
                                                <td>{entry.postedByName}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{entry.status}</td>
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
                                                <th>Date Added</th>
                                                <td>{entry.timePosted.toDate().toString()}</td>
                                            </tr>
                                            <tr>
                                                <th>Ratings</th>
                                                <td><Link to={`/ratings/tipandtrick/${entry.id}`}>View Ratings</Link></td>
                                            </tr>
                                            <tr>
                                                <th>Actions</th>
                                                <td>
                                                    <Link className="text-primary mr-3" to={`/edit_tips/${entry.category}/${entry.id}`}>Edit</Link>
                                                    {entry.status === "pending" ?
                                                        <Link onClick={e => { e.preventDefault(); EnableDisableTipAndTrick(entry.id, true); }} className="text-primary mr-3" to="#">Approve</Link> :
                                                        entry.status === "inactive" ?
                                                            <Link onClick={e => { e.preventDefault(); EnableDisableTipAndTrick(entry.id, true); }} className="text-success  mr-3" to="#">Activate</Link> :
                                                            <Link onClick={e => { e.preventDefault(); EnableDisableTipAndTrick(entry.id, false); }} className="text-danger mr-3" to='#'>Disable</Link>
                                                    }
                                                    <Link onClick={e => handleDeleteTipAndTrick(e, entry.id)} to="#" className="text-danger mr-3">Delete</Link>
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
    return {
        tipsandtricks: state.tipsandtricksReducer.tipsandtricks[intId],
        stats: state.statsReducer.tips_and_tricks_by_category[intId]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setTipsAndTricks: function (category, tipsandtricks) {
            dispatch(SetTipAndTricks(category, tipsandtricks))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TipAndTrick)