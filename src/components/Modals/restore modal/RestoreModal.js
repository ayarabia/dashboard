import React from 'react'
import './restoreModal.css'

const RestoreModal = ({restoreData}) => {
    return (
        <div className="modal fade" id="restoreModal" tabIndex={-1} aria-labelledby="restoreModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className='modal-header-icon'>
                            <i className="fa-solid fa-5x text-white fa-trash-arrow-up"></i>
                        </div>
                    </div>
                    <div className="modal-body text-center ">
                        <p className=''>You are about to restore   {restoreData.type}</p>
                        <p className='text-main'>{restoreData.content}</p>
                        <p>this will restore  {restoreData.type} into the database <br /> Are you sure?</p>
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

export default RestoreModal