import React from 'react'
import './ApproveModal.css'

const ApproveModal = ({approveData}) => {
    return (
        <div className="modal fade" id="approveModal" tabIndex={-1} aria-labelledby="approveModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className='modal-header-icon'>
                            <i className="fa-solid fa-5x text-white fa-check-double"></i>
                        </div>
                    </div>
                    <div className="modal-body text-center ">
                        <p className=''>You are about to {approveData.type === "a user" ? "enable":"approve"}   {approveData.type}</p>
                        <p className='text-main'>{approveData.content}</p>
                        <p>{approveData.type === "a user" ? "Are you sure?":`approve this will add ${approveData.type} into the database `}<br /> {approveData.type === "a user" ?"":"Are you sure?"}</p>
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

export default ApproveModal