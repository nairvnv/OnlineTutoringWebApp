import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

  return (
    <Router>
      <Header />
      <div style={{marginTop: 130}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<BrowseCourses />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          
        </Routes>
      </div>
      <Footer />

    </Router>

  );
}

export default App;
