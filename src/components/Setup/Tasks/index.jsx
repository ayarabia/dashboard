import React, { useEffect, useState } from 'react'
import FilterModal from '../../Modals/filter modal/FilterModal'
import ViewOptionModal from '../../Modals/vire options modal/ViewOptionModal'
import axios from '../../axios/baseInstanse'
import Service from "../../axios/services";
import Card from "../../card/card";
import TableComponent from '../../Table'
import AddTaskModal from '../../Modals/AddTaskModal'
import UpdateTaskModal from '../../Modals/updateTaskModal';
import DeleteModal from '../../Modals/delete modal/DeleteModal'
function Tasks() {

const [updateTask,setUpdateTask]=useState({})
const [updatedId, setUpdatedId] = useState(0);

const handleUpdate = (row) => {
  setUpdateTask({ identifier: row.identifier, title:row.title, description: row.description });
  setUpdatedId(row.uuid)

}
const handleDelete = (id) => {
  setUpdatedId(id)
  
}
const columns=["Task Identifier","Task Title","Discreption","No. of Language(s)","Domain"]
   
const [tasks, setTasks] = useState([]);
    const [pageNumber, setpageNumber] = useState(1);
    var maxPage = Math.ceil(tasks.length / 5);
 const getTasks = () => {
      Service.getTasks()
        .then((response) => {
          let data=response.data.data
          console.log(data);
          data = data.map(item => {
            item.checked = false;
            return item;
          })
          setTasks(data)
         
        })
        .catch((e) => {
          console.log(e);
        });
    };
    useEffect(() => {
        getTasks();
  
    }, [])
  
  
    const handleMassDelete = async () => {
      let ids = tasks.filter(item => item.checked === true).map(item => item.id);
      ids.forEach(async (id) => {
        await axios.delete(`/api/users/${id}`);
      })
      await getTasks();
      window.location.reload();
    }
    const handlePrev = async () => {
      if (pageNumber - 1 === 0) setpageNumber(1);
      else setpageNumber(pageNumber - 1)
      await getTasks();
    }
    const handleNext = async () => {
      if (pageNumber + 1 > maxPage) setpageNumber(maxPage);
      else setpageNumber(pageNumber + 1)
      await getTasks();
    }
    const handlePage = async (page) => {
      setpageNumber(page)
      await getTasks();
    }
  
    return (
      <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
  
        <h2 className='text-main'>Tasks</h2>
        <div className='d-flex justify-content-between align-items-center mb-3'>
        <div className="status d-flex">
            <Card
            iconType ="fa-solid"
              iconName="fa-chart-simple"

              heading="SASMO 2022"
              subHeading="Competition"
              color="#706fa7"
            ></Card>
            <Card
             iconType ="fa-solid"
              iconName="fa-copy"
              heading="SASMO 2022 (3)"
              subHeading="Collection"
              color="#F3A867"
            ></Card>
          
            
          </div>
        <div className='options d-flex justify-content-end'>
          <button className="btn  dropdown-toggle option-dropdown ms-2" type="button" data-bs-toggle="modal" data-bs-target="#viewOptionsModal" >
            View Options
          </button>
          <button className="btn dropdown-toggle ms-2 option-dropdown" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
            Filter
          </button>
          <ViewOptionModal columns={{
            name: "Columns",
            content: ["Address", "Phone Number", "No. of Partners", "Person-in-charge", "Billing Address", "Shipping Address", "Created By", "Last Modified By"]
          }} />
  
          <FilterModal filterby={[{ name: "Role", content: ["Admin", "Teacher", "Country Partner"] }, { name: "Country", content: ["Egypt", "China", "USA"] }, { name: "Status", content: ["Disabled", "Enabled"] }]} />
  
        </div>
        </div>
        <div className='d-flex justify-content-between mt-2 align-items-center'>
          <div className='d-flex'>
            <button className='add-btn shadow-sm py-1 px-3' data-bs-toggle="modal" data-bs-target="#addTaskModal"><i className='fas fa-plus'></i> Add New Task</button>
          
            <AddTaskModal getTasksData={getTasks} />
            <button className='approve-btn shadow-sm py-1 px-3 ms-3'><i className="fa-solid fa-plus"></i> Add To Competition and Collection
</button>
            <button className='approve-btn shadow-sm py-1 px-3 ms-3'><i className="fas fa-clipboard-list me-2"></i>Mass Disable User</button>
            <button className='delete-btn shadow-sm py-1 px-3 ms-3' onClick={handleMassDelete}><i className='fas fa-trash'></i> Mass Delete</button>
          </div>
          <div className='border-b-main'>
            <i className='fas fa-magnifying-glass text-main'></i>
            <input className='input-transparent px-5 ' type="text" placeholder='Search for Organisation' />
          </div>
        </div>
        <div className="mt-3 position-relative">
    <div className="overflow-auto">
      <table className="w-100 ">
        <thead className="bg-main">
          <tr>
            <td></td>
            <td><input type="checkBox" className='form-check-input' /></td>
 {columns.map((column)=>{
    return(<td>{column}</td>)
})}
          </tr>
        </thead>
        <tbody>
          {tasks.map((row) => {
            return (
              <tr index={row.id}>
                <td>{row.id}</td>
                <td><input type="checkbox" className='form-check-input'   id = {row.id}></input></td>
                <td>{row.identifier}
                
                <div className='users__icons'>
                        <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#updateTaskModal" onClick={() => handleUpdate(row)}></i>
                       <UpdateTaskModal     deletedItem={updatedId} updateTask={updateTask} getTasks={getTasks}/>
                        <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"  onClick={()=> handleDelete(row.uuid)}></i>
                        <DeleteModal id={updatedId} deleteData={{ type: "a task", content:row.title, deletePoint: `tasks` }} fetchData={getTasks} />
                        </div>
                </td>
                <td>{row. title}</td>
                <td>{row.description}</td>
                <td>1/1</td>
                <td>Domain</td>
             
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
      
        <div className='options d-flex justify-content-end'>
                <button className='btn py-1 px-2 wrap' onClick={handlePrev}><i class="fa-solid fa-angle-left fa-xs"/></button>
                {Array.from(Array(maxPage).keys()).map((item, idx) => (
                  <button className={`btn py-1 px-1 wrap ${pageNumber === idx + 1 ? 'chossedPage' : ''}`} onClick={() => handlePage(idx + 1)}>{idx + 1}</button>
                ))}
                <button className='btn py-1 px-2 wrap' onClick={handleNext}><i class="fa-solid fa-angle-right  fa-xs"/></button>
        </div>
        <h6 className='d-flex justify-content-center text-main company-name'>Company Name</h6>
        <></>
      </div>
    )
}

export default Tasks