import Boat from './../images/Boat.svg';
import Customs from './../images/Customs.svg';
import Food from './../images/Food.svg';
import Health from './../images/Health.svg';
import Marinas from './../images/Marinas.svg';
import Miscellanous from './../images/Miscellanous.svg';
import Pets from './../images/Pets.svg';
import Telecom from './../images/Telecom.svg';
import Anchoring from './../images/Anchoring.png';
import Antifouling from './../images/Antifouling.png';
import BadWeather from './../images/BadWeather.png';
import Bags from './../images/Bags.png';
import Canvas from './../images/canvas_2.png';
import Charts from './../images/Charts.png';
import Clothing from './../images/Clothing.png';
import Communication from './../images/Communication.png';
import Compass from './../images/compass.png';
import Deck from './../images/Deck.png';
import Dinghies from './../images/Dinghies.png';
import Pier from './../images/pier.png';
import AC_power from './../images/AC_power.png';
import DC_power from './../images/DC_power.png';
import Engine from './../images/engine.png';
import Fiberglass from './../images/Fiberglass.png';
import Fishing from './../images/Fishing.png';
import Flipflops from './../images/flip-flops.png';
import Kitchen from './../images/kitchen.png';
import Head from './../images/head.png';
import Healthcare from './../images/Health-care.png';
import Heating from './../images/Heating.png';
import Hose from './../images/Hose.png';
import Interior from './../images/Interior.png';
import Laundry from './../images/laundry.png';
import Light_bulb from './../images/light_bulb.png';
import Maintenance from './../images/Maintenance.png';
import Navigation from './../images/Navigation.png';
import Outboards from './../images/Outboards.png';
import PetsTips from './../images/pets.png';
import Plumbing from './../images/Plumbing.png';
import Shopping from './../images/shopping.png';
import Freezer_fridge from './../images/freezer_fridge.png';
import Rigging_running from './../images/rigging_running.png';
import Rigging_standing from './../images/rigging_standing.png';
import Safety from './../images/Safety.png';
import Scubadive from './../images/scuba-dive.png';
import Snorkel_goggles from './../images/snorkel_goggles.png';
import Tool from './../images/tool.png';
import Topside from './../images/topside.png';
import Ventilation from './../images/Ventilation.png';
import watermaker from './../images/watermaker_2.png';
import Watersports from './../images/Watersports.png';
import Winterize from './../images/winterize_2.png';
import Zinc from './../images/Zinc.png';

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
                    <img src={Boat} alt="Boat" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Yacht Services
                  </div>
                </a>
                <a href="/services#Marinas" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Marinas} alt="Marinas" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Anchorages,<br/>Marinas Boatyards
                  </div>
                </a>
                <a href="/services#Food" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Food} alt="Food" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Food &<br/>Drinks
                  </div>
                </a>
                <a href="/services#Tips" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Food} alt="Tips" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Tips &<br/>Tricks
                  </div>
                </a>
                <a href="/services#Telecom" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Telecom} alt="Telecom" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Telecom
                  </div>
                </a>
                <a href="/services#Health" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Health} alt="Health" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Health
                  </div>
                </a>
                <a href="/services#Pets" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Pets} alt="Pets" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Pets
                  </div>
                </a>
                <a href="/services#Customs" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Customs} alt="Customs" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Government<br/>& Customs
                  </div>
                </a>
                <a href="/services#Miscellanous" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Miscellanous} alt="Miscellanous" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Miscellanous
                  </div>
                </a>
                <a href="/services#Messaging" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Miscellanous} alt="Messaging" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Messaging
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="list-group-item services p-0">
            <Link to="/tips" className="service-link text-reset">
              Tips & Tricks
              <h5 className="text-primary">12</h5>
            </Link>
            <div className="border-top p-0">
              <div className="text-center wrap-flex">
                <a href="/tips#Anchoring" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Anchoring} alt="Anchoring" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Anchoring
                  </div>
                </a>
                <a href="/tips#Antifouling" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Antifouling} alt="Antifouling" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Antifouling
                  </div>
                </a>
                <a href="/tips#BadWeather" className="text-reset single-service">
                  <div className="service-img">
                    <img src={BadWeather} alt="BadWeather" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Bad Weather<br/>& conditions
                  </div>
                </a>
                <a href="/tips#Bags" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Bags} alt="Bags" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Bags
                  </div>
                </a>
                <a href="/tips#Canvas" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Canvas} alt="Canvas" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Canvas
                  </div>
                </a>
                <a href="/tips#Charts" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Charts} alt="Charts" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Charts &<br/>Guides
                  </div>
                </a>
                <a href="/tips#Clothing" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Clothing} alt="Clothing" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Clothing
                  </div>
                </a>
                <a href="/tips#Communication" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Communication} alt="Communication" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Communication
                  </div>
                </a>
                <a href="/tips#Compass" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Compass} alt="Compass" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Compass
                  </div>
                </a>
                <a href="/tips#Deck" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Deck} alt="Deck" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Deck &<br/>Cockpit
                  </div>
                </a>
                <a href="/tips#Dinghies" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Dinghies} alt="Dinghies" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Dinghies
                  </div>
                </a>
                <a href="/tips#Pier" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Pier} alt="Pier" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Docking
                  </div>
                </a>
                <a href="/tips#AC_power" className="text-reset single-service">
                  <div className="service-img">
                    <img src={AC_power} alt="AC_power" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Electric-AC
                  </div>
                </a>
                <a href="/tips#DC_power" className="text-reset single-service">
                  <div className="service-img">
                    <img src={DC_power} alt="DC_power" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Electric-DC
                  </div>
                </a>
                <a href="/tips#Engine" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Engine} alt="Engine" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Engine &<br/>Generators
                  </div>
                </a>
                <a href="/tips#Fiberglass" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Fiberglass} alt="Fiberglass" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Fiberglass<br/>& Epoxy 
                  </div>
                </a>
                <a href="/tips#Fishing" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Fishing} alt="Fishing" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Fishing
                  </div>
                </a>
                <a href="/tips#Flipflops" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Flipflops} alt="Flipflops" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Footwear
                  </div>
                </a>
                <a href="/tips#Kitchen" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Kitchen} alt="Kitchen" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Galley
                  </div>
                </a>
                <a href="/tips#Head" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Head} alt="Head" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Head / Toilet
                  </div>
                </a>
                <a href="/tips#Healthcare" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Healthcare} alt="Healthcare" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Health Care
                  </div>
                </a>
                <a href="/tips#Heating" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Heating} alt="Heating" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Heating &<br/>Air-Conditioning
                  </div>
                </a>
                <a href="/tips#Hose" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Hose} alt="Hose" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Hose
                  </div>
                </a>
                <a href="/tips#Interior" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Interior} alt="Interior" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Interior
                  </div>
                </a>
                <a href="/tips#Laundry" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Laundry} alt="Laundry" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Laundry
                  </div>
                </a>
                <a href="/tips#Light_bulb" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Light_bulb} alt="Light_bulb" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Lights
                  </div>
                </a>
                <a href="/tips#Maintenance" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Maintenance} alt="Maintenance" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Maintenance
                  </div>
                </a>
                <a href="/tips#Navigation" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Navigation} alt="Navigation" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Navigation
                  </div>
                </a>
                <a href="/tips#Outboards" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Outboards} alt="Outboards" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Outboards
                  </div>
                </a>
                <a href="/tips#PetsTips" className="text-reset single-service">
                  <div className="service-img">
                    <img src={PetsTips} alt="PetsTips" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Pets Aboard
                  </div>
                </a>
                <a href="/tips#Plumbing" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Plumbing} alt="Plumbing" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Plumbing
                  </div>
                </a>
                <a href="/tips#Shopping" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Shopping} alt="Shopping" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Provisioning
                  </div>
                </a>
                <a href="/tips#Freezer_fridge" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Freezer_fridge} alt="Freezer_fridge" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Refrigeration
                  </div>
                </a>
                <a href="/tips#Rigging_running" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Rigging_running} alt="Rigging_running" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Rigging<br/>Running
                  </div>
                </a>
                <a href="/tips#Rigging_standing" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Rigging_standing} alt="Rigging_standing" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Rigging<br/>Standing
                  </div>
                </a>
                <a href="/tips#Safety" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Safety} alt="Safety" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Safety
                  </div>
                </a>
                <a href="/tips#Scubadive" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Scubadive} alt="Scubadive" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Scuba
                  </div>
                </a>
                <a href="/tips#Snorkel_goggles" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Snorkel_goggles} alt="Snorkel_goggles" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Snorkeling
                  </div>
                </a>
                <a href="/tips#Tool" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Tool} alt="Tool" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Tools
                  </div>
                </a>
                <a href="/tips#Topside" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Topside} alt="Topside" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Topside
                  </div>
                </a>
                <a href="/tips#Ventilation" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Ventilation} alt="Ventilation" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Ventilation
                  </div>
                </a>
                <a href="/tips#watermaker" className="text-reset single-service">
                  <div className="service-img">
                    <img src={watermaker} alt="watermaker" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Water<br/>Maker
                  </div>
                </a>
                <a href="/tips#Watersports" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Watersports} alt="Watersports" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Water<br/>Sports
                  </div>
                </a>
                <a href="/tips#Winterize" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Winterize} alt="Winterize" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Winterizing
                  </div>
                </a>
                <a href="/tips#Zinc" className="text-reset single-service">
                  <div className="service-img">
                    <img src={Zinc} alt="Zinc" height="60" />
                    <span className="badge badge-primary badge-pill">2</span>
                  </div>
                  <div className="mt-1">
                    Zinc &<br/>Anodes
                  </div>
                </a>
              </div>
            </div>
          </div>
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
