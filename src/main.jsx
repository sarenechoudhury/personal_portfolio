import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import About from './About.jsx';
import Writing from './Writing.jsx';
import Code from './Code.jsx';
import Film from './Film.jsx';
import './index.css';
import Poetry from './writing/Poetry';
import Analytical from './writing/Analytical';
import Personal from './writing/Personal';
import Trutescu from './writing/Trutescu';
import Commandments from './writing/Commandments';
import Multiverse from './writing/Multiverse';
import Catcher from './writing/Catcher';
import Chinatown from './writing/Chinatown';
import Whipping from './writing/Whipping';
import Vertigo from './writing/Vertigo';
import Leviathan from './writing/Leviathan';
import Rousseau from './writing/Rousseau';
import Kant from './writing/Kant';
import Deception from './films/Deception';
import WhatPoetry from './films/WhatPoetry';
import Python from './coding/Python';
import C from './coding/C';
import ML from './coding/ML';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/code" element={<Code />} />
        <Route path="/film" element={<Film />} />
        <Route path="/writing/poetry" element={<Poetry />} />
        <Route path="/writing/analytical" element={<Analytical />} />
        <Route path="/writing/personal" element={<Personal />} />
        <Route path="/writing/trutescu" element={<Trutescu />} />
        <Route path="/writing/commandments" element={<Commandments />} />
        <Route path="/writing/multiverse" element={<Multiverse />} />
        <Route path="/writing/catcher" element={<Catcher />} />
        <Route path="/writing/whipping" element={<Whipping />} />
        <Route path="/writing/chinatown" element={<Chinatown />} />
        <Route path="/writing/vertigo" element={<Vertigo />} />
        <Route path="/writing/leviathan" element={<Leviathan />} />
        <Route path="/writing/kant" element={<Kant />} />
        <Route path="/writing/rousseau" element={<Rousseau />} />
        <Route path="/films/deception" element={<Deception />} />
        <Route path="/films/whatpoetry" element={<WhatPoetry />} />
        <Route path="/coding/ml" element={<ML />} />
        <Route path="/coding/c" element={<C />} />
        <Route path="/coding/python" element={<Python />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
