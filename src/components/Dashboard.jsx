import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MainArea from './MainArea'

const Dashboard = () => {
  return (
    <div className='h-screen grid md:grid-rows-12 grid-rows-12 overflow-hidden'>
        <Navbar/>
        <div className='md:row-span-11 row-span-11 grid md:grid-cols-12'>
            <Sidebar/>
            <MainArea/>  
        </div>
        
    </div>
  )
}

export default Dashboard