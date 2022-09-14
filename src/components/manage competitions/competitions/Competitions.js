import React, { useState ,useEffect} from 'react'
import DeleteModal from '../../Modals/delete modal/DeleteModal'
import EditModal from '../../Modals/edit modal/EditModal'
import FilterModal from '../../Modals/filter modal/FilterModal'
import ViewOptionModal from '../../Modals/vire options modal/ViewOptionModal'
import { Link} from 'react-router-dom';
import './competiton.css'
import Service from '../../axios/services'

const Competitions = () => {
    const [competitions, srtCompetitions ] = useState([]);
    const getcompetitionsData= () => {
       Service.getCompetitionsData()
          .then((response) => {
            let data =response.data.data
            srtCompetitions(data)
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
          });
      };
      useEffect(() => {
        getcompetitionsData();
    }, [])
    return (
        <div className=' overflow-hidden w-100 '>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <h2 className='text-main'>Competitions</h2>
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
                        <Link className='add-btn shadow-sm py-1 px-3 me-3 text-decoration-none' to={'/dashboard/manage-competitions/add-competition'}><i className='fas fa-plus me-2 '></i>Add New Competition</Link>
                        

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
                                    <td><input type="checkbox" className='form-check-input'></input></td>
                                    <td>Competition Name</td>
                                    <td>Description</td>
                                    <td>Competition Start</td>
                                    <td>Competition End</td>
                                    <td>Country Partners</td>
                                    <td>Format</td>
                                    <td>Rounds</td>
                                    <td>Tags</td>
                                    <td>Awards</td>
                                    <td>Status</td>   
                                </tr>
                            </thead>
                            <tbody>
                                {competitions&&competitions.map((item)=>{
                                  return (
                                    <tr>
                                    <td>{item.id}</td>
                                    <td><input type="checkbox" className='form-check-input'></input></td>
                                    <td className=''>{item.name}
                                        <div className='competiton_icons'>
                                            <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                            <EditModal editData={{ type: "domain", content: ["Domain Name"] }} />
                                            <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{ type: "a Domain", content: "Lorem, ipsum." }} />
                                            <i className='fas fa-clone me-2'></i>
                                            <i className='fas fas fa-image me-2'></i>
                                            <i className='fas fas fa-pencil me-2'></i>
                                            <i className='fas fas fa-list-check me-2'></i>
                                            <i className='fas  fa-book-bookmark me-2'></i>
                                            <i className='fas  fa-cloud-arrow-up me-2'></i>
                                        </div>
                                    </td>
                                    <td>{item.instructions}</td>
                                    <td >{item.global_competition_start_date}</td>
                                    <td >{item.global_competition_end_date}</td>
                                    <td>3</td>
                                    <td>{item.competition_format}</td>
                                    <td>1,2,3</td>
                                    <td><span>Easy</span><span>Math</span><span>Primary</span></td>
                                    <td>{item.round_awards.length}</td>
                                    <td ><span className='status-btn active-btn'>{item.status}</span></td>
                                </tr>
                                  )  
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competitions