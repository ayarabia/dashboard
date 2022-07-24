import React from 'react'
import './Addrole.css'

const AddRole = () => {
    return (
        <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden user-permissions'>

            <h2 className='text-main'>Add Role</h2>
            <div className='row ' style={{ marginRight: "6rem", marginLeft: "6rem" }}>
                <div className='col-lg-12'>
                    <div className='item bg-white py-4 px-5 mb-5'>
                        <form action="">
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <label htmlFor="RoleName" className='me-5'>Role Name</label>
                                </div>
                                <div className='col-lg-8'>
                                    <input type="text" className=' form-control' name="RoleName" id="RoleName" placeholder='Role Name' />
                                </div>
                                <div className='col-lg-4 mt-4'>
                                    <label htmlFor="Roledesc" className='me-5'>Role Description</label>
                                </div>
                                <div className='col-lg-8 mt-4'>
                                    <textarea type="text" className=' form-control' name="Roledesc" id="Roledesc" placeholder='Role Description' rows={'7'}></textarea>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='item mb-5'>
                        <div className="form-check form-switch d-flex justify-content-evenly">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Access<span className='text-danger'>*</span></label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <div className='shadow rounded-3 py-4 bg-white mt-3 px-5' >
                            <p className='text-center fs-5'><i className="fa-solid fa-user"></i> User Role Management</p>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewSwitchCheck">View</label>
                                <input className="form-check-input" type="checkbox" id="viewSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="createSwitchCheck">Create</label>
                                <input className="form-check-input" type="checkbox" id="createSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="editDeleteSwitchCheck">edit/Delete</label>
                                <input className="form-check-input" type="checkbox" id="editDeleteSwitchCheck" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='item mb-5'>
                        <div className="form-check form-switch d-flex justify-content-evenly">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Access<span className='text-danger'>*</span></label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <div className='shadow rounded-3 py-4 bg-white mt-3 px-5' >
                            <p className='text-center fs-5'><i className="fa-solid fas fa-hammer"></i> Difficulty Management</p>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewdiffSwitchCheck">View</label>
                                <input className="form-check-input" type="checkbox" id="viewdiffSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="creatediffSwitchCheck">Create</label>
                                <input className="form-check-input" type="checkbox" id="creatediffSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="editDeletediffSwitchCheck">edit/Delete</label>
                                <input className="form-check-input" type="checkbox" id="editDeletediffSwitchCheck" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='item mb-5'>
                        <div className="form-check form-switch d-flex justify-content-evenly">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Access<span className='text-danger'>*</span></label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <div className='shadow rounded-3 py-4 bg-white mt-3 px-5' >
                            <p className='text-center fs-5'><i className="fa-solid fas fa-bookmark"></i> Collection Management</p>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewcollSwitchCheck">View All</label>
                                <input className="form-check-input" type="checkbox" id="viewcollSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewOwncollSwitchCheck">View Own Entries Only</label>
                                <input className="form-check-input" type="checkbox" id="viewOwncollSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="createcollSwitchCheck">Create</label>
                                <input className="form-check-input" type="checkbox" id="createcollSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="editDeletecollSwitchCheck">edit/Delete</label>
                                <input className="form-check-input" type="checkbox" id="editDeletecollSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="approvePendcollSwitchCheck">Approve Pending</label>
                                <input className="form-check-input" type="checkbox" id="approvePendcollSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="assigncollSwitchCheck">Assign Permissions</label>
                                <input className="form-check-input" type="checkbox" id="assigncollSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="WhitelistcollSwitchCheck">Enable Whitelist</label>
                                <input className="form-check-input" type="checkbox" id="WhitelistcollSwitchCheck" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='item mb-5'>
                        <div className="form-check form-switch d-flex justify-content-evenly">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Access<span className='text-danger'>*</span></label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <div className='shadow rounded-3 py-4 bg-white mt-3 px-5' >
                            <p className='text-center fs-5'><i className="fa-solid fas fa-list-check"></i> Task Management</p>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewtaskSwitchCheck">View All</label>
                                <input className="form-check-input" type="checkbox" id="viewtaskSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewOwntaskSwitchCheck">View Own Entries Only</label>
                                <input className="form-check-input" type="checkbox" id="viewOwntaskSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="createtaskSwitchCheck">Create</label>
                                <input className="form-check-input" type="checkbox" id="createtaskSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="editDeletetaskSwitchCheck">edit/Delete</label>
                                <input className="form-check-input" type="checkbox" id="editDeletetaskSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="approvePendtaskSwitchCheck">Approve Pending</label>
                                <input className="form-check-input" type="checkbox" id="approvePendtaskSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="assigntaskSwitchCheck">Assign Permissions</label>
                                <input className="form-check-input" type="checkbox" id="assigntaskSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="WhitelisttaskSwitchCheck">Enable Whitelist</label>
                                <input className="form-check-input" type="checkbox" id="WhitelisttaskSwitchCheck" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='item mb-5'>
                        <div className="form-check form-switch d-flex justify-content-evenly">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Access<span className='text-danger'>*</span></label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <div className='shadow rounded-3 py-4 bg-white mt-3 px-5' >
                            <p className='text-center fs-5'><i className="fa-solid fas fa-school"></i> School Management</p>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewdschoolSwitchCheck">View</label>
                                <input className="form-check-input" type="checkbox" id="viewdschoolSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="createdschoolSwitchCheck">Create</label>
                                <input className="form-check-input" type="checkbox" id="createdschoolSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="editDeletedschoolSwitchCheck">edit/Delete</label>
                                <input className="form-check-input" type="checkbox" id="editDeletedschoolSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="approveschoolSwitchCheck">Approve</label>
                                <input className="form-check-input" type="checkbox" id="approveschoolSwitchCheck" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='item mb-5'>
                        <div className="form-check form-switch d-flex justify-content-evenly">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Access<span className='text-danger'>*</span></label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <div className='shadow rounded-3 py-4 bg-white mt-3 px-5' >
                            <p className='text-center fs-5'><i className="fa-solid fas fa-chart-simple"></i> Competition Management</p>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewcompetitionSwitchCheck">View All</label>
                                <input className="form-check-input" type="checkbox" id="viewcompetitionSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewOwncompetitionSwitchCheck">View Own Entries Only</label>
                                <input className="form-check-input" type="checkbox" id="viewOwncompetitionSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="createcompetitionSwitchCheck">Create</label>
                                <input className="form-check-input" type="checkbox" id="createcompetitionSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="editDeletecompetitionSwitchCheck">edit/Delete</label>
                                <input className="form-check-input" type="checkbox" id="editDeletecompetitionSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="markgradecompetitionSwitchCheck">Marking and Grades</label>
                                <input className="form-check-input" type="checkbox" id="markgradecompetitionSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="readOnlycompetitionSwitchCheck">Read Only</label>
                                <input className="form-check-input" type="checkbox" id="readOnlycompetitionSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="editcompetitionSwitchCheck">Edit</label>
                                <input className="form-check-input" type="checkbox" id="editcompetitionSwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="computecompetitionSwitchCheck">Compute</label>
                                <input className="form-check-input" type="checkbox" id="computecompetitionSwitchCheck" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='item mb-5'>
                        <div className="form-check form-switch d-flex justify-content-evenly">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Access<span className='text-danger'>*</span></label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <div className='shadow rounded-3 py-4 bg-white mt-3 px-5' >
                            <p className='text-center fs-5'><i className="fa-solid fa-user-graduate"></i> Participant Management</p>
                            <div className="form-check form-switch d-flex justify-content-between px-5  mb-3">
                                <label className="form-check-label" htmlFor="viewdparticipantManagwitchCheck">View All</label>
                                <input className="form-check-input" type="checkbox" id="viewdparticipantManagwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="createdparticipantManagwitchCheck">Create</label>
                                <input className="form-check-input" type="checkbox" id="createdparticipantManagwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="editDeletedparticipantManagwitchCheck">edit/Delete</label>
                                <input className="form-check-input" type="checkbox" id="editDeletedparticipantManagwitchCheck" />
                            </div>
                            <div className="form-check form-switch d-flex justify-content-between px-5 mb-3">
                                <label className="form-check-label" htmlFor="approveparticipantManagwitchCheck">Approve</label>
                                <input className="form-check-input" type="checkbox" id="approveparticipantManagwitchCheck" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='d-flex justify-content-end'>
                        <button type="button" className="btn btn-cancel px-4 mt-3 "><i className="fa-solid fas fa-ban me-3"></i> <span>Cancel</span></button>
                        <button type="button" className="btn btn-submit px-4 mt-3 ms-3"><i className="fa-solid fas fa-check me-3"></i> <span>Submit</span></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddRole