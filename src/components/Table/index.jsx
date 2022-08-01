import React ,{useState} from 'react'
import UpdateTaskModal from '../Modals/updateTaskModal';
import DeleteModal from '../Modals/delete modal/DeleteModal'
function TableComponent(props) {
const {rows,columns,getTasks}=props
const [updateTask,setUpdateTask]=useState({})
const [updatedId, setUpdatedId] = useState(0);

const handleUpdate = (row) => {
  setUpdateTask({ identifier: row.identifier, title: row.title, description: row.description });
  setUpdatedId(row.id)

}
const handleDelete = (id) => {
  setUpdatedId(id)
  
}
  return (
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
          {rows.map((row) => {
            return (
              <tr index={row.id}>
                <td>{row.id}</td>
                <td><input type="checkbox" className='form-check-input'   id = {row.id}></input></td>
                <td>{row.identifier}
                
                <div className='users__icons'>
                        <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#updateTaskModal" onClick={() => handleUpdate(row)}></i>
                       <UpdateTaskModal     deletedItem={updatedId} updateTask={updateTask} getTasks={getTasks}/>
                        <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"  onClick={()=> handleDelete(row.id)}></i>
                        <DeleteModal id={updatedId} deleteData={{ type: "a task", content:row.title, deletePoint: `/api/tasks/` }} fetchData={getTasks} />
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
  )
}

export default TableComponent