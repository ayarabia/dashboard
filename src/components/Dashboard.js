import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

const Dashboard = () => {
 
  return (
    <div className='home'>
      <Header/>
      <Navbar/>
      <div className='d-flex'>
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard