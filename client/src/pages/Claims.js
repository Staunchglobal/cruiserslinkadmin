import Boat from './../images/Boat.svg';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import { SetClaims } from '../Redux/actions/actions';
import { connect } from 'react-redux';
import { firestore } from '../services/base';
import ClipLoader from 'react-spinners/ClipLoader'
import Swal from 'sweetalert2';

function Claims(props) {
  const limit = 15;
  const { claims, setClaims } = props;
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [activeState, setActiveState] = useState("all")
  const fetchClaims = async function (event) {
    event?.preventDefault();
    const baseRef = firestore.collection('Claims').orderBy('DateSubmitted', 'desc').limit(limit)
    try {
      if (claims.length > 0) {
        setLoadMore(true);
        const snapshot = await baseRef.startAfter(claims[claims.length - 1].DateSubmitted).get()
        setClaims([...snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }), ...claims]);
        setLoadMore(false);
      } else {
        setLoading(true);
        const snapshot = await baseRef.get();
        setClaims(snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }))
        setLoading(false);
      }
    } catch (err) {
      setLoadMore(false); setLoading(false);
    }
  }

  useEffect(() => {
    fetchClaims();
  }, [])

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
        await Swal.fire({ title: 'Success!', text: 'Claim Deleted Successfully', icon: 'success' })
      }
    } catch (err) {
      await Swal.fire({ title: 'Error!', text: err.message, icon: 'error' })
    }
  }
  const data = claims.filter(claim => activeState === "all" ? true : claim.claimStatus === activeState)
  return (
    <div>
      <h3 className="text-center mb-3">Claims</h3>
      {loading && <ClipLoader size={50} color="blue"></ClipLoader>}
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {activeState.toUpperCase()}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {activeState !== "all" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("all"); }} href="#">All</a> : null}
          {activeState !== "Open" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("Open"); }} href="#">Open</a> : null}
          {activeState !== "Closed" ? <a className="dropdown-item" onClick={e => { e.preventDefault(); setActiveState("Closed"); }} href="#">Resolved</a> : null}
        </div>
      </div>
      {data.length === 0 ?
        <div className="form-row">
          <div className="col">
            No Claims Present Yet.
          </div>
        </div> :
        <div className="form-row mt-3 mb-3">
          {data.map(claim => {
            return (
              <div key={claim.id} className="col-md-6 col-lg-4">
                <div className="table-responsive">
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
                        <th>View Complete Claim</th>
                        <td>
                          <Link to={`claimshow/${claim.id}/${claim.serviceId}/${claim.userId}`} className="text-primary">View Complete Claim</Link>
                        </td>
                      </tr>
                      <tr>
                        <th>Actions</th>
                        <td>
                          {claim.claimStatus === "Open" ?
                            <Link to="#" onClick={e => ResolveClaim(e, claim.id, claim.serviceId, claim.userId)} className="text-success ml-2">Resolve</Link> :
                            null
                          }
                          <Link to="#" onClick={e => deleteClaim(e, claim.id)} className="text-danger ml-2">Delete</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })
          }
        </div>
      }
      <div className="text-center mt-2 mb-2">
        {loadMore ?
          <ClipLoader size={50} color="blue"></ClipLoader> :
          <button onClick={fetchClaims} className="btn btn-primary" type="button">
            Load More
          </button>
        }
      </div>
    </div >
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(Claims);