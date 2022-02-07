import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import Exercices from './components/Exercices';
import CaseStudies from './components/CaseStudies';
import ConcretCases from './components/ConcretCases';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/works' element={ <Works /> } />
      <Route path='/works/exercices' element={ <Exercices /> } />
      <Route path='/works/case-studies' element={ <CaseStudies /> } />
      <Route path='/works/concret-cases' element={ <ConcretCases /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
    </Routes>
  </Router>
)

export default App;