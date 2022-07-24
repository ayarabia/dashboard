import React, { useState } from 'react'
import axios from './../../axios/axios'
import './addmodal.css'


const UpdateUserModal = ({ getUsersData, updateData, deleteId }) => {
    const [addDataState, setAddDataState] = useState({});
    const [loading, setLoading] = useState(false);
    const [confirmPass, setconfirmPass] = useState("")
    const [errorlist, seterrorlist] = useState(false);

    const getConfirmData = (e) => {
        let myData = {};
        myData[e.target.name] = e.target.value;
        setconfirmPass(myData);
        seterrorlist(null);
    }
   
    function getData(e) {
        let myData = { ...updateData };
        myData[e.target.name] = e.target.value;
        delete myData.approved_at
        delete myData['created_by']
        setAddDataState(myData);

    }
    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (confirmPass.confirmpassword !== addDataState.password) {
            seterrorlist(["password is not the same"]);
            setLoading(false)
            }
        else{
            axios.put(`/api/users/${deleteId}`, addDataState)
            .then(() => {
                setLoading(false);
                handleCloseModal();
                getUsersData();
            })
            .catch((error) => {

                setLoading(false);
            });
        }
        
    }

    function handleCloseModal() {
        document.getElementById("updateUserModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        document.querySelector("body").classList.remove("modal-open");
        document.querySelector("body").style = "";
    }

    return (
        <div className="modal fade" id="updateUserModal" tabIndex={-1} aria-labelledby="updateUserModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Update User</h5>
                        {errorlist && <p className='text-danger w-100 text-center'>{errorlist[0]}</p>}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body  ">
                        <form onSubmit={formSubmit} >
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userName" className="form-label">Full Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" onChange={getData} id="userName" placeholder='Enter  Name' name="name" defaultValue={updateData?.name} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userRole" className="form-label">Role<span className="text-danger">*</span></label>
                                        <select name='role_id' onChange={getData} id="userRole" className="form-select" aria-label="Default select example"  defaultValue={updateData?.role_id}>
                                            <option selected>Open this select menu</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>User</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userusername" className="form-label">Username<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" onChange={getData} id="userusername" placeholder='Enter  Username' name="username"  defaultValue={updateData?.username} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="useremail" className="form-label">Email<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" onChange={getData} id="useremail" placeholder='Enter  Email' name="email"  defaultValue={updateData?.email} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userpassword" className="form-label">Password<span className="text-danger">*</span></label>
                                        <input type="password" className="form-control" onChange={getData} id="userpassword" placeholder='Enter  password' name="password"  defaultValue={updateData?.password} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userConfirmpassword" className="form-label">Confirm Password<span className="text-danger">*</span></label>
                                        <input type="password" className="form-control" onChange={getConfirmData} id="userConfirmpassword" placeholder='Confirm  Password' name="confirmpassword" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                        <select name='country_id' onChange={getData} id="userCountry" className="form-select" aria-label="Default select example"  defaultValue={updateData?.country_id}>
                                            <option selected>Open this select menu</option>
                                            <option value={1}>Egypt</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-end'>
                                <button type="submit" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>{loading ? <i className="fas fa-spinner  fa-spin"></i> : "Save"}</span></button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUserModal