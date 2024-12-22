import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import GoldenTraingle from './pages/Event/GoldenTraingle';
import Participents from "./pages/Participents"
// import TranslateWidget from './components/TranslateWidget';
// import Payment from './pages/Payment';
import GrandRajasthan from './pages/Event/GrandRajasthan';
import CheckoutPage from './components/CheckoutPage';
import Varanasi from './pages/Event/Varanasi';
import Gwalior from './pages/Event/Gwalior';
import Jeep from './pages/Complementry/Jeep'
import Paint from './pages/Complementry/Paint'
import Yoga from './pages/Complementry/Yoga'

const App = () => { 
  return (
    <Router>
     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/participents" element={<Participents />} />
            <Route path="/golden-traingle" element={<GoldenTraingle />} />
            <Route path="/grand-rajasthan" element={<GrandRajasthan />} />
            <Route path="/varanasi" element={<Varanasi />} />
            <Route path="/gwalior" element={<Gwalior />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/jeep" element={<Jeep />} />
            <Route path="/paint" element={<Paint />} />
            <Route path="/yoga" element={<Yoga />} />
            {/* <Route path="/dashboard/:firstName" element={<Dashboard />} /> */}

          </Routes>
        
    </Router>
  );
};

export default App;
