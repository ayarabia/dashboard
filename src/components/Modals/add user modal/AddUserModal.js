import React, { useState } from 'react'
import * as yup from 'yup';
import axios from './../../axios/axios'
import './addusermodal.css'

const AddUserModal = ({ getUsersData }) => {
    const [errorlist, seterrorlist] = useState(false);

    const schema = yup.object().shape({
        name: yup.string().required(),
        username: yup.string().required(),
        password: yup.string().required(),
        role_id: yup.number().required().positive().integer().min(1).max(2),
        email: yup.string().email(),
        country_id: yup.number().required().positive().integer().min(1).max(2),
    })


    const [addDataState, setAddDataState] = useState({});
    const [loading, setLoading] = useState(false);
    const [confirmPass, setconfirmPass] = useState("")
    function getData(e) {
        let myData = { ...addDataState };
        myData[e.target.name] = e.target.value;
        setAddDataState(myData);
        seterrorlist(null);

    }
    const getConfirmData = (e) => {
        let myData = {};
        myData[e.target.name] = e.target.value;
        setconfirmPass(myData);
        seterrorlist(null);
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (confirmPass.confirmpassword !== addDataState.password) {
            seterrorlist(["password is not the same"]);
            setLoading(false);
        }
        else {
            
            const isValid = await schema.validate(addDataState).catch((error) => seterrorlist(error.errors))
            setLoading(false);
            if (isValid) {
                setLoading(true)
                seterrorlist(null);
                axios.post('/api/users', addDataState)
                    .then(({ data }) => {
                        if (data) {
                            setLoading(false);
                            handleCloseModal();
                            getUsersData();
                        }
                        else {
                            setLoading(false);
                        }
                    })
                    .catch((error) => {
                        seterrorlist([error.message])
                        setLoading(false);
                    });
            }
        }

    }

    function handleCloseModal() {
        document.getElementById("addUserModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        document.querySelector("body").classList.remove("modal-open");
        document.querySelector("body").style = "";
    }
    return (
        <div className="modal fade" id="addUserModal" tabIndex={-1} aria-labelledby="addUserModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Add User </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body rounded-3 shadow-sm mb-3  py-4 px-5">
                        <form action="" >
                            <h4 className='w-100 text-center mt-0 mb-3 text-main'>User 1</h4>
                            {errorlist && <p className='text-danger w-100 text-center'>{errorlist[0]}</p>}
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userName" className="form-label">Full Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" onChange={getData} id="userName" placeholder='Enter  Name' name="name" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userRole" className="form-label">Role<span className="text-danger">*</span></label>
                                        <select name='role_id' onChange={getData} id="userRole" className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>User</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userusername" className="form-label">Username<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" onChange={getData} id="userusername" placeholder='Enter  Username' name="username" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="useremail" className="form-label">Email<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" onChange={getData} id="useremail" placeholder='Enter  Email' name="email" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className=" item mb-3">
                                        <label htmlFor="userpassword" className="form-label">Password<span className="text-danger">*</span></label>
                                        <input type="password" className="form-control" onChange={getData} id="userpassword" placeholder='Enter  password' name="password" />
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
                                        <select name='country_id' onChange={getData} id="userCountry" className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value={1}>Egypt</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className='d-flex justify-content-end mb-4'>
                        <button type="button" onClick={formSubmit} className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>{loading ? <i className="fas fa-spinner  fa-spin"></i> : "Save"}</span></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddUserModal