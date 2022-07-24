import React, { useState } from 'react'
import './deletemodal.css'
import axios from './../../axios/axios'


const DeleteModal = ({deleteData,id,fetchData}) => {
    const [loading, setLoading] = useState(false);
    
    const handleDelete =async ()=>{
        setLoading(true);
        axios.delete(`${deleteData.deletePoint}${id}`)
            .then(() => {
                
                    setLoading(false);
                    handleCloseModal();
                    fetchData();
                
            })
            .catch((error) => {
                setLoading(false);
            });
    }

    

    function handleCloseModal() {
        document.getElementById("deleteModal").classList.remove("show","d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        document.querySelector("body").classList.remove("modal-open");
        document.querySelector("body").style = "";
    }

    return (
        <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className='modal-header-icon'>
                            <i className="fa-solid fa-5x text-white fa-trash-can"></i>
                        </div>
                    </div>
                    <div className="modal-body text-center ">
                        <p className=''>You are about to delete   {deleteData.type} <br /> of id:{id}</p>
                        <p className='text-main'>{deleteData.content}</p>
                        <p className='fs-5'>This will delete the {deleteData.type} <br/> from the database Are you sure?</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-evenly">
                        <button type="button" className="btn bg-white px-5" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-confirm px-5 " onClick={handleDelete}>{loading ? <i className="fas fa-spinner  fa-spin"></i> : "Confirm"}</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeleteModal