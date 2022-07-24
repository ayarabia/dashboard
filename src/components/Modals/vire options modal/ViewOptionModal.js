import React from 'react'

const ViewOptionModal = ({ columns }) => {
   
    return (
        <div className="modal fade" id="viewOptionsModal" tabIndex={-1} aria-labelledby="viewOptionsModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>{columns.name}</h4>
                        <form>
                            {
                                columns.content.map((item,idx) => (
                                    <div className="form-check form-check-inline" key={idx}>
                                        <input className="form-check-input" type="checkbox" id={`${item}Checkbox`}
                                        defaultValue="option1" />
                                        <label className="form-check-label" htmlFor={`${item}Checkbox`}>{item}</label>
                                    </div>
                                ))
                            }
                            <h4 className='mt-3'>Pagination</h4>
                            <div className="input-group mb-3 align-items-center">
                                <label className="me-3" htmlFor="inputGroupSelect01">Options:</label>
                                <select className="form-select" id="inputGroupSelect01">

                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                </select>
                            </div>
                            <button type='submit' className='approve-btn p-2 px-3 rounded-3'><i className="fa-solid fa-check  me-3"></i> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOptionModal