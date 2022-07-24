import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom"

import './navbar.css'

const Navbar = () => {
    const location = useLocation();
    const [bread, setBread] = useState();
    const [breadIcon, setBreadIcon] = useState("")

    const getLoc = () => {
        let loc = location.pathname.split("/").splice(2);
        setBread(loc);
    }

    const getIcon = () => {
        if (location.pathname.split("/").splice(2, 3)[0] === "setup") {
            setBreadIcon("fas fa-hammer");
        }
        else if (location.pathname.split("/").splice(2, 3)[0] === "settings") {
            setBreadIcon("fas fa-gear");
        }
        else if (location.pathname.split("/").splice(2, 3)[0] === "manage-users") {
            setBreadIcon("fa-user-group");
        }
        else if (location.pathname.split("/").splice(2, 3)[0] === "manage-competitions") {
            setBreadIcon("fa-newspaper");
        }
    }

    useEffect(() => {
        getLoc();
        getIcon();
    }, [location]);

    return (
        <nav className='bg-sec main_nav py-3'>
            {
                bread?.length ===0?"" : (  <div className='ms-3 d-flex align-items-center'>
                    <NavLink to={`/dashboard/${bread && bread[0]}`}>
                        <i className={`fa-solid ${breadIcon && breadIcon}`}></i> {bread && bread[0]}
                    </NavLink>
                    <span> <i className='fas fa-greater-than mx-3'></i>{bread && bread[1]}</span>
                </div>)
            }

        </nav>
    )
}

export default Navbar