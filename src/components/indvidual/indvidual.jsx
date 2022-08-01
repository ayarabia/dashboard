import React ,{useState} from "react";
import Card from "../card/card";
import FilterModal from '../Modals/filter modal/FilterModal'
import ViewOptionModal from '../Modals/vire options modal/ViewOptionModal'
import IndvdualSessionData from "../../core/data/Session1";
const IndvdualSession= () => {
  const { columns, rows } = IndvdualSessionData;
  const [pageNumber, setpageNumber] = useState(1);
  // var maxPage = Math.ceil(usersData.length / 5);
   var maxPage = 5
  const handlePrev = () => {
    if (pageNumber - 1 === 0) setpageNumber(1);
    else setpageNumber(pageNumber - 1)
  
  }
  const handleNext =  () => {
    if (pageNumber + 1 > maxPage) setpageNumber(maxPage);
    else setpageNumber(pageNumber + 1)
   
  }
  const handlePage =  (page) => {
    setpageNumber(page)
  
  }
return (
    <div className="sessions flex-grow-1">
      <div className="bg-main-content py-5 pt-4 px-3 ">
        <h2 className="text-main mb-5">Session #1</h2>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="status d-flex">
            <Card
            iconType ="fa-solid"
              iconName="fa-chart-simple"

              heading="SASMO 2022"
              subHeading="Competition"
              color="#706fa7"
            ></Card>
            <Card
             iconType ="fa-regular"
              iconName="fa-clock"
              heading="2"
              subHeading="Round"
              color="#F3A867"
            ></Card>
            <Card
             iconType ="fa-solid"
             iconName="fa-signal"
           
              heading="2"
              subHeading="Level"
              color="#6FC9B6"
            ></Card>
            
          </div>
          <div className='options me-4'>
                        <button className="btn  dropdown-toggle option-dropdown ms-2" type="button" data-bs-toggle="modal" data-bs-target="#viewOptionsModal" >
                            View Options
                        </button>
                        <button className="btn dropdown-toggle ms-2 option-dropdown" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
                            Filter
                        </button>
                        <ViewOptionModal columns={{
                            name: "Columns",
                            content: ["Country", "Grade", "School", "Class", "Tuition Centre", "Competition/Assessment", "Partner", "Teachers","Created By","Last Modified By","Created By"]
                        }} />``
                        <FilterModal filterby={[{ name: "School/Tuition", content: ["School", "Tuition"] }, { name: "Country", content: ["Egypt", "China", "USA"] },{ name: "Grade", content: [1,2,3] },{ name: "Competition", content: ["Disabled", "Enabled"] }, { name: "Status", content: ["Disabled", "Enabled"] }]} />
                    </div>
        </div>
        <div className="d-flex justify-content-end mt-2 align-items-center">
            
          <div className="border-b-main">
            <i className="fas fa-magnifying-glass text-main"></i>
            <input
              className="input-transparent px-5 "
              type="text"
              placeholder="Search for Participant"
            />
          </div>
        </div>
        <div className="mt-3 position-relative">
          <div className="overflow-auto">
            <table className="w-100 ">
              <thead className="bg-main">
                <tr>
                  <td></td>
                  <td><input type="checkBox" /></td>
                  {columns.map((column) => {
                    return <td index={column}>{column}</td>;
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  return (
                    <tr index={row.id}>
                      <td>{row.id}</td>
                      <td><input type="checkBox" /></td>
                      <td>{row.index}</td>
                      <td>{row.name}</td>
                      <td>{row.country}</td>
                      <td>{row.school}</td>
                      <td>{row.grade}</td>
                      <td>{row.class}</td>
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
      </div>
    </div>
  );
};

export default IndvdualSession;
