import React ,{useState,useEffect} from "react";
import Card from "../../card/card";
import SessionData from "../../../core/data/Sessions";
import Service from "../../axios/services";

const CompetitionSessions = () => {
  const [session,setSession]=useState([])
const getTasks = () => {
  Service.getTasks()
    .then((response) => {
      let data=response.data
   
      setSession(data)
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
};
useEffect(() => {
  getTasks();

}, [])
  const { columns, rows } = SessionData;
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
        <h2 className="text-main mb-5">Competition Session Rounds</h2>
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
               iconType ="fa-solid"
              iconName="fa-user"
              heading="300"
              subHeading="Participants"
              color="#F3A867"
            ></Card>
            <Card
               iconType ="fa-solid"
              iconName="fa-calendar"
              heading="14/06/2022-20/06/2022"
              subHeading="Competition Dates"
              color="#6FC9B6"
            ></Card>
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
                  <td><input type="checkbox" className='form-check-input'></input></td>
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
                      <td><input type="checkbox" className='form-check-input'></input></td>
                      <td>{row.round}</td>
                      <td>{row.levels}</td>
                      <td>{row.configuration}</td>
                      <td>{row.score}</td>
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

export default CompetitionSessions;
