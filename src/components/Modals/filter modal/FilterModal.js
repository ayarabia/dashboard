import React from 'react'

const FilterModal = ({ filterby }) => {
    
    return (
        <div className="modal fade" id="filterModal" tabIndex={-1} aria-labelledby="filterModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Filter By</h4>
                        <form>
                            <div className='d-flex justify-content-start'>
                                {
                                    filterby.map((item,idx)=>(
                                        <div className="input-group mb-3 align-items-center me-3 " key={idx}>
                                        <select className="form-select py-2" id="schoolSelect">
                                            <option >{item.name}</option>
                                            {
                                                item.content.map((item,idx)=>(
                                                    <option value={`${item}`} key={idx}>{item}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    ))
                                }
                                
                            </div>
                            <button type='submit' className='approve-btn p-2 px-3 rounded-3'><i className="fa-solid fa-arrow-rotate-right me-3"></i> Reset Filters</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterModal