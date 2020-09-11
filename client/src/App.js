import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/layout/AppNavbar';
import Register from './components/Register';
import Filter from './components/Filter';
import Results from './components/Results';
import Home from './components/layout/Home';
import Contact from './components/layout/Contact';
import Login from './components/Login';
import { loadUser } from './redux/actions/authActions';
import './App.css';
import About from './components/layout/About';

function App() {

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {!isAuthenticated && <Route path="/register" component={Register} />}
          <Route path="/filter" component={Filter} />
          <Route path="/contact" component={Contact} />
          <Route path="/results" component={Results} />
          <Route path="/about" component={About} />
          {/* {!isAuthenticated && <Route path="/login" component={Login} />} */}
          <Route path="*"><Redirect to="/filter" /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
