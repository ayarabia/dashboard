import React, { useState } from 'react'
import './addorgmodal.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as yup from 'yup';
import axios from './../../axios/axios'

const AddOrgModal = ({ getOrganisationsData }) => {

    const [errorlist, seterrorlist] = useState(false);
    const schema = yup.object().shape({
        name: yup.string().required(),
        address: yup.string().required(),
        person_in_charge_name: yup.string().required(),
        billing_address: yup.string().required(),
        shipping_address: yup.string().required(),
        email: yup.string().email(),
        phone: yup.number().required().positive().integer(),
        country_id: yup.number().required().positive().integer().min(1).max(1),
    })


    const [addDataState, setAddDataState] = useState({});
    const [loading, setLoading] = useState(false);

    function getData(e) {
        let myData = { ...addDataState };
        myData[e.target.name] = e.target.value;
        setAddDataState(myData);
        seterrorlist(null);

    }
    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const isValid = await schema.validate(addDataState).catch((error) => seterrorlist(error.errors))
        setLoading(false);
        if(isValid) {
            setLoading(true)
            seterrorlist(null);
            axios.post('http://34.231.234.91/api/organizations', addDataState)
            .then(({ data }) => {
                if (data) {
                    setLoading(false);
                    handleCloseModal();
                    getOrganisationsData();
                }
                else {
                    setLoading(false);
                }
            })
            .catch((error) => {
                setLoading(false);
            });
        }
        

    }

    function handleCloseModal() {
        document.getElementById("addOrgModal").classList.remove("show","d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        document.querySelector("body").classList.remove("modal-open");
        document.querySelector("body").style = "";
    }


    return (
        <>
            <div className="modal fade" id="addOrgModal" tabIndex={-1} aria-labelledby="addOrgModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content px-5">
                        <div className="modal-header d-block">
                            <h5 className='text-center'>Add Organisation </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <Tabs>
                            <TabList>
                                <Tab>Organisation 1</Tab>
                                <Tab>Organisation 2</Tab>
                                <Tab>Organisation 3</Tab>
                                <Tab>Organisation 4</Tab>
                                <Tab>Organisation 5</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                    <form action="" >
                                        <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                            <h4 className='w-100 text-center mt-0 text-main'>Organisation 1</h4>
                                            {errorlist && <p className='text-danger w-100 text-center'>{errorlist[0]}</p> }
                                            <div className=" item mb-3">
                                                <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" onChange={getData} id="orgName" placeholder='Enter Organisation Name' name="name" />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" onChange={getData} id="orgadd" placeholder='Enter Organisation Address' name="address" />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" onChange={getData} id="orgEmail" placeholder='Enter  Email' name="email" />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                                <input type="number" className="form-control" onChange={getData} id="orgPhone" placeholder='Enter  Phone' name="phone" />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                                <input type="number" className="form-control" onChange={getData} id="orgCountry" placeholder='Select Country' name="country_id" />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" onChange={getData} id="orgPerson" placeholder='Enter Person-in-charge' name="person_in_charge_name" />
                                            </div>
                                            <div className='row row50'>
                                                <div className='col-lg-6'>
                                                    <div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" onChange={getData} id="orgPillAdress" placeholder='Enter Billing Address' name='billing_address' />
                                                        </div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" onChange={getData} id="orgShipAddress" placeholder='Enter Shipping Address' name='shipping_address' />
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
                            </TabPanel>
                            <TabPanel>
                                <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                    <form action="" >
                                        <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                            <h4 className='w-100 text-center mt-0 text-main'>Organisation 2</h4>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' />
                                            </div>
                                            <div className='row row50'>
                                                <div className='col-lg-6'>
                                                    <div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' />
                                                        </div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
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
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='d-flex justify-content-end mb-4'>
                                    <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                    <form action="" >
                                        <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                            <h4 className='w-100 text-center mt-0 text-main'>Organisation 3</h4>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' />
                                            </div>
                                            <div className='row row50'>
                                                <div className='col-lg-6'>
                                                    <div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' />
                                                        </div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
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
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='d-flex justify-content-end mb-4'>
                                    <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                    <form action="" >
                                        <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                            <h4 className='w-100 text-center mt-0 text-main'>Organisation 4</h4>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' />
                                            </div>
                                            <div className='row row50'>
                                                <div className='col-lg-6'>
                                                    <div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' />
                                                        </div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
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
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='d-flex justify-content-end mb-4'>
                                    <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                    <form action="" >
                                        <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                            <h4 className='w-100 text-center mt-0 text-main'>Organisation 5</h4>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' aria-describedby="emailHelp" />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                            </div>
                                            <div className=" item mb-3">
                                                <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' aria-describedby="emailHelp" />
                                            </div>
                                            <div className='row row50'>
                                                <div className='col-lg-6'>
                                                    <div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' aria-describedby="emailHelp" />
                                                        </div>
                                                        <div className="  mb-3">
                                                            <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
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
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='d-flex justify-content-end mb-4'>
                                    <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                                </div>
                            </TabPanel>
                        </Tabs>

                    </div>
                </div>
            </div>
        </>

    )
}

export default AddOrgModal