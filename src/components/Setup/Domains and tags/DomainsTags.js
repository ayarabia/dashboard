import React from 'react'
import AddDomainModal from '../../Modals/add domain modal/AddDomainModal'
import ApproveModal from '../../Modals/approvemodal/ApproveModal'
import DeleteModal from '../../Modals/delete modal/DeleteModal'
import EditModal from '../../Modals/edit modal/EditModal'
import FilterModal from '../../Modals/filter modal/FilterModal'
import ViewOptionModal from '../../Modals/vire options modal/ViewOptionModal'
import './domainstags.css'

const DomainsTags = () => {
    return (
        <div className='schools overflow-hidden w-100 domain'>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <h2 className='text-main'>Domains and Tags</h2>
                <div className='d-flex justify-content-end align-items-center mb-3'>
                    
                    <div className='options me-4'>
                        <button className="btn  dropdown-toggle option-dropdown ms-2" type="button" data-bs-toggle="modal" data-bs-target="#viewOptionsModal" >
                            View Options
                        </button>
                        <button className="btn dropdown-toggle ms-2 option-dropdown" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
                            Filter
                        </button>

                        <ViewOptionModal columns={{
                            name: "Columns",
                            content: [ "Created By", "Last Modified By", "Status "]
                        }} />

                        <FilterModal filterby={[ { name: "Domain", content: ["Egypt", "China", "USA"] }, { name: "Status", content: ["Approved", "Pending"] }]} />


                    </div>
                </div>

                <div className='d-flex justify-content-between mt-2 align-items-center'>
                    <div className='d-flex'>
                        <button className='add-btn shadow-sm py-1 px-3 me-3' data-bs-toggle="modal" data-bs-target="#addDomainModal"><i className='fas fa-plus'></i>Add New Domain/Tag</button>
                        <AddDomainModal />
                        <button className='approve-btn shadow-sm py-1 px-3 me-3'><i className="fa-solid fa-check"></i> Mass Approve</button>
                        <button className='delete-btn shadow-sm py-1 px-3 me-3'><i className='fas fa-trash'></i> Mass Delete</button>
                    </div>
                    <div className='border-b-main'>
                        <i className='fas fa-magnifying-glass text-main'></i>
                        <input className='input-transparent px-5 ' type="text" placeholder='Search for Domain and tags...' />
                    </div>
                </div>
                <div className='mt-3 position-relative'>
                    <div className='overflow-auto'>
                        <table className='w-100 '>
                            <thead className='bg-main'>
                                <tr>
                                    <td></td>
                                    <td>Domain</td>
                                    <td>Topic</td>
                                    <td>Tag</td>
                                    <td>Created By</td>
                                    <td>Last Modified By</td>
                                    <td>Status</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className='approved_icons'>Lorem, ipsum.
                                        <div className='domains__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                            <EditModal editData={{ type: "domain", content: ["Domain Name"] }} />
                                            <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{ type: "a Domain", content: "Lorem, ipsum." }} />
                                           
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn approved'>Approved</span></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='approved_icons'>Lorem, ipsum.
                                        <div className='domains__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                            <EditModal editData={{ type: "domain", content: ["Domain Name"] }} />
                                            <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{ type: "a Domain", content: "Lorem, ipsum." }} />
                                           
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn approved'>Approved</span></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='approved_icons'>Lorem, ipsum.
                                        <div className='domains__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                            <EditModal editData={{ type: "domain", content: ["Domain Name"] }} />
                                            <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{ type: "a Domain", content: "Lorem, ipsum." }} />
                                           
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn approved'>Approved</span></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='approved_icons'>Lorem, ipsum.
                                        <div className='domains__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                            <EditModal editData={{ type: "domain", content: ["Domain Name"] }} />
                                            <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{ type: "a Domain", content: "Lorem, ipsum." }} />
                                            <i className='fas fa-check me-2' data-bs-toggle="modal" data-bs-target="#approveModal"></i>
                                            <ApproveModal approveData={{ type: "a domain", content: "Lorem, ipsum." }} />
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn pending'>Pending</span></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className='approved_icons'>Lorem, ipsum.
                                        <div className='domains__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                            <EditModal editData={{ type: "domain", content: ["Domain Name"] }} />
                                            <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{ type: "a Domain", content: "Lorem, ipsum." }} />
                                            <i className='fas fa-check me-2' data-bs-toggle="modal" data-bs-target="#approveModal"></i>
                                            <ApproveModal approveData={{ type: "a domain", content: "Lorem, ipsum." }} />
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn pending'>Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainsTags