import React, { useState } from "react";
import Service from "../../axios/services";
import * as yup from 'yup';
function UpdateTaskModal({getTasks,deletedItem,updateTask}) {
const [loading, setLoading] = useState(false);
 const [ identifier,setIdentifier] = useState(false);
  const [addDataState, setAddDataState] = useState({});
  function handleCloseModal() {
    document.getElementById("updateTaskModal").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
    document.querySelector("body").classList.remove("modal-open");
    document.querySelector("body").style = "";
}
const [errorlist, seterrorlist] = useState(false);
const schema = yup.object().shape({
   title: yup.string().required(),
  identifier: yup.string().required(),
 })
  function handlOnChange(e) {
     let myData = { ...updateTask };
         myData[e.target.name] = e.target.value;
         delete myData.approved_at;
        delete myData["created_by"];
        setAddDataState(myData);
      seterrorlist(null)

}

const formSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const isValid = await schema.validate(addDataState).catch((error) => seterrorlist(error.errors))
 setLoading(false);
 if(isValid) {
Service.updateTask(deletedItem,addDataState)
      .then(() => {
          setLoading(false);
          handleCloseModal();
          getTasks();
       })
      .catch((error) => {
     setLoading(false);
      });
}
  
}
  return (
    <div
      className="modal fade"
      id="updateTaskModal"
      tabIndex={-1}
      aria-labelledby="updateTaskModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content px-5">
          <div className="modal-header d-block">
            <h5 className="text-center">Edit Task </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body rounded-3 shadow-sm mb-3  py-4 px-5">
            <form action="">
             
              {errorlist && <p className='text-danger w-100 text-center'>{errorlist[0]}</p>}
              <div className="row mt-4">
                <div className="col-md-6 col-sm-12">
                  <label htmlFor="taskTitle" className="form-label">
                    Task Title
                  </label>
                </div>
                <div className="col-md-6 col-sm-12">
                  <input
                    type="text"
                    className="form-control text-center"
                    id="taskTitle"
                    placeholder="Task Title"
                    name="title"
                    onChange={handlOnChange}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 col-sm-12">
                  <label htmlFor="taskIdentifier" className="form-label">
                    Task Identifier *
                  </label>
                </div>
                <div className="col-md-6 col-sm-12">
                  <input
                    type="text"
                   className="form-control text-center"
                    id="taskIdentifier"
                    placeholder="Task Identifier"
                    name="identifier"
                    onChange={handlOnChange}
                  />
                 {identifier&& <p>Task Identifier is Required</p>}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 col-sm-12">
                  <label htmlFor="taskDescription" className="form-label">
                    Task Description
                  </label>
                </div>
                <div className="col-md-6 col-sm-12">
                  <textarea
                    type="text"
                    className="form-control text-center"
                    id="taskDescription"
                    placeholder="Task Description"
                    name="description"
                    style={{height: "130px"}}
                    onChange={handlOnChange}
                  >
                  </textarea>
                </div>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <button
              type="button"
              onClick={formSubmit}
              className="btn btn-confirm px-4 mt-3 "
            >
              <i className="fa-solid fa-floppy-disk me-3"></i>
              <span>
                {loading ? <i className="fas fa-spinner  fa-spin"></i> : "Save"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateTaskModal;
