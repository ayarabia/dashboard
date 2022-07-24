import React from 'react';
import './changepasswordmodal.css'

const ChangePasswordModal = () => {
    return (
        <div className="modal fade" id="changePasswordModal" tabIndex={-1} aria-labelledby="changePasswordModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content py-3 px-3 pt-3">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Change Password</h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body mb-3 ">

                        <form action="" className='px-5'>
                            <div className=" item mb-3">
                                <label htmlFor="New Password" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="New Password" placeholder='Enter  New Password' />
                            </div>
                            <div className=" item mb-3">
                                <label htmlFor="Re-enter Password" className="form-label">Re-enter Password</label>
                                <input type="password" className="form-control" id="Re-enter Password" placeholder='Enter  Re-enter Password' />
                            </div>

                        </form>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button  type="button" className="btn btn-cancel px-4 mt-3 me-3" data-bs-dismiss="modal"><i className="fa-solid fas fa-ban me-3"></i> <span>Cancel</span></button>
                        <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fas fa-check me-3"></i> <span>Submit</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordModal