import React ,{ useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../axios/baseInstanse'
import Service from "../axios/services";
import ApproveModal from '../Modals/approvemodal/ApproveModal'
import UpdateUserModal from '../Modals/update user modal/UpdateUserModal'
import DeleteModal from '../Modals/delete modal/DeleteModal'
function UsersTable() {
    const [deleteId, setdeleteId] = useState(0);
    const [updateData, setupdateData] = useState({});
    const [userName, setuserName] = useState(null)
    const [usersData, setusersData] = useState([]);
    const [checked, setchecked] = useState(false);
    const [pageNumber, setpageNumber] = useState(1);

    // const getUsersData = async () => {
    //     let { data } = await axios.get("/api/users");
    //     data = data.map(item => {
    //       item.checked = false;
    //       return item;
    //     })
    //     setusersData(data)
    //   }
      const getUsersData = () => {
        Service.getUsersData()
          .then((response) => {
            let data=response.data.data
          console.log(data);
            data = data.map(item => {
              item.checked = false;
              return item;
            })
            setusersData(data)
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      };
      useEffect(() => {
        getUsersData();
    
      }, [])
      const handleDelete = (id,name) => {
        setdeleteId(id)
        setuserName(name)
      }
    
      const handleUpdate = (item) => {
       
        setupdateData({ name: item.name, email: item.email, username: item.username, password: item.password, phone: item.phone, country_id: item.country_id, role_id: item.role_id });
        setdeleteId(item.id)
      }
      const handleMasterCheck = (e) => {
        setchecked(e.target.checked)
        usersData.map(item => {
          item.checked = e.target.checked;
          return item;
        })
        setusersData([...usersData])
      }
    
      const handleItemCheck = (e) => {
        let id = Number(e.target.id);
        usersData.map(item => {
          if (item.id === id) {
            item.checked = e.target.checked;
          }
          return item;
        }
        )
        setusersData([...usersData])
      }
    
      const handleMassDelete = async () => {
        let ids = usersData.filter(item => item.checked === true).map(item => item.id);
        ids.forEach(async (id) => {
          await axios.delete(`/api/users/${id}`);
        })
        await getUsersData();
        window.location.reload();
      }
    const getRole = (role_id)=>{
        return role_id === 1 ? "admin" : "user" ;
      }
    
      const getCoutry = (country_id)=>{
        if(country_id === 1 || country_id ===2 ){
          return "Egypt"
        }
      }
  return (
    <div className='mt-3 position-relative'>
        <div className='overflow-auto'>
          <table className='w-100 '>
            <thead className='bg-main'>
              <tr>
                <td></td>
                <td><input type="checkbox"
                className='form-check-input'
                checked={checked}
                onChange={handleMasterCheck}
                ></input></td>
                <td>Name</td>
                <td>Role</td>
                <td>Country</td>
                <td>Permission Overridden?</td>
                <td>Email</td>
                <td>Created By</td>
                <td>Last Modified By</td>
                <td>Last Login</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {
                usersData && usersData.slice((pageNumber-1)*5,5*(pageNumber-1) + 5).map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><input type="checkbox" className='form-check-input' checked={item.checked} onChange = {handleItemCheck} id = {item.id}></input></td>
                    <td>{item.name}
                      <div className='users__icons'>
                        <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#updateUserModal" onClick={() => handleUpdate(item)}></i>
                        <UpdateUserModal  deleteId={deleteId} getUsersData={getUsersData} updateData={updateData} />
                        <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=> handleDelete(item.id,item.name)}></i>
                        <DeleteModal id={deleteId} deleteData={{ type: "a user", content: userName, deletePoint: `/api/users/` }} fetchData={getUsersData} />
                        <i className="fa-solid fa-user-check me-2 enabled-icon" data-bs-toggle="modal" data-bs-target="#approveModal"></i>
                        <ApproveModal approveData={{ type: "a user", content: item.name }} />
                        <NavLink className='text-black' to={"/dashboard/manage-users/user-permissions"}>
                          <i className="fa-solid fa-eye me-2"></i>
                        </NavLink>
                      </div>
                    </td>
                    <td>{getRole(item.role_id)}</td>
                    <td>{getCoutry(item.country_id)}</td>
                    <td>{item.permission_by_role}</td>
                    <td>{item.email}</td>
                    <td>{item.created_by}</td>
                    <td>{item.updated_by} </td>
                    <td>{item.login}</td>
                    <td>{item.status}</td>
                    {/* <td><span className="status-btn disabled">Disabled</span></td> */}
                  </tr>
                ))
              }



            </tbody>
          </table>
        </div>
      </div>
  )
}

export default UsersTable