import React, { useState } from "react";
import Service from "../../axios/services";
function AddTaskModal({getTasksData}) {
  const [loading, setLoading] = useState(false);
  const [taskInfomation, setTaskInfomation] = useState({});
  function handleCloseModal() {
    document.getElementById("addTaskModal").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
    document.querySelector("body").classList.remove("modal-open");
    document.querySelector("body").style = "";
}
  function handlOnChange(e) {
    let myData = { ...taskInfomation };
    myData[e.target.name] = e.target.value;
    setTaskInfomation(myData);

}
const formSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
 Service.createTask(taskInfomation)
              .then(({ data }) => {
                  if (data) {
                      setLoading(false);
                      handleCloseModal();
                      getTasksData()
                           }
                
              })
              .catch((error) => {
                
                  setLoading(false);
              });



}
  return (
    <div
      className="modal fade"
      id="addTaskModal"
      tabIndex={-1}
      aria-labelledby="addTaskModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content px-5">
          <div className="modal-header d-block">
            <h5 className="text-center">Add Task </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body rounded-3 shadow-sm mb-3  py-4 px-5">
            <form action="">
              <h4 className="w-100 text-center mt-0 mb-3 text-main">User 1</h4>
              {/* {errorlist && <p className='text-danger w-100 text-center'>{errorlist[0]}</p>} */}
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
                    Task Identifier
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
              <i className="fa-solid fa-floppy-disk me-3"></i>{" "}
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

export default AddTaskModal;
