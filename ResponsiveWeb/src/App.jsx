
import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About/>
      <Experience/>
    </div>
  )
}

export default App