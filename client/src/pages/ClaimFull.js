import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import { firestore } from '../services/base';
import ClipLoader from 'react-spinners/ClipLoader'
import { CategoriesToName, SubCategoriesToName } from '../util/constants';
import { SetClaims } from '../Redux/actions/actions';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
const ClaimShow = function (props) {
    const { claims, setClaims } = props
    const { claimId, serviceId, userId } = useParams();
    const [claim, setClaim] = useState(null);
    const [service, setService] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async function () {
        try {
            const claimData = await firestore.collection('Claims').doc(claimId).get();
            const serviceData = await firestore.collection('Services').doc(serviceId).get();
            const userData = await firestore.collection('Users').doc(userId).get();
            setClaim({ id: claimData.id, ...claimData.data() });
            setService({ id: serviceData.id, ...serviceData.data() });
            setUser({ id: userData.id, ...userData.data() });
            setLoading(false);
        } catch (err) {
            setLoading(false); setError(err.message);
        }
    }

    const ResolveClaim = async function (event, claimId, serviceId, userId) {
        try {
            event?.preventDefault();
            const response = await Swal.fire({ title: 'Are you sure?', text: 'Please evaluate everything, this action in not reversible.', icon: 'question', showCancelButton: true, cancelButtonText: 'NO', confirmButtonText: 'YES', })
            if (response.isConfirmed) {
                await firestore.collection('Services').doc(serviceId).update({
                    PublishedBy: userId,
                })
                await firestore.collection('Claims').doc(claimId).update({
                    claimStatus: "Closed"
                })
                setClaims(claims.map(claim => claim === claimId ? { ...claim, claimStatus: 'Closed' } : claim))
                setClaim({ ...claim, claimStatus: "Closed" })
                await Swal.fire({ title: 'Success', text: 'Claim Resolved', icon: 'success' })
            }
        } catch (err) {
            await Swal.fire({ title: 'Error!', text: err.message, icon: 'error' })
        }
    }

    const deleteClaim = async function (event, id) {
        try {
            event?.preventDefault();
            const response = await Swal.fire({ title: 'Are you sure?', text: 'Everything related to this claim will not be recoverable.', icon: 'info', showCancelButton: true, cancelButtonText: 'NO', confirmButtonText: 'YES' })
            if (response.isConfirmed) {
                await firestore.collection('Claims').doc(id).delete();
                setClaims(claims.filter(claim => claim.id !== id));
                const val = await Swal.fire({ title: 'Success!', text: 'Claim Deleted Successfully', icon: 'success' })
                if (val.isConfirmed)
                    history.goBack();
            }
        } catch (err) {
            await Swal.fire({ title: 'Error!', text: err.message, icon: 'error' })
        }
    }
    return (
        <div>
            <h3 className="text-center mb-3 mt-3">{`Claim # ${claimId}`}</h3>
            <div className="form-row mt-3 mb-3">
                {claim && service && user ?
                    <React.Fragment>
                        <div key={claim.id} className="col-md-5 col-lg-4">
                            <div className="table-responsive">
                                <div className="text-center">
                                    <h3>Claim</h3>
                                </div>
                                <table className="table table-bordered table-striped">

                                    <tbody>
                                        <tr>
                                            <th>Description</th>
                                            <td>{claim.claimDescription}</td>
                                        </tr>
                                        <tr>
                                            <th>Attachment</th>
                                            <td>
                                                <SimpleReactLightbox>
                                                    <SRLWrapper>
                                                        <img src={claim.claimAttachment} alt="" className="img-thumbnail" />
                                                    </SRLWrapper>
                                                </SimpleReactLightbox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Date Added</th>
                                            <td>{claim.DateSubmitted.toDate().toString()}</td>
                                        </tr>
                                        <tr>
                                            <th>Claim Status</th>
                                            <td>{claim.claimStatus}</td>
                                        </tr>
                                        <tr>
                                            <th>Actions</th>
                                            <td>
                                                {claim.claimStatus === "Open" ?
                                                    <Link to="#" onClick={e => ResolveClaim(e, claimId, serviceId, userId)} className="text-success ml-2">Resolve</Link> :
                                                    null
                                                }
                                                <Link to="#" onClick={e => deleteClaim(e, claimId)} className="text-danger ml-2">Delete</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div key={service.id} className="col-md-5 col-lg-4">
                            <div className="table-responsive">
                                <div className="text-center">
                                    <h3>Service</h3>
                                </div>
                                <table className="table table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <th colSpan="2" className="text-center">{service.ProductName}</th>
                                        </tr>
                                        <tr>
                                            <th>Service Type</th>
                                            <td>{service.ServiceType}</td>
                                        </tr>
                                        <tr>
                                            <th>Category</th>
                                            <td>{CategoriesToName[service.Category]}</td>
                                        </tr>
                                        <tr>
                                            <th>SubCategory</th>
                                            <td>{SubCategoriesToName[service.SubCategory]}</td>
                                        </tr>
                                        <tr>
                                            <th>Service Attachments</th>
                                            <td>{service.ProductImagesCount}</td>
                                        </tr>
                                        <tr>
                                            <th>Service Description</th>
                                            <td>{service.ProductDescription}</td>
                                        </tr>
                                        <tr>
                                            <th>Pricing</th>
                                            <td>{service.Pricing}</td>
                                        </tr>
                                        <tr>
                                            <th>Contact Number</th>
                                            <td>{service.ContactNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Average Ratings</th>
                                            <td>{service.avgRating.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Ratings</th>
                                            <td>{service.numRating}</td>
                                        </tr>
                                        <tr>
                                            <th>Time</th>
                                            <td>{`${service.StartTime}:00 - ${service.EndTime > 23 ? 0 : service.EndTime}:00`}</td>
                                        </tr>
                                        <tr>
                                            <th>Status</th>
                                            <td>{service.ServiceStatus}</td>
                                        </tr>
                                        <tr>
                                            <th>Date Added</th>
                                            <td>{service.DateSubmitted.toDate().toString()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div key={user.id} className="col-md-5 col-lg-4">
                            <div className="table-responsive">
                                <div className="text-center">
                                    <h3>User</h3>
                                </div>
                                <table className="table table-bordered table-striped">
                                    <tbody>
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </React.Fragment> :
                    <div className="text-center">
                        <ClipLoader size={60} color="blue" />
                    </div>

                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        claims: state.claimsReducer.claims,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setClaims: function (claims) {
            dispatch(SetClaims(claims))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClaimShow);