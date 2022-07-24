import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteModal from '../../Modals/delete modal/DeleteModal'
import FilterModal from '../../Modals/filter modal/FilterModal'
import ViewOptionModal from '../../Modals/vire options modal/ViewOptionModal'
import axios from './../../axios/axios'
import './roles.css'

const Roles = () => {
    const [deleteId, setdeleteId] = useState(0);
    const [updateData, setupdateData] = useState({});
    const [rolesData, setrolesData] = useState([]);

    const getRolesData = async () => {
        let { data } = await axios.get("/api/roles");
        setrolesData(data)
    }

    useEffect(() => {
        getRolesData();
    }, [])

    const handleDelete = (id) => {
        setdeleteId(id)
    }

    const handleUpdate = (item) => {
        console.log(item);
        setupdateData({ name: item.name, email: item.email, address: item.address, person_in_charge_name: item.person_in_charge_name, phone: item.phone, country_id: item.country_id, billing_address: item.billing_address, shipsping_address: item.shipping_address });
        setdeleteId(item.id)
    }

    return (
        <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden roles'>

            <h2 className='text-main'>Roles</h2>
            <div className='options d-flex justify-content-end'>
                <button className="btn  dropdown-toggle option-dropdown ms-2" type="button" data-bs-toggle="modal" data-bs-target="#viewOptionsModal" >
                    View Options
                </button>
                <button className="btn dropdown-toggle ms-2 option-dropdown" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
                    Filter
                </button>
                <ViewOptionModal columns={{
                    name: "Columns",
                    content: ["Description", "Created By", "Last Modified By"]
                }} />

                <FilterModal filterby={[{ name: "Role", content: ["Admin", "Teacher", "Country Partner"] }]} />

            </div>
            <div className='d-flex justify-content-between mt-2 align-items-center'>
                <div className='d-flex'>
                    <Link className='add-btn shadow-sm py-1 px-3 text-decoration-none' to={'/dashboard/manage-users/add-role'}><i className='fas fa-plus'></i> Add New Role</Link>

                    <button className='add-btn shadow-sm py-1 px-3 ms-3'><i className="fas fa-file-import"></i> Export CSV</button>

                    <button className='delete-btn shadow-sm py-1 px-3 ms-3'><i className='fas fa-trash'></i> Mass Delete</button>
                </div>
                <div className='border-b-main'>
                    <i className='fas fa-magnifying-glass text-main'></i>
                    <input className='input-transparent px-5 ' type="text" placeholder='Search for Organisation' />
                </div>
            </div>
            <div className='mt-3 position-relative'>
                <div className='overflow-auto'>
                    <table className='w-100 '>
                        <thead className='bg-main'>
                            <tr>
                                <td></td>
                                <td>Role</td>
                                <td>Description</td>
                                <td>Users</td>
                                <td>Created By</td>
                                <td>Last Modified By</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rolesData && rolesData.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.name}
                                            <div className='roles__icons'>

                                                <i   onClick={() => handleDelete(item.id)} className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                                <DeleteModal id={deleteId} deleteData={{ type: "a Role", content: item.name , deletePoint: `/api/roles/` }} fetchData={getRolesData}  />

                                            </div>
                                        </td>
                                        <td>{item.description}</td>
                                        <td>{item.uuid}</td>
                                        <td>{item.created_at} by {item.created_by}  </td>
                                        <td>{item.updated_at} by {item.updated_by}  </td>
                                
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Roles