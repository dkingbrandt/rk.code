import './css/App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createContext } from 'react';
import Footer from './components/Footer';
import About from './views/About';
import PriceList from './views/PriceList';
import Contact from './views/Contact';
import Home from './views/Home';
import Admin from './views/admin';

export const ThemeContext = createContext(null);

function App() {
    const [authorized, setAuthorized] = useState(false);
    const [theme, setTheme] = useState("dark");

    const ToggleTheme = () => {
      setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }
  return (
  /*   <ThemeContext.Provider value= {{theme, ToggleTheme}}> */
    <div className="App" id={theme}>
      <Routes>
         <Route path="/" element={<Home authorized={authorized} setAuthorized={setAuthorized}  theme={theme} ToggleTheme={ToggleTheme} />} />
         <Route path="/om-oss" element={<About authorized={authorized}setAuthorized={setAuthorized}  theme={theme} ToggleTheme={ToggleTheme} />} />
         <Route path="/prislista" element={<PriceList authorized={authorized} setAuthorized={setAuthorized}  theme={theme} ToggleTheme={ToggleTheme} />} />
         <Route path="/kontakt" element={<Contact authorized={authorized} setAuthorized={setAuthorized}  theme={theme} ToggleTheme={ToggleTheme}/>} />
         <Route path="/admin" element={<Admin authorized={authorized} setAuthorized={setAuthorized} theme={theme} ToggleTheme={ToggleTheme}/>} />
      </Routes>
    </div>
 /*    </ThemeContext.Provider> */
  );
}

export default App;
