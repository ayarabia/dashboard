import React ,{ useState}from 'react'
import Service from '../../axios/services';
import './edirdiffmodal.css'

const EditDifficultyGroups = ({ getData, updateData,deleteId }) => {
    const [addDataState, setAddDataState] = useState({});
    const [loading, setLoading] = useState(false);
    function getData(e) {
        let myData = { ...updateData };
        myData[e.target.name] = e.target.value;
        delete myData.approved_at
        delete myData['created_by']
        setAddDataState(myData);
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

       Service.updateGroups(deleteId, addDataState)
            .then(() => {
                    setLoading(false);
                    handleCloseModal();
                    getData();

            })
            .catch((error) => {
                setLoading(false);
            });
    }

    function handleCloseModal() {
        document.getElementById("editOrgModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        document.querySelector("body").classList.remove("modal-open");
        document.querySelector("body").style = "";
    }

    return (
        <div className="modal fade" id="editDiffModal" tabIndex={-1} aria-labelledby="editDiffModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Edit Difficulty Group</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
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
                                <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' onChange={getData} />
                            </div>
                            <div className='d-flex justify-content-center mt-4 align-items-center'>
                                <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' onChange={getData}/>
                            </div>
                            <div className='d-flex justify-content-center mt-4 align-items-center'>
                                <i className="fa-solid fa-xmark fa-2x cursr me-2"></i>
                                <input type="text" className="form-control w-50" id="eDifficultyName" placeholder='Enter Difficulty Name' onChange={getData} />
                            </div>
                        </form>
                    </div>
                    <div className='d-flex justify-content-end mb-4'>
                        <button type="button" onClick={formSubmit} className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditDifficultyGroups