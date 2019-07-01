import React from 'react';
import './App.scss';

import Header from './components/header';
import Resty from './components/resty';
import Output from './components/output';
import History from './components/history';
import Footer from './components/footer';


function App() {
  return (
    <>
    <Header />
    <div className="main">
      <History />
      <Resty />
      <Output />
    </div>
    <Footer />
    </>
  );
}

export default App;
