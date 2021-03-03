import Header from './pages/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './pages/Services'
import EditService from './pages/EditService'
import Users from './pages/Users'
import EditUser from './pages/EditUser'
import TipsTricks from './pages/TipsTricks'
import EditTipsTricks from './pages/EditTipsTricks'
import Claims from './pages/Claims'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <main role="main" className="container-xl py-4 px-2">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/edit_user" component={EditUser} />
          <Route path="/services" component={Services} />
          <Route path="/edit_service" component={EditService} />
          <Route path="/tips" component={TipsTricks} />
          <Route path="/edit_tips" component={EditTipsTricks} />
          <Route path="/claims" component={Claims} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/search" component={Search} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
