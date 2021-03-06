import { Link } from 'react-router-dom';
import { ServiceCategories, TIP_AND_TRICKS_META_DATA } from '../util/constants';
import { useEffect, useState } from 'react';
import { firestore } from '../services/base'
import ClipLoader from 'react-spinners/ClipLoader'
function Dashboard() {
  const [stats, setStats] = useState(null);
  useEffect(async () => {
    try {
      const listener = firestore.collection('meta').doc('data').onSnapshot(snapshot => {
        setStats(snapshot.data());
        console.log(snapshot.data())
      })
      return listener;
    } catch (err) {

    }
  }, [])
  const { businesses, cruisers, users, services, tipsandtricks, services_by_category, tips_and_tricks_by_category } = stats ? stats : {}
  return (
    stats ?
      <div>
        <h3 className="text-center">Admin Panel</h3>
        <ul className="list-group">
          <Link to="/users" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            Users
            <div>
              <h5 className="d-inline-block mb-0">{users}</h5>
              <i className="fas fa-chevron-right link-arrow text-primary"></i>
            </div>
          </Link>
          <div className="list-group-item services p-0">
            <Link to="/services" className="service-link text-reset">
              Services
              <div>
                <h5 className="d-inline-block mb-0">{services}</h5>
                <i className="fas fa-chevron-right link-arrow text-primary"></i>
              </div>
            </Link>
            <div className="border-top p-0">
              <div className="text-center wrap-flex">
                {ServiceCategories.filter((x, i) => x.id !== 4 && x.id !== 10).map((serviceType, index) => {
                  const { total, active, inactive, pending } = services_by_category[serviceType.id]
                  const StringParts = serviceType.category_name.split(' ');
                  let stringToShow = '';
                  StringParts.forEach((str, i) => {
                    if (i > 0)
                      stringToShow += `${str.replace('&', '')} ${i === 0 ? '\n' : ' '}`
                  })
                  // console.log(stringToShow)
                  return (
                    <a key={serviceType.category_name} href={`/services/${serviceType.id}`} className="text-reset single-service">
                      <div className="service-img">
                        <img src={serviceType.thumb} alt="Boat" height="50" />
                        {pending > 0 ?
                          <span className="badge badge-primary badge-pill">{pending}</span> : null
                        }
                      </div>
                      <div className="mt-1">
                        {StringParts[0]} <br /> {stringToShow}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="list-group-item services p-0">
            <Link to="/tips" className="service-link text-reset">
              Tips & Tricks
              <div>
                <h5 className="d-inline-block mb-0">{tipsandtricks}</h5>
                <i className="fas fa-chevron-right link-arrow text-primary"></i>
              </div>
            </Link>
            <div className="border-top p-0">
              <div className="text-center wrap-flex">
                {TIP_AND_TRICKS_META_DATA.map((tipandtrick, i) => {
                  const StringParts = tipandtrick.category_name.split(' ');
                  const { total, active, inactive, pending } = tips_and_tricks_by_category[tipandtrick.id]
                  let stringToShow = '';
                  StringParts.forEach((str, i) => {
                    if (i > 0)
                      stringToShow += `${str.replace('&', '')} ${i == 0 ? '\n' : ' '}`
                  })
                  return (
                    <a key={tipandtrick.category_name} href={`tips/${tipandtrick.id}`} className="text-reset single-service">
                      <div className="service-img">
                        <img src={tipandtrick.thumb} alt="Anchoring" height="50" />
                        {pending > 0 ?
                          <span className="badge badge-primary badge-pill">{pending}</span> : null
                        }
                      </div>
                      <div className="mt-1">
                        {/* {StringParts[0]} <br /> {stringToShow} */}
                        {tipandtrick.category_name}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <Link to="/claims" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            Claims
            <div>
              <h5 className="d-inline-block mb-0">12</h5>
              <i className="fas fa-chevron-right link-arrow text-primary"></i>
            </div>
          </Link>
          <Link to="/settings" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            Settings
            <div>
              <i className="fas fa-chevron-right link-arrow text-primary"></i>
            </div>
          </Link>
        </ul>
      </div> :
      <div>
        <h3 className="text-center">Admin Panel</h3>
        <div className="text-center">
          <ClipLoader color="blue" size={50} />
        </div>
      </div>
  );
}

export default Dashboard;
