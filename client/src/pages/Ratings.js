import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader'
import Swal from 'sweetalert2';
import { firestore } from '../services/base';
function Ratings() {
  const { type, id } = useParams();
  const limit = 15;
  const [ratings, setRatings] = useState([])
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    fetchRatings();
  }, [])
  const fetchServiceRatings = async function () {
    try {
      const baseRef = firestore.collection('ServiceDetails').doc(id).collection('ratings').orderBy('__name__', 'asc').limit(15)
      if (ratings.length > 0) {
        setLoadMore(true);
        const snapshot = await baseRef.startAfter(ratings[ratings.length - 1].id).get();
        setRatings([...snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }), ...ratings]); setLoadMore(false);
      } else {
        setLoading(true);
        const snapshot = await baseRef.get();
        setRatings(snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } })); setLoading(false);
      }
    } catch (err) {

    }
  }

  const fetchTipAndTrickRating = async function () {
    try {
      const baseRef = firestore.collection('TipsAndTricksReviews').doc(id).collection('ratings').orderBy('__name__', 'asc').limit(15)
      if (ratings.length > 0) {
        setLoadMore(true);
        const snapshot = await baseRef.startAfter(ratings[ratings.length - 1].id).get();
        setRatings([...snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }), ...ratings]); setLoadMore(false);
      } else {
        setLoading(true);
        const snapshot = await baseRef.get();
        setRatings(snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } })); setLoading(false);
      }
    } catch (err) {

    }
  }

  const fetchRatings = function (event) {
    event?.preventDefault();
    if (type === "service") {
      fetchServiceRatings();
    } else if (type === "tipandtrick") {
      fetchTipAndTrickRating();
    }
  }

  const handleDeleteRating = async function (event, docId) {
    try {
      event.preventDefault();
      // console.log("here")
      if (type === "service") {
        const response = await Swal.fire({ title: 'Are you sure?', text: 'This Feedback will be lost completely.', icon: 'question', cancelButtonText: 'No', confirmButtonText: 'Yes', showCancelButton: true })
        if (response.isConfirmed) {
          await firestore.collection('ServiceDetails').doc(id).collection('ratings').doc(docId).delete();
          await Swal.fire({ title: 'Success!', text: 'Feedback Deleted Successfully!', icon: 'success' })
        }
      } else if (type === "tipandtrick") {
        const _response = await Swal.fire({ title: 'Are you sure?', text: 'This Feedback will be lost completely.', icon: 'question', cancelButtonText: 'No', confirmButtonText: 'Yes', showCancelButton: true })
        if (_response.isConfirmed) {
          await firestore.collection('TipsAndTrickReviews').doc(id).collection('ratings').doc(docId).delete();
          await Swal.fire({ title: 'Success!', text: 'Feedback Deleted Successfully!', icon: 'success' })
        }
      }
    } catch (err) {
      await Swal.fire({ title: 'Error!', text: err.message, icon: 'error' })
    }
  }
  // console.log(ratings)
  return (
    <div>
      <h3 className="text-center mb-3">Ratings</h3>
      {loading ?
        <div className="text-center">
          <ClipLoader size={50} color="blue" />
        </div> :
        <div className="form-row">
          <div className="form-row mt-1">
            {ratings.map((rating) => {
              return (
                <div key={rating.id} className="col-md-6 col-lg-6">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <th>PostedBy</th>
                          <td>{rating.postedByName}</td>
                        </tr>
                        <tr>
                          <th>Rating</th>
                          <td>{rating.rating}</td>
                        </tr>
                        <tr>
                          <th>Rating Comment</th>
                          <td>{type === "service" ? rating.ratingComment : rating.reviewBody}</td>
                        </tr>
                        <tr>
                          <th>Time Updated/Added</th>
                          <td>{type === "service" ? rating.timeUpdated.toDate().toString() : rating.timePosted.toDate().toString()}</td>
                        </tr>
                        <tr>
                          <th>Actions</th>
                          <td>
                            <Link onClick={e => handleDeleteRating(e, rating.id)} to="#" className="text-danger ml-2">Delete</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      }
      <div className="text-center">
        {loadMore ?
          <ClipLoader size={50} color="blue" /> :
          <button onClick={fetchRatings} className="btn btn-primary" type="button">
            Load More
              </button>
        }
      </div>
    </div >
  );
}

export default Ratings;