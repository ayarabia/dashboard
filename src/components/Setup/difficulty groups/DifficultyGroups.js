import React, { useEffect, useState } from "react";
import Service from "../../axios/services";
import AddDifficultyGroupsmodal from "../../Modals/add defficulty groups/AddDifficultyGroupsmodal";
import DeleteModal from "../../Modals/delete modal/DeleteModal";
import EditDifficultyGroups from "../../Modals/ecit DifficultyGroups/EditDifficultyGroups";
import EditModal from "../../Modals/edit modal/EditModal";
import FilterModal from "../../Modals/filter modal/FilterModal";
import ViewOptionModal from "../../Modals/vire options modal/ViewOptionModal";

const DifficultyGroups = () => {
  const [difficultyGroups, setDifficultyGroups] = useState([]);
  const [deleteId, setdeleteId] = useState(0);
  const [updateData, setupdateData] = useState({});
  const getDifficultyGroups = () => {
    Service.getDifficultyGroups()
      .then((response) => {
        let data = response.data.data;
        setDifficultyGroups(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getDifficultyGroups();
  }, []);
  const handleDelete = (id) => {
    setdeleteId(id);
  };

  const handleUpdate = (item) => {
  
   setupdateData(
 {
        "name":item.name,
        "has_default_marks": item.has_default_marks
        ,
        "levels": {
            "0": {
                "name": "easy",
                "correct_points": 5,
                "wrong_points": 0,
                "blank_points": 2
            },
            "1": {
                "name": "meduim",
                "correct_points": 5,
                "wrong_points": 0,
                "blank_points": 2
            },
            "2": {
                "name": "hard",
                "correct_points": 5,
                "wrong_points": 0,
                "blank_points": 2
            }
        }
    });
    console.log(item.uuid);
    setdeleteId(item.uuid);
  };

  return (
    <div className="schools overflow-hidden w-100 ">
      <div className="flex-grow-1 bg-main-content py-5 px-3 overflow-hidden">
        <h2 className="text-main">Difficulty Groups</h2>
        <div className="d-flex justify-content-end align-items-center mb-3">
          <div className="options me-4">
            <button
              className="btn  dropdown-toggle option-dropdown ms-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#viewOptionsModal"
            >
              View Options
            </button>
            <button
              className="btn dropdown-toggle ms-2 option-dropdown"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#filterModal"
            >
              Filter
            </button>

            <ViewOptionModal
              columns={{
                name: "Columns",
                content: ["Created By", "Approved By", "Status"],
              }}
            />

            <FilterModal
              filterby={[{ name: "Status", content: ["Approved", "Pending"] }]}
            />
          </div>
        </div>

        <div className="d-flex justify-content-between mt-2 align-items-center">
          <div className="d-flex">
            <button
              className="add-btn shadow-sm py-1 px-3 me-3"
              data-bs-toggle="modal"
              data-bs-target="#addDiffModal"
            >
              <i className="fas fa-plus me-2"></i>Add New Difficulty Group
            </button>

            <button className="delete-btn shadow-sm py-1 px-3 me-3">
              <i className="fas fa-trash"></i> Mass Delete
            </button>
            <AddDifficultyGroupsmodal />
          </div>
          <div className="border-b-main">
            <i className="fas fa-magnifying-glass text-main"></i>
            <input
              className="input-transparent px-5 "
              type="text"
              placeholder="Search for Difficulty Groups"
            />
          </div>
        </div>
        <div className="mt-3 position-relative">
          <div className="overflow-auto">
            <table className="w-100 ">
              <thead className="bg-main">
                <tr>
                  <td></td>
                  <td>
                    <input type="checkbox" className="form-check-input"></input>
                  </td>
                  <td>Name</td>
                  <td>No. of Difficulty</td>
                  <td>Created By</td>
                  <td>Last Modified By</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {difficultyGroups &&
                  difficultyGroups.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                          ></input>
                        </td>
                        <td>
                          {item.name}
                          <div className="competiton_icons">
                            <i
                              className="fa-solid fa-pen-to-square me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#editDiffModal"
                              onClick={() => handleUpdate(item)}
                            ></i>
                            <EditDifficultyGroups  deleteId={deleteId}
                          getData={getDifficultyGroups}
                          updateData={updateData}/>
                            <i
                              className="fa-solid fa-trash me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteModal"
                              onClick={() => handleDelete(item.uuid)}
                            ></i>
                            <DeleteModal
                            id={deleteId}
                            fetchData={getDifficultyGroups}
                              deleteData={{
                                type: "a Difficulty Group",
                                content: "Lorem, ipsum.",
                                deletePoint: `difficulty_groups`,
                              }}
                            />
                            
                          </div>
                        </td>
                        <td>{item.levels_count}</td>
                        <td>{item.created_by}</td>
                        <td>{item.updated_by}</td>

                        <td>
                          <span className="status-btn active-btn">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifficultyGroups;
