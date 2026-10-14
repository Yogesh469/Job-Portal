import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router'
import Companies from './pages/Companies' 
import Login from './pages/Login'
import Jobdetail from './pages/Jobdetail'
import About from './pages/About'
import Footer from "./components/Footer"
import Admin from './pages/Admin'
import AddJob from './pages/Addjob'
import AddCompany from './pages/AddCompany'
import Companydetail from './pages/Companydetail'
import Companyinfo from './pages/Companyinfo'
import JobDetail2 from './pages/Jobdetail2'


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
        <Route path="/admin-login" element={<Admin/>} />
        <Route  path="/add-job" element={<AddJob />}/>
        <Route  path="/add-job/:id" element={<AddJob />}/>
        <Route  path="/add-company" element={<AddCompany />}/>
         <Route  path="/companies-details" element={<Companydetail/>}/>
         <Route  path ="/add-company/:id" element ={<AddCompany/>}/>
         <Route path ="/company-info/:id" element={<Companyinfo/>}/>
         <Route path="/jobdetail2/:id" element={<JobDetail2 />}/>


      </Routes>

     <Footer />




    </div>
  )
}

export default App
