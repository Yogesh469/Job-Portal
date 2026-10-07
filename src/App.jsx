import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router'
import Companies from './pages/Companies' 
import Login from './pages/Login'
import Jobdetail from './pages/Jobdetail'
import About from './pages/About'
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobdetail />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />


      </Routes>

     <Footer />




    </div>
  )
}

export default App
