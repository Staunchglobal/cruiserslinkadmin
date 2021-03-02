import Boat from './../images/Boat.svg';
import Customs from './../images/Customs.svg';
import Food from './../images/Food.svg';
import Health from './../images/Health.svg';
import Marinas from './../images/Marinas.svg';
import Miscellanous from './../images/Miscellanous.svg';
import Pets from './../images/Pets.svg';
import Telecom from './../images/Telecom.svg';
import {Link} from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h3 className="text-center">Dashboard</h3>
      <ul className="list-group">
          <Link to="/users" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            Users
            <h5 className="text-primary">12</h5>
          </Link>
          <div className="list-group-item services p-0">
            <Link to="/services" className="service-link text-reset">
              Services
              <h5 className="text-primary">12</h5>
            </Link>
            <div className="border-top p-0">
              <div className="text-center wrap-flex">
                <a href="/services#Yacht" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Boat} alt="Boat" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Yacht Services
                  </div>
                </a>
                <a href="/services#Marinas" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Marinas} alt="Marinas" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Anchorages,<br/>Marinas Boatyards
                  </div>
                </a>
                <a href="/services#Food" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Food} alt="Food" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Food & Drinks
                  </div>
                </a>
                <a href="/services#Tips" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Food} alt="Tips" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Tips & Tricks
                  </div>
                </a>
                <a href="/services#Telecom" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Telecom} alt="Telecom" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Telecom
                  </div>
                </a>
                <a href="/services#Health" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Health} alt="Health" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Health
                  </div>
                </a>
                <a href="/services#Pets" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Pets} alt="Pets" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Pets
                  </div>
                </a>
                <a href="/services#Customs" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Customs} alt="Customs" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Government<br/>& Customs
                  </div>
                </a>
                <a href="/services#Miscellanous" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Miscellanous} alt="Miscellanous" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Miscellanous
                  </div>
                </a>
                <a href="/services#Messaging" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Miscellanous} alt="Messaging" width="60" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Messaging
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Link to="/tips" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            Tips & Tricks
            <h5 className="text-primary">12</h5>
          </Link>
          <Link to="/claims" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            Claims
            <h5 className="text-primary">12</h5>
          </Link>
          <Link to="/settings" className="list-group-item list-group-item-action">
            Settings
          </Link>
        </ul>
    </div>
  );
}

export default Dashboard;
