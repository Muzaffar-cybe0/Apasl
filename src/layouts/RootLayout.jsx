import React from 'react'
import TopNavbar from '../components/TopNavbar'
import Navbar from '../components/Navbar'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='rootLayout'>
     <TopNavbar/>
     <Navbar/>
     <Outlet/>
    </div>
  )
}
