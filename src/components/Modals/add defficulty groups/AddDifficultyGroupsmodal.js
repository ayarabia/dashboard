import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './AddDifficultyGroupsmodal.css'

const AddDifficultyGroupsmodal = () => {
    return (
        <div className="modal fade" id="addDiffModal" tabIndex={-1} aria-labelledby="addDiffModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Add Difficulty Group</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Group 1</Tab>
                            <Tab>Group 2</Tab>
                            <Tab>Group 3</Tab>
                            <Tab>Group 4</Tab>
                            <Tab>Group 5</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 1</h4>
                                    <div className='row px-5 align-items-center'>
                                        <div className='col-lg-6'>
                                            <div className=" item  d-flex align-items-center justify-content-between">
                                                <label htmlFor="DifficultyName" className="form-label">Difficulty Group</label>
                                                <input type="text" className="form-control " id="DifficultyName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="form-check form-switch d-flex justify-content-between px-5  ">
                                                <label className="form-check-label" htmlFor="assignDefaultSwitchCheck">Assign Default Marks</label>
                                                <input className="form-check-input" type="checkbox" id="assignDefaultSwitchCheck" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another difficulty</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 1</h4>
                                    <div className='row px-5 align-items-center'>
                                        <div className='col-lg-6'>
                                            <div className=" item  d-flex align-items-center justify-content-between">
                                                <label htmlFor="DifficultyName" className="form-label">Difficulty Group</label>
                                                <input type="text" className="form-control " id="DifficultyName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="form-check form-switch d-flex justify-content-between px-5  ">
                                                <label className="form-check-label" htmlFor="assignDefaultSwitchCheck">Assign Default Marks</label>
                                                <input className="form-check-input" type="checkbox" id="assignDefaultSwitchCheck" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another difficulty</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 1</h4>
                                    <div className='row px-5 align-items-center'>
                                        <div className='col-lg-6'>
                                            <div className=" item  d-flex align-items-center justify-content-between">
                                                <label htmlFor="DifficultyName" className="form-label">Difficulty Group</label>
                                                <input type="text" className="form-control " id="DifficultyName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="form-check form-switch d-flex justify-content-between px-5  ">
                                                <label className="form-check-label" htmlFor="assignDefaultSwitchCheck">Assign Default Marks</label>
                                                <input className="form-check-input" type="checkbox" id="assignDefaultSwitchCheck" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another difficulty</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 1</h4>
                                    <div className='row px-5 align-items-center'>
                                        <div className='col-lg-6'>
                                            <div className=" item  d-flex align-items-center justify-content-between">
                                                <label htmlFor="DifficultyName" className="form-label">Difficulty Group</label>
                                                <input type="text" className="form-control " id="DifficultyName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="form-check form-switch d-flex justify-content-between px-5  ">
                                                <label className="form-check-label" htmlFor="assignDefaultSwitchCheck">Assign Default Marks</label>
                                                <input className="form-check-input" type="checkbox" id="assignDefaultSwitchCheck" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another difficulty</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 1</h4>
                                    <div className='row px-5 align-items-center'>
                                        <div className='col-lg-6'>
                                            <div className=" item  d-flex align-items-center justify-content-between">
                                                <label htmlFor="DifficultyName" className="form-label">Difficulty Group</label>
                                                <input type="text" className="form-control " id="DifficultyName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="form-check form-switch d-flex justify-content-between px-5  ">
                                                <label className="form-check-label" htmlFor="assignDefaultSwitchCheck">Assign Default Marks</label>
                                                <input className="form-check-input" type="checkbox" id="assignDefaultSwitchCheck" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 align-items-center'>
                                        <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                        <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' />
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another difficulty</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default AddDifficultyGroupsmodal