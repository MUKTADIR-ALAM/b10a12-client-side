import React from 'react'
import NavigationBar from '../Shared/Navigation/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

export default function MainLayout() {
  return (
    <div>
        <div className='w-11/12 mx-auto'><NavigationBar/></div>
        <div className='w-11/12 mx-auto min-h-screen'><Outlet/></div>
        <Footer/>
    </div>
  )
}
