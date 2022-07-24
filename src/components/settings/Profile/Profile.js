import React from 'react'
import './profile.css'
import profileimg from '../../../assets/images/profile.jpg';
import EditProfile from '../../Modals/edit profile/EditProfile';
import ChangePasswordModal from '../../Modals/change password  modal/ChangePasswordModal';

const Profile = () => {
    return (
        <div className='flex-grow-1 profile'>
            <div className='profile__cover'>
            </div>
            <div className='profile_main px-5'>
                <div className='row'>
                    <div className='col-lg-2'>
                        <div className='item profile__img__item '>
                            <img src={profileimg} className="profile__img" alt="" />
                            <h5 className=' mt-4'>Oraganisation Name <br />@username </h5>
                            <ul className='list-unstyled profile__user__info mt-4'>
                                <li><i className="fa-solid fa-envelope fa-fw"></i> ben@gmail.com</li>
                                <li><i className="fa-solid fa-graduation-cap fa-fw"></i> Elsalam School</li>
                                <li><i className="fa-solid fa-map fa-fw"></i> Cairo, Egypt</li>
                                <li><i className="fa-solid fa-calendar-days fa-fw"></i>   User Since march 2021 </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-9'>
                        <div className='item d-flex flex-column justify-content-between h-100'>
                            <div>
                                <h3 className='mt-3'>Benjamin Charles</h3>
                                <p className='porfile__desc'>Country Partner</p>
                                <div className='mt-4'>
                                    <h3 >About Me</h3>
                                    <p className='fs-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur vel temporibus impedit illo, corrupti inventore totam, pariatur ex dignissimos eveniet ut consectetur obcaecati dolore recusandae quam quia praesentium minima maiores!</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mb-5'>
                                <button className='delete-btn shadow-sm py-2 px-3 ' data-bs-toggle="modal" data-bs-target="#editProfileModal"><i className="fa-solid fa-pen"></i> Edit porfile</button>

                                <EditProfile />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Profile