import React, { useState } from "react";
import "./editmodal2.css";
import Service from "../../axios/services";
import * as yup from 'yup';
const EditModal2 = ({ editData, getData, updateData, deleteId }) => {
  const [addDataState, setAddDataState] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(updateData);
  function handelOnChange(e) {
    let myData = { ...updateData };
    myData[e.target.name] = e.target.value;
    delete myData.approved_at;
    delete myData["created_by"];
    setAddDataState(myData);
   seterrorlist(null);
  }
  const [errorlist, seterrorlist] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().required(),
   class: yup.string().required(),
    grade: yup.string().required(),
  
   })
  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isValid = await schema.validate(addDataState).catch((error) => seterrorlist(error.errors))
   setLoading(false);
   if(isValid) {
   console.log(addDataState);
    Service.updateParticipants(deleteId, addDataState)
      .then(() => {
        setLoading(false);
        handleCloseModal();
        setAddDataState({});
        getData();
      })
      .catch((error) => {
        setLoading(false);
      });}
  };

  function handleCloseModal() {
    document.getElementById("editOrgModal").classList.remove("show", "d-block");
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.classList.remove("modal-backdrop"));
    document.querySelector("body").classList.remove("modal-open");
    document.querySelector("body").style = "";
  }

  return (
    <div
      className="modal fade"
      id="editModal2"
      tabIndex={-1}
      aria-labelledby="editModal2Label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-block">
            <h5 className="text-center">Edit {editData.type}</h5>
            {errorlist && <p className='text-danger w-100 text-center'>{errorlist[0]}</p> }
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body  px-5">
            <form action="">
              <div className="d-flex justify-content-between flex-wrap rounded-3 shadow-sm p-5">
                {editData.content.map((item, idx) => (
                  <div className=" item mb-3" key={idx}>
                    <label
                      htmlFor={`exampleInput${item}`}
                      className="form-label"
                    >
                      {item}
                    </label>
                    {item === "Password" || item === "Confirm Password" ? (
                      <input
                        // onChange={handelOnChange}
                        type="password"
                        className="form-control"
                        id={`exampleInput${item}`}
                        aria-describedby="emailHelp"
                        placeholder={`Enter ${item}`}
                      />
                    ) : (
                      <input
                      onChange={handelOnChange}
                        type="text"
                        className="form-control"
                        id={`exampleInput${item}`}
                        aria-describedby="emailHelp"
                        placeholder={`Enter ${item}`}
                        name={item}
                      />
                    )}
                  </div>
                ))}
                
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  onClick={formSubmit}
                  className="btn btn-confirm px-4 mt-3 "
                >
                  <i className="fa-solid fa-floppy-disk me-3"></i>{" "}
                  <span>
                    {loading ? (
                      <i className="fas fa-spinner  fa-spin"></i>
                    ) : (
                      "Save"
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal2;
