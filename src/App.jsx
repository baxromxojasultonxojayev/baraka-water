import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home/Index.jsx';
import Partners from './pages/Partners/Index.jsx';
import About from './pages/About/Index.jsx';
import Contact from './pages/Contact/Index.jsx';

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Home />
        <Partners />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
