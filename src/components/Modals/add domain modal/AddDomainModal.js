import React from 'react'
import './addDomainmodal.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const AddDomainModal = () => {
    return (
        <div className="modal fade" id="addDomainModal" tabIndex={-1} aria-labelledby="addDomainModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Add Domain and Topic</h5>
                        <i className='fa-solid fa-xmark fa-2x btn-close cursr'  data-bs-dismiss="modal" aria-label="Close"></i>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Domain 1</Tab>
                            <Tab>Domain 2</Tab>
                            <Tab>Domain 3</Tab>
                            <Tab>Domain 4</Tab>
                            <Tab>Domain 5</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 1</h4>
                                    <div className='row px-5 '>
                                        <div className='col-lg-6 mb-5'>
                                            <div className='d-flex '>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                    <label className="form-check-label fs-6" htmlFor="flexRadioDefault1">
                                                        Add Domain and Topic
                                                    </label>
                                                </div>
                                                <div className="form-check ms-4">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label fs-6 " htmlFor="flexRadioDefault2">
                                                        Add Tag
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-5'>
                                            <div className="form-check d-flex justify-content-end ">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label fs-6 ms-3" htmlFor="flexCheckDefault">
                                                    Add Domain Only
                                                </label>
                                            </div>

                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DomainName" className="form-label">Domain</label>
                                                <select id='DomainName' className="form-select" aria-label="Default select example">
                                                    <option selected>New Domain</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DifficultyName" className="form-label">Topic</label>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='text-center'>
                                                    <button type="button" className="btn approve-btn add-topic-btn px-2   "><i className="fa-solid fas fa-plus me-3"></i> <span>Add Topic</span></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another domain</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group2</h4>
                                    <div className='row px-5 '>
                                        <div className='col-lg-6 mb-5'>
                                            <div className='d-flex '>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                    <label className="form-check-label fs-6" htmlFor="flexRadioDefault1">
                                                        Add Domain and Topic
                                                    </label>
                                                </div>
                                                <div className="form-check ms-4">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label fs-6 " htmlFor="flexRadioDefault2">
                                                        Add Tag
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-5'>
                                            <div className="form-check d-flex justify-content-end ">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label fs-6 ms-3" htmlFor="flexCheckDefault">
                                                    Add Domain Only
                                                </label>
                                            </div>

                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DomainName" className="form-label">Domain</label>
                                                <select id='DomainName' className="form-select" aria-label="Default select example">
                                                    <option selected>New Domain</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DifficultyName" className="form-label">Topic</label>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='text-center'>
                                                    <button type="button" className="btn approve-btn add-topic-btn px-2   "><i className="fa-solid fas fa-plus me-3"></i> <span>Add Topic</span></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another domain</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 3</h4>
                                    <div className='row px-5 '>
                                        <div className='col-lg-6 mb-5'>
                                            <div className='d-flex '>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                    <label className="form-check-label fs-6" htmlFor="flexRadioDefault1">
                                                        Add Domain and Topic
                                                    </label>
                                                </div>
                                                <div className="form-check ms-4">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label fs-6 " htmlFor="flexRadioDefault2">
                                                        Add Tag
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-5'>
                                            <div className="form-check d-flex justify-content-end ">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label fs-6 ms-3" htmlFor="flexCheckDefault">
                                                    Add Domain Only
                                                </label>
                                            </div>

                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DomainName" className="form-label">Domain</label>
                                                <select id='DomainName' className="form-select" aria-label="Default select example">
                                                    <option selected>New Domain</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DifficultyName" className="form-label">Topic</label>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='text-center'>
                                                    <button type="button" className="btn approve-btn add-topic-btn px-2   "><i className="fa-solid fas fa-plus me-3"></i> <span>Add Topic</span></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another domain</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 4</h4>
                                    <div className='row px-5 '>
                                        <div className='col-lg-6 mb-5'>
                                            <div className='d-flex '>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                    <label className="form-check-label fs-6" htmlFor="flexRadioDefault1">
                                                        Add Domain and Topic
                                                    </label>
                                                </div>
                                                <div className="form-check ms-4">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label fs-6 " htmlFor="flexRadioDefault2">
                                                        Add Tag
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-5'>
                                            <div className="form-check d-flex justify-content-end ">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label fs-6 ms-3" htmlFor="flexCheckDefault">
                                                    Add Domain Only
                                                </label>
                                            </div>

                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DomainName" className="form-label">Domain</label>
                                                <select id='DomainName' className="form-select" aria-label="Default select example">
                                                    <option selected>New Domain</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DifficultyName" className="form-label">Topic</label>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='text-center'>
                                                    <button type="button" className="btn approve-btn add-topic-btn px-2   "><i className="fa-solid fas fa-plus me-3"></i> <span>Add Topic</span></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another domain</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <h4 className='w-100 text-center mt-0 text-main mb-4'>Difficulty Group 5</h4>
                                    <div className='row px-5 '>
                                        <div className='col-lg-6 mb-5'>
                                            <div className='d-flex '>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                    <label className="form-check-label fs-6" htmlFor="flexRadioDefault1">
                                                        Add Domain and Topic
                                                    </label>
                                                </div>
                                                <div className="form-check ms-4">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label fs-6 " htmlFor="flexRadioDefault2">
                                                        Add Tag
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-5'>
                                            <div className="form-check d-flex justify-content-end ">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label fs-6 ms-3" htmlFor="flexCheckDefault">
                                                    Add Domain Only
                                                </label>
                                            </div>

                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DomainName" className="form-label">Domain</label>
                                                <select id='DomainName' className="form-select" aria-label="Default select example">
                                                    <option selected>New Domain</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className=" item  ">
                                                <label htmlFor="DifficultyName" className="form-label">Topic</label>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='d-flex  align-items-center mb-3'>
                                                    <input type="text" className="form-control w-50 flex-grow-1" id="eDifficultyName" placeholder='Enter Topic' />
                                                    <i className="fa-solid fa-xmark fa-2x cursr ms-2"></i>
                                                </div>
                                                <div className='text-center'>
                                                    <button type="button" className="btn approve-btn add-topic-btn px-2   "><i className="fa-solid fas fa-plus me-3"></i> <span>Add Topic</span></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn approve-btn px-4 mt-3 me-3 "><i className="fa-solid fas fa-plus me-3"></i> <span>Add another domain</span></button>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default AddDomainModal