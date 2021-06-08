import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { SetTipAndTricks } from "../Redux/actions/actions";
import ClipLoader from 'react-spinners/ClipLoader'
import { TipsAndTricksCategories } from "../util/constants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { firestore } from "../services/base";
import Swal from 'sweetalert2'
function TipTrickShow(props) {
  const [user, setUser] = useState(null)
  const { category, tipandtrickid } = useParams()
  const intCat = JSON.parse(category)
  const { tipandtrickData, tipsandtricks, setTipsAndTricks } = props
  const history = useHistory()
  // console.log(tipandtrickData)
  useEffect(() => {
    fetchUser();
  }, [])
  const fetchUser = function () {
    firestore.collection('Users').doc(tipandtrickData.postedBy).get().then(snap => {
      setUser({ ...snap.data(), id: snap.id })
    }).catch(err => {
      Swal.fire({ title: 'Error', text: err.message }).then(x => { })
    })
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
          setTipsAndTricks(intCat, tipsandtricks.data.filter(x => x.id !== id));
          history.goBack()
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
      setTipsAndTricks(intCat, tipsandtricks.data.map(x => x.id === id ? { ...x, status: value ? "active" : "inactive" } : x));
      Swal.fire({ title: 'Success!', text: 'Tip And Trick Changed Successfully', icon: 'success' }).then(_ => { })
    }).catch(err => {
      Swal.fire({ title: 'Error!', text: err.message, icon: 'error' }).then(_ => { })
    })
  }
  return (
    !tipandtrickData ?
      <div className="text-center">
        <ClipLoader color="blue" size={60} />
      </div> :
      <div>
        <h3 className="text-center mt-3">{tipandtrickData.subject}</h3>
        <div className="id-div">
          <div className="form-row mb-3">
            <div className="col">
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <tbody>
                    <tr>
                      <th colspan="2" className="text-center">Tip & Trick Details</th>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>{tipandtrickData.description}</td>
                    </tr>
                    <tr>
                      <th>Category</th>
                      <td>{TipsAndTricksCategories[tipandtrickData.category]}</td>
                    </tr>
                    <tr>
                      <th>SubCategory</th>
                      <td>{tipandtrickData[tipandtrickData.subcategory]}</td>
                    </tr>
                    <tr>
                      <th>Anonymous</th>
                      <td>{JSON.stringify(tipandtrickData.anonymous)}</td>
                    </tr>
                    <tr>
                      <th>Posted By Name</th>
                      <td>{tipandtrickData.postedByName}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{tipandtrickData.status}</td>
                    </tr>
                    <tr>
                      <th>Average Ratings</th>
                      <td>{tipandtrickData.avgRating}</td>
                    </tr>
                    <tr>
                      <th>Total Ratings</th>
                      <td>{tipandtrickData.numRating}</td>
                    </tr>
                    <tr>
                      <th>Date Added</th>
                      <td>{tipandtrickData.timePosted.toDate().toString()}</td>
                    </tr>
                    <tr>
                      <th>Ratings</th>
                      <td><Link to={`/ratings/tipandtrick/${tipandtrickData.id}`}>View Ratings</Link></td>
                    </tr>
                    <tr>
                      <th>Actions</th>
                      <td>
                        <Link className="text-primary mr-3" to={`/edit_tips/${tipandtrickData.category}/${tipandtrickData.id}`}>Edit</Link>
                        {tipandtrickData.status === "pending" ?
                          <Link onClick={e => { e.preventDefault(); EnableDisableTipAndTrick(tipandtrickData.id, true); }} className="text-primary mr-3" to="#">Approve</Link> :
                          tipandtrickData.status === "inactive" ?
                            <Link onClick={e => { e.preventDefault(); EnableDisableTipAndTrick(tipandtrickData.id, true); }} className="text-success  mr-3" to="#">Activate</Link> :
                            <Link onClick={e => { e.preventDefault(); EnableDisableTipAndTrick(tipandtrickData.id, false); }} className="text-danger mr-3" to='#'>Disable</Link>
                        }
                        <Link onClick={e => handleDeleteTipAndTrick(e, tipandtrickData.id)} to="#" className="text-danger mr-3">Delete</Link>
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
                      {user?.cruiserData?.BoatName ?
                        <tr>
                          <th>Boat Name</th>
                          <td>{user?.cruiserData?.BoatName}</td>
                        </tr> : null
                      }
                      {/* <tr>
                        <th>Actions</th>
                        <td>
                          <a className="text-primary mr-3" href="#">Edit</a><a className="text-danger mr-3" href="#">Disable</a>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div> : null
          }
        </div>
      </div>

  );
}
const mapStateToProps = (state, ownProps) => {
  const { category, tipandtrickid } = ownProps.match.params
  const intcat = JSON.parse(category)
  return {
    tipsandtricks: state.tipsandtricksReducer.tipsandtricks[intcat],
    tipandtrickData: state.tipsandtricksReducer.tipsandtricks[intcat].data.find(t => t.id == tipandtrickid)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setTipsAndTricks: function (category, tipsandtricks) {
      dispatch(SetTipAndTricks(category, tipsandtricks))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TipTrickShow);
