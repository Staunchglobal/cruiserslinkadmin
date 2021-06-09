/* eslint-disable */
import Header from './pages/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services'
import ServiceShow from './pages/ServiceShow'
import EditService from './pages/EditService'
import Users from './pages/Users'
import EditUser from './pages/EditUser'
import TipsTricks from './pages/TipsTricks'
import TipTrickShow from './pages/TipTrickShow'
import EditTipsTricks from './pages/EditTipsTricks'
import Claims from './pages/Claims'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword';
import Search from './pages/Search';
import Ratings from './pages/Ratings';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import ClaimShow from './pages/ClaimFull'
import '@fortawesome/fontawesome-free/css/all.css';
import { AuthProvider, useAuth } from './services/Auth';
import PrivateRoute from './util/PrivateRoute';
import OpenRoute from './util/OpenRoute';
import mapboxgl from 'mapbox-gl'
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
// console.log(process.env)
function MainComponent() {
  const { currentUser } = useAuth();
  // console.log(currentUser) 
  return (
    <Router>
      {currentUser ?
        <Header /> : null
      }
      <main role="main" className="container-xl py-4 px-2">
        <Switch>
          <PrivateRoute path="/" exact component={Dashboard} />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/edit_user/:id" component={EditUser} />
          <PrivateRoute path="/services/:id" component={Services} />
          <PrivateRoute path="/serviceshow/:category/:serviceId" component={ServiceShow} />
          <PrivateRoute path="/edit_service/:category/:id" component={EditService} />
          <PrivateRoute path="/tips/:id" component={TipsTricks} />
          <PrivateRoute path="/tiptrickshow/:category/:tipandtrickid" component={TipTrickShow} />
          <PrivateRoute path="/edit_tips/:category/:id" component={EditTipsTricks} />
          <PrivateRoute path="/claims" component={Claims} />
          <PrivateRoute path="/ratings/:type/:id" component={Ratings} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/claimshow/:claimId/:serviceId/:userId" component={ClaimShow} />
          <OpenRoute path="/login" component={Login} />
          <OpenRoute path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/search" component={Search} />
        </Switch>
      </main>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <MainComponent />
    </AuthProvider>
  );
}

export default App;
