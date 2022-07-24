import React, { useEffect, useState } from 'react'
import FilterModal from '../../Modals/filter modal/FilterModal'
import ViewOptionModal from '../../Modals/vire options modal/ViewOptionModal'
import axios from '../../axios/baseInstanse'
import './user.css'
import AddUserModal from '../../Modals/add user modal/AddUserModal'
import UsersTable from '../../UsersTable'
import Service from "../../axios/services";
const Users = () => {

  const [usersData, setusersData] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  var maxPage = Math.ceil(usersData.length / 5);
  // const getUsersData = async () => {
  //   let { data } = await axios.get("/api/users");
  //   data = data.map(item => {
  //     item.checked = false;
  //     return item;
  //   })
  //   setusersData(data)
  // }

  const getUsersData = () => {
    Service.getUsersData()
      .then((response) => {
        let data=response.data
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


  const handleMassDelete = async () => {
    let ids = usersData.filter(item => item.checked === true).map(item => item.id);
    ids.forEach(async (id) => {
      await axios.delete(`/api/users/${id}`);
    })
    await getUsersData();
    window.location.reload();
  }
  const handlePrev = async () => {
    if (pageNumber - 1 === 0) setpageNumber(1);
    else setpageNumber(pageNumber - 1)
    await getUsersData();
  }
  const handleNext = async () => {
    if (pageNumber + 1 > maxPage) setpageNumber(maxPage);
    else setpageNumber(pageNumber + 1)
    await getUsersData();
  }
  const handlePage = async (page) => {
    setpageNumber(page)
    await getUsersData();
  }

  return (
    <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>

      <h2 className='text-main'>Users</h2>
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
      <div className='d-flex justify-content-between mt-2 align-items-center'>
        <div className='d-flex'>
          <button className='add-btn shadow-sm py-1 px-3' data-bs-toggle="modal" data-bs-target="#addUserModal"><i className='fas fa-plus'></i> Add New User</button>
          <AddUserModal getUsersData={getUsersData} />
          <button className='approve-btn shadow-sm py-1 px-3 ms-3'><i className="fa-solid fa-user-check"></i> Mass Enable User</button>
          <button className='approve-btn shadow-sm py-1 px-3 ms-3'><i className="fa-solid fa-user-large-slash"></i>Mass Disable User</button>
          <button className='delete-btn shadow-sm py-1 px-3 ms-3' onClick={handleMassDelete}><i className='fas fa-trash'></i> Mass Delete</button>
        </div>
        <div className='border-b-main'>
          <i className='fas fa-magnifying-glass text-main'></i>
          <input className='input-transparent px-5 ' type="text" placeholder='Search for Organisation' />
        </div>
      </div>

      <UsersTable></UsersTable>
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

export default Users