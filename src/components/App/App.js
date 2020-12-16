import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import '../../styles/App.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
