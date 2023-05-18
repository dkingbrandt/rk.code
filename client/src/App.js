import './css/App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import About from './views/About';
import PriceList from './views/PriceList';
import Contact from './views/Contact';
import Home from './views/Home';

function App() {
    const [authorized, setAuthorized] = useState(false);
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home authorized={authorized} />} />
         <Route path="/om-oss" element={<About authorized={authorized} />} />
         <Route path="/prislista" element={<PriceList authorized={authorized} />} />
         <Route path="/kontakt" element={<Contact authorized={authorized} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
