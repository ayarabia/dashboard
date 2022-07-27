
import React from 'react'

import FilterModal from '../../Modals/filter modal/FilterModal'
import ViewOptionModal from '../../Modals/vire options modal/ViewOptionModal'
import { Link} from 'react-router-dom';
import './Pending.css'

const PendingPartnersCompetitionDate = () => {
    return (
        <div className=' overflow-hidden w-100 '>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <h2 className='text-main'>Pending Partners Competition Date</h2>
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
                            content: ["Description", "Competition Start", "Competition End ", "Country Partners", "Format", "Rounds", "Tags", "Levels", "Awards", "Status"]
                        }} />

                        <FilterModal filterby={[{ name: "Format", content: ["local", "global"] }, { name: "Tag", content: ["Easy", "Hard"] }, { name: "Status", content: ["Approved", "Pending"] }]} />


                    </div>
                </div>

                <div className='d-flex justify-content-between mt-2 align-items-center'>
                    <div className='d-flex'>
                        <Link className='add-btn shadow-sm py-1 px-3 me-3 text-decoration-none' to={'/dashboard/manage-competitions/add-competition'}> <i className="fa-solid fa-check me-2"></i>Mass Approve</Link>
                        

                        <button className='delete-btn shadow-sm py-1 px-3 me-3'><i className="fa-solid fa-xmark me-2"></i> Mass Reject</button>
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
                                    <td><input type='checkbox'></input></td>
                                    <td>Competition Name</td>
                                    <td>Partners</td>
                                    <td> Country</td>
                                    <td> Organisation</td>
                                    <td> Registration Date</td>
                                    <td>Competition Date</td>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><input type='checkbox'></input></td>
                                    <td >Lorem, ipsum.
                                        <div className='competiton_icons'>
                                      
                             

                                            <i className="fa-solid fa-check me-2"></i>
                                            <i className="fa-solid fa-xmark me-2" ></i>
                                           
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td className=''>020/05/5 13:00</td>
                                    <td className=''>2020/05/5 13:00</td>
                                    <td>3</td>
                                    <td>local</td>
                                    
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingPartnersCompetitionDate