import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './AddTeacherModal.css';

const AddTeacherModal = () => {
    return (
        <div className="modal fade" id="addTeacherModal" tabIndex={-1} aria-labelledby="addTeacherModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Add Teacher</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Teacher 1</Tab>
                            <Tab>Teacher 2</Tab>
                            <Tab>Teacher 3</Tab>
                            <Tab>Teacher 4</Tab>
                            <Tab>Teacher 5</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Teacher 1</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Full Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Full Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Role<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Role' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Username<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Username' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgPhone" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgCountry" placeholder='Select Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Confirm Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgPerson" placeholder='Enter Confirm Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country Partner<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country Partner' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                            <button type="button" className="btn approve-btn  px-4 mt-3 me-3"><i className="fa-solid fas fa-plus me-3"></i> <span>Add another teacher</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Teacher 1</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Full Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Full Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Role<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Role' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Username<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Username' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgPhone" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgCountry" placeholder='Select Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Confirm Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgPerson" placeholder='Enter Confirm Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country Partner<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country Partner' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                            <button type="button" className="btn approve-btn  px-4 mt-3 me-3"><i className="fa-solid fas fa-plus me-3"></i> <span>Add another teacher</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Teacher 1</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Full Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Full Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Role<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Role' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Username<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Username' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgPhone" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgCountry" placeholder='Select Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Confirm Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgPerson" placeholder='Enter Confirm Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country Partner<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country Partner' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                            <button type="button" className="btn approve-btn  px-4 mt-3 me-3"><i className="fa-solid fas fa-plus me-3"></i> <span>Add another teacher</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Teacher 1</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Full Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Full Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Role<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Role' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Username<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Username' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgPhone" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgCountry" placeholder='Select Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Confirm Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgPerson" placeholder='Enter Confirm Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country Partner<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country Partner' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                            <button type="button" className="btn approve-btn  px-4 mt-3 me-3"><i className="fa-solid fas fa-plus me-3"></i> <span>Add another teacher</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Teacher 1</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Full Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Full Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Role<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Role' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Username<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Username' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgPhone" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgCountry" placeholder='Select Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Confirm Password<span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="orgPerson" placeholder='Enter Confirm Password' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country Partner<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country Partner' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                            <button type="button" className="btn approve-btn  px-4 mt-3 me-3"><i className="fa-solid fas fa-plus me-3"></i> <span>Add another teacher</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default AddTeacherModal