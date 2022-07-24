import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    let activeStyle = {
        fontWeight: "800",
    };

    const [toggleState, settoggleState] = useState(true)

    const handleToggle = () => {
        settoggleState(!toggleState);
    }

    const setToggleTrue = () => {
        settoggleState(true);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 992) {
                settoggleState(true);
            } else {
                settoggleState(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])


    return (
        <div className='sidebar pb-2 position-relative'>
            <ul className={toggleState ? "accordion list-unstyled px-2 " : "accordion list-unstyled hide-side"} id="accordionExample">
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" onClick={setToggleTrue} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <i className="fa-solid fa-chart-line"></i>   <span className='ms-2 me-5'>Dashboard</span>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <ul className="accordion-body ps-5">
                            <li>
                                <a href="component_tabs.html"> Tabs </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button onClick={setToggleTrue} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i className="fa-solid fa-hammer" ></i> <span className='ms-2'>Setup</span>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <ul className="accordion-body ps-5">
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/setup/awards"}>
                                    Awards
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/setup/countries"}>
                                    Countries
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/setup/grade"}>
                                    Grade
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/setup/schools"}>
                                    Schools
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/setup/organisations"}>
                                    Organisations
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/setup/domainstags"}>
                                    Domains and Tags
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/setup/difficulty-groups"}>
                                    Difficulty Groups
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/setup/CSV-upload"}>
                                    CSV Upload
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button onClick={setToggleTrue} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers">
                            <i className="fa-solid fa-user-group"></i> <span className='ms-2'>Manage Users</span>
                        </button>
                    </h2>
                    <div id="collapseUsers" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <ul className="accordion-body ps-5">
                            <li>
                                <NavLink to={"/dashboard/manage-users/users"} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }   to={"/dashboard/manage-users/administrators"}>
                                    Administrators
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }  to={"/dashboard/manage-users/country-Partners"}>
                                    Country Partners
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/manage-users/teacher-super-admins"}>
                                    Teacher Super Admins
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/manage-users/roles"}>
                                    Roles
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button onClick={setToggleTrue} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCompetition" aria-expanded="false" aria-controls="collapseCompetition">
                            <i className="fa-solid fa-newspaper"></i> <span className='ms-2'>Manage Competitions</span>
                        </button>
                    </h2>
                    <div id="collapseCompetition" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <ul className="accordion-body ps-5">
                            <li>
                                <NavLink to={"/dashboard/manage-competitions/competitions"} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    Competitions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }   to={"/dashboard/manage-competitions/competition-sessions"}>
                                    Competition Sessions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }  to={"/dashboard/manage-competitions/participants"}>
                                    Participants
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/manage-competitions/pending-partners-competition-date"}>
                                    Pending Partners <br />Competition Date
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button onClick={setToggleTrue} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesettings" aria-expanded="false" aria-controls="collapsesettings">
                            <i className="fa-solid fa-gear"></i> <span className='ms-2'>Settings</span>
                        </button>
                    </h2>
                    <div id="collapsesettings" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <ul className="accordion-body ps-5">
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to={"/dashboard/settings/profile"}>
                                    Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className='toggle-side'>

                <i className={toggleState ? "fa-solid fa-angle-left" : "fa-solid fa-angle-right"} onClick={handleToggle}></i>
            </div>
        </div>
    )
}

export default Sidebar