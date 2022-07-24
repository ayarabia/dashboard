import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './addparticipantmodal.css'

const AddParticipatnModal = () => {
    return (
        <div className="modal fade" id="addOrgParticipant" tabIndex={-1} aria-labelledby="addOrgParticipantLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Add Participant </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Participant 1</Tab>
                            <Tab>Participant 2</Tab>
                            <Tab>Participant 3</Tab>
                            <Tab>Participant 4</Tab>
                            <Tab>Participant 5</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div > 
                                        <h4 className='text-center mt-0 text-main mb-3' >Participant 1</h4>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                    <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="orgEmail">
                                                <option selected>Select Competition/Assessment</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantGrade" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantGrade">
                                                <option selected>Select Grade</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantCountry">
                                                <option selected>Select Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantSchool" className="form-label">School<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantSchool">
                                                <option selected>Select School</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantPartner/Teacher" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantPartner/Teacher">
                                                <option selected>Select Partner/Teacher</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantTuitionCentre" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantTuitionCentre">
                                                <option selected>Select Tuition Centre</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fas fa-plus me-3"></i> <span>Add another participant</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div > 
                                        <h4 className='text-center mt-0 text-main mb-3' >Participant 2</h4>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                    <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="orgEmail">
                                                <option selected>Select Competition/Assessment</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantGrade" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantGrade">
                                                <option selected>Select Grade</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantCountry">
                                                <option selected>Select Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantSchool" className="form-label">School<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantSchool">
                                                <option selected>Select School</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantPartner/Teacher" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantPartner/Teacher">
                                                <option selected>Select Partner/Teacher</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantTuitionCentre" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantTuitionCentre">
                                                <option selected>Select Tuition Centre</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fas fa-plus me-3"></i> <span>Add another participant</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div > 
                                        <h4 className='text-center mt-0 text-main mb-3' >Participant 3</h4>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                    <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="orgEmail">
                                                <option selected>Select Competition/Assessment</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantGrade" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantGrade">
                                                <option selected>Select Grade</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantCountry">
                                                <option selected>Select Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantSchool" className="form-label">School<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantSchool">
                                                <option selected>Select School</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantPartner/Teacher" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantPartner/Teacher">
                                                <option selected>Select Partner/Teacher</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantTuitionCentre" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantTuitionCentre">
                                                <option selected>Select Tuition Centre</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fas fa-plus me-3"></i> <span>Add another participant</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div > 
                                        <h4 className='text-center mt-0 text-main mb-3' >Participant 4</h4>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                    <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="orgEmail">
                                                <option selected>Select Competition/Assessment</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantGrade" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantGrade">
                                                <option selected>Select Grade</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantCountry">
                                                <option selected>Select Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantSchool" className="form-label">School<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantSchool">
                                                <option selected>Select School</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantPartner/Teacher" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantPartner/Teacher">
                                                <option selected>Select Partner/Teacher</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantTuitionCentre" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantTuitionCentre">
                                                <option selected>Select Tuition Centre</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fas fa-plus me-3"></i> <span>Add another participant</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div > 
                                        <h4 className='text-center mt-0 text-main mb-3' >Participant 5</h4>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                    <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="orgEmail">
                                                <option selected>Select Competition/Assessment</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantGrade" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantGrade">
                                                <option selected>Select Grade</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantCountry">
                                                <option selected>Select Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantSchool" className="form-label">School<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantSchool">
                                                <option selected>Select School</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantPartner/Teacher" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantPartner/Teacher">
                                                <option selected>Select Partner/Teacher</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='item'>
                                                <label htmlFor="participantTuitionCentre" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <select class="form-select" aria-label="Default select example" id="participantTuitionCentre">
                                                <option selected>Select Tuition Centre</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fas fa-plus me-3"></i> <span>Add another participant</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default AddParticipatnModal