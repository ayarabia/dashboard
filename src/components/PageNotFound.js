import React from 'react'
import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

import Header from './Header/Header';
import Img_404 from "../assets/images/404-notFound.png"

const PageNotFound = () => {
 
  return (
    <div className='home'>
        <Header/>
        <div className='d-flex bg-color full-size center'>
            <div className='container-404 center'>
                <img src={Img_404} alt="404 not found" style={{"height":"inherit"}}/>
            </div>
            <h1 className='bold'>Oops!</h1>
            <h3>We can't seem to find the page you're looking for.</h3>
            <NavLink to='/dashboard/manage-users'><button className='btn btn-color-theme'>Go to Dashboard</button></NavLink>
        </div>
    </div>
  )
}

export default PageNotFound