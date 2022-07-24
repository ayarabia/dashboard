import React from 'react'
import './rejectmodal.css'

const RejectModal = ({rejectData}) => {
    return (
        <div className="modal fade" id="rejectModal" tabIndex={-1} aria-labelledby="rejectModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className='modal-header-icon'>
                            <i className="fa-solid fa-5x text-white fa-xmark"></i>
                        </div>
                    </div>
                    <div className="modal-body text-center ">
                        <p className=''>You are about to reject   {rejectData.type}</p>
                        <p className='text-main'>{rejectData.content}</p>
                        <textarea placeholder='Please type in your reason for rejection' name="" id="" cols="10" rows="5"></textarea>
                    </div>
                    <div className="modal-footer d-flex justify-content-evenly">
                        <button type="button" className="btn bg-white px-5" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-confirm px-5 ">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RejectModal