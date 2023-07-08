import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import UpBatch from './components/UpcomingBatch';
import Footer from './components/Footer';
function App() {
  return(
<div>
  <Navbar/>
<UpBatch/>

  <About/>
  
  <Footer/>
</div>

  )
}

export default App;
