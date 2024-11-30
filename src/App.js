import React from 'react';
import './App.css';
import Header from './assets/components/header/Header';
import Home from './assets/components/home/Home';
import About from './assets/components/about/About';
import Skills from './assets/components/skills/Skills';
//import Qualification from './assets/components/Qualification/Qualification';
import Contact from './assets/components/contact/Contact'
import Footer from './assets/components/footer/Footer';
import Scrollup from './assets/components/scrollup/Scrollup';
import Project from './assets/components/Projects/Project';
//<Qualification/>
function App() {
  return (
    <>
    <Header/>
    <main className='main'>
       <Home/>
       <About/>
       <Skills/>
       
       <Project/>
       <Contact/>
    </main>
    <Footer/>
      <Scrollup/>
    </>
  );
}

export default App;
