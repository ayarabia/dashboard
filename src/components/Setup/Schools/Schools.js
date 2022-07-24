import axios from './../../axios/axios'
import React, { useEffect, useState } from 'react'
import AddParticipatnModal from '../../Modals/add participant modal/AddParticipatnModal'
import AddTeacherModal from '../../Modals/add teacher modal/AddTeacherModal'
import DeleteModal from '../../Modals/delete modal/DeleteModal'
import FilterModal from '../../Modals/filter modal/FilterModal'
import ViewOptionModal from '../../Modals/vire options modal/ViewOptionModal'
import './schools.css'
import AddSchoolModal from '../../Modals/add school modal/AddSchoolModal'
import UpdateSchoolModal from '../../Modals/update school modal/UpdateSchoolModal'

const Schools = () => {
    const [deleteId, setdeleteId] = useState(0);
    const [updateData, setupdateData] = useState({});
    const [schoolsData, setSchoolsData] = useState([]);

    const getSchoolsData = async () => {
        let { data } = await axios.get("/api/schools");
        setSchoolsData(data)
    }

    useEffect(() => {
        getSchoolsData();

    }, [])

    const handleDelete = (id) => {
        setdeleteId(id)
    }

    const handleUpdate = (item) => {
        setupdateData({ name: item.name, email: item.email, address: item.address, postal_code: item.postal_code, phone: item.phone, country_id: item.country_id, is_tution_centre: item.is_tution_centre });
        setdeleteId(item.id)
    }

    return (
        <div className='schools overflow-hidden'>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <h2 className='text-main'>Schools</h2>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='status d-flex'>
                        <div className='pending-item rounded-3 shadow px-4 py-2 bg-white text-center me-3'>
                            <i className="fa-solid fa-clock-rotate-left fa-2x"></i>
                            <span className='d-block fs-4 fw-bold'>  11</span>
                            <p className='mb-0'>Pending Schools</p>
                        </div>
                        <div className='total-item rounded-3 shadow px-4 py-2 bg-white text-center me-3'>
                            <i className="fa-solid fa-school fa-2x"></i>
                            <span className='d-block fs-4 fw-bold'> 100</span>
                            <p className='mb-0'>Total Schools</p>
                        </div>
                    </div>
                    <div className='options me-4'>
                        <button className="btn  dropdown-toggle option-dropdown ms-2" type="button" data-bs-toggle="modal" data-bs-target="#viewOptionsModal" >
                            View Options
                        </button>
                        <button className="btn dropdown-toggle ms-2 option-dropdown" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
                            Filter
                        </button>

                        <ViewOptionModal columns={{
                            name: "Columns",
                            content: ["Address", "Phone Number", "Submitted By", "Approved By", "Rejected By", "Last Modified By", "Status "]
                        }} />

                        <FilterModal filterby={[{ name: "School/Tuition", content: ["School", "Tuition"] }, { name: "Country", content: ["Egypt", "China", "USA"] }, { name: "Status", content: ["Disabled", "Enabled"] }]} />


                    </div>
                </div>

                <div className='d-flex justify-content-between mt-2 align-items-center'>
                    <div className='d-flex'>
                        <button className='add-btn shadow-sm py-1 px-3 me-3' data-bs-toggle="modal" data-bs-target="#addSchoolModal"><i className='fas fa-plus'></i> Add New School</button>
                        <AddSchoolModal getSchoolsData={getSchoolsData} />
                        <button className='approve-btn shadow-sm py-1 px-3 me-3'><i className="fa-solid fa-check"></i> Mass Approve</button>
                        <button className='delete-btn shadow-sm py-1 px-3 me-3'><i className='fas fa-trash'></i> Mass Delete</button>
                    </div>
                    <div className='border-b-main'>
                        <i className='fas fa-magnifying-glass text-main'></i>
                        <input className='input-transparent px-5 ' type="text" placeholder='Search for Schools' />
                    </div>
                </div>
                <div className='mt-3 position-relative'>
                    <div className='overflow-auto'>
                        <table className='w-100 '>
                            <thead className='bg-main'>
                                <tr>
                                    <td></td>
                                    <td>School/Tuition</td>
                                    <td>Country</td>
                                    <td>Email</td>
                                    <td>Teachers</td>
                                    <td>Phone Number   </td>
                                    <td>Address</td>
                                    <td>Postal Code</td>
                                    <td>Province/State</td>
                                    <td>Created By</td>
                                    <td>Approved By</td>
                                    <td>Rejected By</td>
                                    <td>Last Modified By</td>
                                    <td>Status</td>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    schoolsData && schoolsData.map((item, idx) => (
                                        <tr key={idx}>
                                            <td>{item.id}</td>
                                            <td className='approved_icons'>{item.name}
                                                <div className='school__icons'>
                                                    <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#updateSchoolModal" onClick={() => handleUpdate(item)}></i>
                                                    <UpdateSchoolModal deleteId={deleteId} getSchoolsData={getSchoolsData} updateData={updateData} />
                                                    <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => handleDelete(item.id)}></i>
                                                    <DeleteModal id={deleteId} deleteData={{ type: "a school", content: "Lorem, ipsum.", deletePoint: `/api/schools/` }} fetchData={getSchoolsData} />
                                                    <i className="fa-solid fa-user-plus me-2 " data-bs-toggle="modal" data-bs-target="#addOrgParticipant"></i>
                                                    <AddParticipatnModal />
                                                    <i className="fa-solid fa-user-ninja" data-bs-toggle="modal" data-bs-target="#addTeacherModal"></i>
                                                    <AddTeacherModal />
                                                </div>
                                            </td>
                                            <td>{item.country_id}</td>
                                            <td>{item.email}</td>
                                            <td></td>
                                            <td>{item.phone}</td>
                                            <td>{item.address}</td>
                                            <td>{item.postal_code}</td>
                                            <td>{item.province}</td>
                                            <td>{item.created_by} at {item.created_at}</td>
                                            <td>{item.approved_by} at {item.approved_at}</td>
                                            <td></td>
                                            <td>{item.updated_by} at {item.updated_at}</td>
                                            <td>{item.state}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schools