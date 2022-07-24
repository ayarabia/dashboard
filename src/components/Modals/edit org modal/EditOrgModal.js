import React, { useState } from 'react'
import './editorgmodal.css'
import axios from './../../axios/axios'


const EditOrgModal = ({ getOrganisationsData, updateData,deleteId }) => {
    const [addDataState, setAddDataState] = useState({});
    const [loading, setLoading] = useState(false);
    console.log(updateData?.shipsping_address);
    
   

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
        axios.put(`/api/organizations/${deleteId}`, addDataState)
            .then(() => {
                    setLoading(false);
                    handleCloseModal();
                    setAddDataState({})
                    getOrganisationsData();

            })
            .catch((error) => {
                setLoading(false);
            });
    }

    function handleCloseModal() {
        document.getElementById("editOrgModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        document.querySelector("body").classList.remove("modal-open");
        document.querySelector("body").style = "";
    }

    return (
        <div className="modal fade" id="editOrgModal" tabIndex={-1} aria-labelledby="editOrgModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Edit Organisation </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body rounded-3 shadow-sm mb-3 ">

                        <form action="" >
                            <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                <h4 className='w-100 text-center mt-0 text-main'>{updateData?.name}</h4>
                              
                                <div className=" item mb-3">
                                    <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name'   onChange={getData} name='name' defaultValue={updateData?.name} />
                                </div>
                                <div className=" item mb-3">
                                    <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' onChange={getData} name='address' defaultValue={updateData?.address}  />
                                </div>
                                <div className=" item mb-3">
                                    <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' onChange={getData} name='email' defaultValue={updateData?.email} />
                                </div>
                                <div className=" item mb-3">
                                    <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                    <input type="number" className="form-control" id="orgPhone" placeholder='Enter  Phone' onChange={getData} name='phone' defaultValue={updateData?.phone} />
                                </div>
                                <div className=" item mb-3">
                                    <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                    <input type="number" className="form-control" id="orgCountry" placeholder='Select Country' onChange={getData} name='country_id' defaultValue={updateData?.country_id} />
                                </div>
                                <div className=" item mb-3">
                                    <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' onChange={getData} name='person_in_charge_name' defaultValue={updateData?.person_in_charge_name} />
                                </div>
                                <div className='row row50'>
                                    <div className='col-lg-6'>
                                        <div>
                                            <div className="  mb-3">
                                                <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' onChange={getData} name='billing_address' defaultValue={updateData?.billing_address} />
                                            </div>
                                            <div className="  mb-3">
                                                <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' onChange={getData} name='shipping_address' defaultValue={updateData?.shipping_address} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='col-lg-6'>
                                        <div>
                                            <div className='d-flex justify-content-between align-items-end mb-3'>
                                                <div className="">
                                                    <label htmlFor="formFile" className="form-label">Upload Image<span className="text-danger">*</span></label>
                                                    <input className="form-control" type="file" id="formFile" />

                                                </div>
                                                <button type="button" className="btn approve-btn"> <span>Upload</span></button>
                                            </div>


                                            <div className="image-preview position-relative">
                                                <div className='position-absolute'>
                                                    <i className='fas fa-image'></i>
                                                    <p>No preview available</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
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

export default EditOrgModal