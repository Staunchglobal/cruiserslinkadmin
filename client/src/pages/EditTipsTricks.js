import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import { SetTipAndTricks } from "../Redux/actions/actions";
import { useAuth } from "../services/Auth";
import { firestore } from "../services/base";
import { TIP_AND_TRICKS_META_DATA } from "../util/constants";
import { SendPushNotifications } from "../util/SendPushNotifications";

function EditTipsTricks(props) {
  const { currentUser } = useAuth();
  const { id, category } = useParams();
  const intCat = JSON.parse(category)
  const { tipsandtricks, setTipsAndTricks } = props
  const history = useHistory();
  const [tipandtrickData, setTipAndTrickData] = useState({
    subject: null,
    description: null,
    category: null,
    subcategory: null,
    status: null,
    anonymous: null,
  })
  const { subject, description, subcategory, anonymous, status } = tipandtrickData
  const category_data = TIP_AND_TRICKS_META_DATA.filter(x => x.id === tipandtrickData.category)
  const sub_categories = category_data.length > 0 ? category_data[0].sub_categories : []

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    tipsandtricks.data.forEach(tipandtrick => {
      if (tipandtrick.id === id) { setTipAndTrickData(tipandtrick); setLoading(false); }
    })
    setLoading(false);
  }, [id])

  const validateTipAndTrick = function () {
    return new Promise((resolve, reject) => {
      if (!subject) {
        reject({ message: 'Tip And Trick Subject is not valid' })
      } else if (!description) {
        reject({ message: 'Tip And Trick Description is not valid' })
      } else if (!tipandtrickData.category) {
        reject({ message: 'Tip And Trick Category is not valid' })
      } else if (!status) {
        reject({ message: 'Tip And Trick Status is not valid' })
      } else {
        resolve(true);
      }
    })
  }

  const handleUpdateTipAndTrick = async function (e) {
    e.preventDefault();
    try {
      await validateTipAndTrick();
      await firestore.collection('TipsAndTricks').doc(id).update(tipandtrickData);
      setTipsAndTricks(intCat, tipsandtricks.data.map(x => x.id == id ? { ...x, ...tipandtrickData } : x));
      await SendPushNotifications(currentUser.uid, tipandtrickData.postedBy, 'Tip And Trick Listing Updated by Admin', 'Your Tip And Trick has been updated by the CruisersLINK Admin');
      const response = await Swal.fire({ title: 'Success', text: 'Tip And Trick Updated Successfully', icon: 'success', confirmButtonText: 'Ok' })
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
            <h4 className="my-3">Edit Tip & Trick</h4>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input value={subject} onChange={e => { e.preventDefault(); setTipAndTrickData({ ...tipandtrickData, subject: e.target.value }) }} type="text" className="form-control" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea rows={2} value={description} onChange={e => { e.preventDefault(); setTipAndTrickData({ ...tipandtrickData, description: e.target.value }) }} type="text" className="form-control" id="description" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" value={tipandtrickData.category}
                onChange={e => {
                  e.preventDefault();
                  const sub_categories_ = TIP_AND_TRICKS_META_DATA.filter(x => x.id == JSON.parse(e.target.value))
                  const sub_sub_categories = sub_categories_.length > 0 ? sub_categories_[0].sub_categories : []
                  setTipAndTrickData({ ...tipandtrickData, category: JSON.parse(e.target.value), subcategory: sub_categories_.length > 0 ? sub_sub_categories[0].id : null })
                }}
                className="form-control custom-select" required>
                {TIP_AND_TRICKS_META_DATA.map(t => {
                  return (
                    <option key={t.category_name} value={t.id}>{t.category_name}</option>
                  )
                })
                }
              </select>
            </div>
            {sub_categories.length > 0 ?
              <div className="form-group">
                <label htmlFor="subcategory">SubCategory</label>
                <select value={subcategory}
                  onChange={e => {
                    e.preventDefault(); setTipAndTrickData({ ...tipandtrickData, subcategory: JSON.parse(e.target.value) })
                  }}
                  id="subcategory" className="form-control custom-select" required>
                  {sub_categories.map(sc => {
                    return (
                      <option key={sc.sub_category_key} value={sc.id}>{sc.sub_category_name}</option>
                    )
                  })}
                </select>
              </div> : null
            }
            <div className="form-group">
              <label htmlFor="type">Status</label>
              <select
                value={status}
                onChange={e => {
                  e.preventDefault(); setTipAndTrickData({ ...tipandtrickData, status: e.target.value })
                }} id="type" className="form-control custom-select" required>
                {['active', 'inactive'].map(y => {
                  return (
                    <option key={y} value={y} >{y}</option>
                  )
                })}
              </select>
            </div>
            <input onClick={handleUpdateTipAndTrick} onSubmit={handleUpdateTipAndTrick} type="submit" className="btn btn-primary" value="Update" />
          </form>
        </div>
      </div>
    </div >
  );
}

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match
  return {
    tipsandtricks: state.tipsandtricksReducer.tipsandtricks[JSON.parse(params.category)],
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setTipsAndTricks: function (category, tipsandtricks) {
      dispatch(SetTipAndTricks(category, tipsandtricks))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTipsTricks);