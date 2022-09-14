import React ,{useState}from 'react'
import Service from '../../axios/services';
import './editmodal.css'

const EditModal = ({ editData ,getData, updateData, deleteId }) => {
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
    //    axios.put(`/api/organizations/${deleteId}`, addDataState)
       Service.updateDomain(deleteId, addDataState)
            .then(() => {
                    setLoading(false);
                    handleCloseModal();
                    setAddDataState({})
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
        <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Edit {editData.type}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body  px-5">
                        <form action="" >
                            <div className='d-flex justify-content-between flex-wrap rounded-3 shadow-sm p-5' >
                                {
                                    editData.content.map((item, idx) => (
                                        <div className=" item mb-3" key={idx}>
                                            <label htmlFor={`exampleInput${item}`} className="form-label">{item}</label>
                                            {
                                                (item === "Password")||(item === "Confirm Password") ? <input type="password" className="form-control" id={`exampleInput${item}`} aria-describedby="emailHelp" placeholder={`Enter ${item}`} /> :<input type="text" className="form-control" id={`exampleInput${item}`} aria-describedby="emailHelp" placeholder={`Enter ${item}`} />
                                            }
                                           

                                        </div>
                                    ))
                                }
                            </div>
                            <div className='d-flex justify-content-end'>
                            <button
              type="button"
              onClick={formSubmit}
              className="btn btn-confirm px-4 mt-3 "
            >
              <i className="fa-solid fa-floppy-disk me-3"></i>{" "}
              <span>
                {loading ? <i className="fas fa-spinner  fa-spin"></i> : "Save"}
              </span>
            </button>
                             
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal