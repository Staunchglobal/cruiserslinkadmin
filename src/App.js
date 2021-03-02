import Header from './pages/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './pages/Services'
import Users from './pages/Users'
import TipsTricks from './pages/TipsTricks'
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
          <Route path="/services" component={Services} />
          <Route path="/tips" component={TipsTricks} />
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
