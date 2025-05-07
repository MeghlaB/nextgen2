import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


function MainLayout() {
  return (
    <div>
    <Navbar/>
       <div className="min-h-[calc(100vh-288px)] mb-15">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
