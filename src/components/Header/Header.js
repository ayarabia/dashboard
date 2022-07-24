import React from 'react'
import logo from '../../assets/images/logo.jpg';
import profileImg from '../../assets/images/profile.jpg';
import './header.css'
import { NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
    let navigate = useNavigate();

    function logOut() {
        localStorage.removeItem("userToken");
        navigate('/login')

    }
    return (
        <div className="header">
            <div className='header__content d-flex justify-content-between align-items-center'>
                <div className='logo ms-3'>
                    <img src={logo} alt="" />
                </div>
                <div className='right__header d-flex bg-main align-items-center py-1 px-4' >
                    <div className='position-relative cursr' >
                        <div id="notificationdropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-bell text-white mx-2" ></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-special">
                                5
                            </span>
                        </div>

                        <ul className="dropdown-menu p-3 profile__menu" aria-labelledby="notificationdropdownMenu">
                            <li >
                                profile pic changed
                            </li>
                        </ul>
                    </div>
                    <div className='position-relative'>
                        <div className='cursr' id="profiledropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profileImg} className='profile__image me-1 ms-3' alt="" />
                            <i className="fa-solid fa-sort-down text-white mx-3"></i>
                        </div>
                        <ul className="dropdown-menu p-3 profile__menu shadow-sm" aria-labelledby="profiledropdownMenu">
                            <li>
                                <NavLink to={"/"}><i className="fa-solid fa-house"></i> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/settings/profile"}>
                                <i className="fa-solid fa-user"></i> My profile
                                </NavLink>
                                
                            </li>
                            <li>
                                <a href='' onClick={logOut}><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>




        </div>
    )
}

export default Header