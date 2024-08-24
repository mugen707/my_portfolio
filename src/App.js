import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
