import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import BrowseCourses from './BrowseCourses';
import Dashboard from './Dashboard';
import Home from './Home';
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";

import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";

import BoardTutor from "./components/board-tutor.component";

function App() {
  const [userType, setType] = useState('')
  const [user, setUser] = useState()
  return (
    <Router>
      <Header />
      <div style={{ marginTop: 130 }}>
        <Switch>
          <Route exact path='/' >
            <Home setType={setType} setUser={setUser} user={user} userType={userType} />
          </Route>
          <Route exact path='/browse'>
            <BrowseCourses setType={setType} setUser={setUser} user={user} userType={userType} />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard setType={setType} setUser={setUser} user={user} userType={userType} />
          </Route>
          <Route exact path='/login'>
            <Login setType={setType} setUser={setUser} user={user} userType={userType} />
          </Route>
          <Route exact path='/register'>
            <Register setType={setType} setUser={setUser} user={user} userType={userType} />
          </Route>

        </Switch>
      </div>
      <Footer />

    </Router>

  );
}

export default App;
