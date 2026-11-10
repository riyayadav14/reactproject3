import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Dashboard/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App
