import React from 'react'
import './editprofile.css';
import profileimg from '../../../assets/images/profile.jpg'
import ChangePasswordModal from '../change password  modal/ChangePasswordModal';

const EditProfile = () => {
    return (
        <div>
            <div className="modal fade" id="editProfileModal" tabIndex={-1} aria-labelledby="editProfileModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content px-5 pt-3">
                        <div className="modal-header d-block">
                            <h5 className='text-center'>Edit User </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mb-3 ">

                            <form action="" >
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <div className=''>
                                            <div className=" item mb-3">
                                                <label htmlFor="Name" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="Name" placeholder='Enter  Name' />
                                            </div>

                                        </div>

                                    </div>
                                    <div className='col-lg-4'>

                                        <div className=" item mb-3">
                                            <label htmlFor="Organisation" className="form-label">Organisation</label>
                                            <input type="text" className="form-control" id="Organisation" placeholder='Enter Organisation' />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>

                                        <div className=" item mb-3">
                                            <label htmlFor="Role" className="form-label">Role</label>
                                            <input type="text" className="form-control" id="Role" placeholder='Enter Role' />
                                        </div>

                                    </div>
                                    <div className='col-lg-8'>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className=" item mb-3">
                                                    <label htmlFor="Email" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="Email" placeholder='Enter Email' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className=" item mb-3">
                                                    <label htmlFor="Country" className="form-label">Country</label>
                                                    <input type="text" className="form-control" id="Country" placeholder='Enter Country' />
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className=" item mb-3">
                                                    <label htmlFor="About" className="form-label">About</label>
                                                    <textarea rows={6} type="text" className="form-control" id="About" placeholder='Enter About'></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div>
                                            <div className='text-center'>
                                                <img src={profileimg} className='editprofileimage' alt="" />
                                            </div>
                                            <div className="px-4">
                                                <label htmlFor="formFile" className="form-label">Choose File</label>
                                                <input className="form-control" type="file" id="formFile" />
                                            </div>
                                            <div className='d-flex justify-content-between mt-4'>

                                                <button type="button" className="btn approve-btn   px-4 mt-3 " data-bs-target="#changePasswordModal" data-bs-toggle="modal" data-bs-dismiss="modal"><i className="fa-solid fas fa-shield-halved "></i> <span>Change Password</span></button>

                                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk "></i> <span>Save</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            <ChangePasswordModal />
        </div>

    )
}

export default EditProfile