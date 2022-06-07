import React from 'react';

import { About, Footer, Header, Testimonial, Features, Price } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Price />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;