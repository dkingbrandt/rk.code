import './css/App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUS from './components/AboutUs';
import Pricelist from './components/Pricelist';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
    const [authorized, setAuthorized] = useState(false);
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path="/" element={<Home authorized={authorized} />} />
         <Route path="/om-oss" element={<AboutUS authorized={authorized} />} />
         <Route path="/prislista" element={<Pricelist authorized={authorized} />} />
         <Route path="/kontakt" element={<Contact authorized={authorized} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
