import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import BrowseCourses from './BrowseCourses';
import Dashboard from './Dashboard';
import Home from './Home';
function App() {

  return (
    <Router>
      <Header />
      <div style={{marginTop: 130}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<BrowseCourses />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />

    </Router>

  );
}

export default App;
