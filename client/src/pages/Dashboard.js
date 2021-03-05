import { Link } from 'react-router-dom';
import { ServiceCategories, TIP_AND_TRICKS_META_DATA } from '../util/constants';
import { useEffect } from 'react';
import { firestore } from '../services/base'
// console.log(TIP_AND_TRICKS_META_DATA)
function Dashboard() {

  useEffect(async () => {
    try {

    } catch (err) {

    }
  }, [])
  const fetchServices = async function () {
    try {
      const servicePromises = []
      ServiceCategories.forEach((service, index) => {
        firestore.collection('Services')
      })
    } catch (err) {

    }
  }
  return (
    <div>
      <h3 className="text-center">Admin Panel</h3>
      <ul className="list-group">
        <Link to="/users" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          Users
            <div>
            <h5 className="d-inline-block mb-0">12</h5>
            <i className="fas fa-chevron-right link-arrow text-primary"></i>
          </div>
        </Link>
        <div className="list-group-item services p-0">
          <Link to="/services" className="service-link text-reset">
            Services
              <div>
              <h5 className="d-inline-block mb-0">12</h5>
              <i className="fas fa-chevron-right link-arrow text-primary"></i>
            </div>
          </Link>
          <div className="border-top p-0">
            <div className="text-center wrap-flex">
              {ServiceCategories.filter((x, i) => x.id !== 4 && x.id !== 10).map((serviceType, index) => {
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
                      <span className="badge badge-primary badge-pill">2</span>
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
              <h5 className="d-inline-block mb-0">12</h5>
              <i className="fas fa-chevron-right link-arrow text-primary"></i>
            </div>
          </Link>
          <div className="border-top p-0">
            <div className="text-center wrap-flex">
              {TIP_AND_TRICKS_META_DATA.map((tipandtrick, i) => {
                const StringParts = tipandtrick.category_name.split(' ');
                let stringToShow = '';
                StringParts.forEach((str, i) => {
                  if (i > 0)
                    stringToShow += `${str.replace('&', '')} ${i == 0 ? '\n' : ' '}`
                })
                return (
                  <a key={tipandtrick.category_name} href={`tips/${tipandtrick.id}`} className="text-reset single-service">
                    <div className="service-img">
                      <img src={tipandtrick.thumb} alt="Anchoring" height="50" />
                      <span className="badge badge-primary badge-pill">2</span>
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
    </div>
  );
}

export default Dashboard;
