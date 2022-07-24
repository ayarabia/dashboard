import React from 'react'
import "./CSVUpload.css";
import {ReactComponent as CSVIcon} from '../../../assets/images/csv_icon.svg';

const CSVUpload = () => {

    return (
        <div className=' overflow-hidden w-100 add-comp'>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <div className='row'>
                    <div className='col-md-3 fix-dis'>
                        <div className='row'>
                            <h2 className='text-main'>CSV Upload</h2>
                        </div>
                        <div className='row'>
                            <h5 className="bold" >Upload Type:</h5>
                            <div className='col-12' id='btn-holder'>
                                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked/>
                                <label class="btn-nobg btn-outline-secondary no-red left-option btn-equal-size" for="option1">Schools</label>
                                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
                                <label class="btn-nobg btn-outline-secondary no-red right-option btn-equal-size" for="option2">Participants</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className="container top-cont">
                            <div className="row">
                                <span className='top-cont-text'>Upload to:</span>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <select id='Competition' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">Competition</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select id='Country' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">Country</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select id='Country' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">Tag to Country Partner/Teacher</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <select id='School' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">School</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select id='Tuition' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">Tuition Centre</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-6" style={{"display": "flex"}}>
                                    <form className="form-check form-check-inline" style={{"marginTop" : "auto", "marginBottom" : "auto"}}>
                                        <input type="checkbox" className='form-check-input' id='partner'/>
                                        <label className="form-check-label small-font" htmlFor='partner'>Belongs to Partner</label>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-9"/>
                            <div className="col-md-3"><button className='btn btn-danger more-round'><i class="fa-solid fa-arrows-rotate fa-flip-vertical"/> Reset Filters</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 drag-and-drop-con">
                        <div className="row-md svg-con">
                            <CSVIcon fill='#A9ABD3' width="inherit" height="inherit"/>
                        </div>
                        <div className="row-md text-con">
                            <span className='lower-font-size bold'>Upload your .csv file<br/></span>
                            <span className='lower-font-size bold'>Drag & drop or click to upload</span>
                        </div>
                        <div className='row-md'>
                            <input type="file" className='file-input'id="input-to-btn" hidden/>
                            <label for="input-to-btn" id='choose-file-btn' className='btn btn-custom btn-sm'>Choose File</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 btn-con'>
                        <h4 className='text-main bold'>Map Fields</h4>
                    </div>
                    <div className='col-md-2'/>
                    <div className='col-md-6 btn-con'>
                        <button className='btn more-round btn-equal-size free-space btn-color-theme'><i class="fa-solid fa-download"/> Download Sample Template</button>
                        <button className='btn more-round btn-equal-size free-space btn-color-theme'><i class="fa-solid fa-download"/> Download Empty Template</button>
                    </div>
                </div>
                <div className='row top-space'>
                    <div className='mt-3 position-relative'>
                        <div className='overflow-auto'>
                            <table className='w-100 '>
                                <thead className='bg-main'>
                                <tr>
                                    <td>Field</td>
                                    <td>First Row of Data</td>
                                    <td>CSV Header</td>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label className="form-label">Name<span className="text-danger">*</span></label>
                                        </td>
                                        <td>
                                            <label className="form-label">testing</label>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Name</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label">School</label>
                                        </td>
                                        <td>
                                            <label className="form-label">Tao Nan School</label>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">School</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label">Tuition Centre</label>
                                        </td>
                                        <td>
                                            <label className="form-label">Tuition Centre</label>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Tuition</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label">Tag to Country Partner/Teacher</label>
                                        </td>
                                        <td>
                                            <label className="form-label">Country Partner</label>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Tag to Country Partner/Teacher</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label">Grade<span className="text-danger">*</span></label>
                                        </td>
                                        <td>
                                            <label className="form-label">2</label>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">-</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="form-label">Class<span className="text-danger">*</span></label>
                                        </td>
                                        <td>
                                            <label className="form-label">2A</label>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Class</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='row top-space'>
                    <div className='col-md-10'/>
                    <div className='col-md-2'>
                        <button className='btn more-round btn-color-theme top'><i class="fa-solid fa-check"/> submit</button>
                    </div>
                </div>
                <div className='row top-space'>
                    <div className='col-md-2 btn-con'>
                        <h4 className='text-main bold'>Participants</h4>
                    </div>
                    <div className='col-md-3'/>
                    <div className='col-md-5 btn-con'>
                        <button className='btn btn-color-theme lower-font-size'><i class="fa-solid fa-arrow-up"/> Export Selected Participants</button>
                        <button className='btn btn-color-theme lower-font-size'>Check/Uncheck Errors</button>
                        <button className='btn btn-danger more-round lower-font-size'><i class="fa-solid fa-trash"/> Mass Delete</button>
                    </div>
                    <div className='col-md-2'>
                        <select className="form-select" aria-label="Default select example">
                            <option selected><span className="form-label">Sort Errors</span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>
                </div>
                <div className='row row-cols-8 no-padding' style={{"display" : "flex"}}>
                    <div className='col auto-margin-top-bottom'>
                        <select className="form-select lower-font-size" aria-label="Default select example">
                            <option selected><span className="form-label">School</span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>
                    <div className='col auto-margin-top-bottom'>
                        <button className='btn btn-primary full-width Xlower-font-size'>Mass Assign School</button>
                    </div>
                    <div className='col auto-margin-top-bottom'>
                        <select className="form-select lower-font-size" aria-label="Default select example">
                            <option selected><span className="form-label">Tuition Centre</span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>
                    <div className='col auto-margin-top-bottom'>
                        <button className='btn btn-primary full-width Xlower-font-size'>Mass Assign Tuition Centre</button>
                    </div>
                    <div className='col auto-margin-top-bottom'>
                        <select className="form-select lower-font-size" aria-label="Default select example">
                            <option selected><span className="form-label">Grade</span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>
                    <div className='col auto-margin-top-bottom'>
                        <button className='btn btn-primary full-width Xlower-font-size'>Mass Assign Grade</button>
                    </div>
                    <div className='col auto-margin-top-bottom'>
                        <select className="form-select lower-font-size" aria-label="Default select example">
                            <option selected><span className="form-label">Teacher</span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>
                    <div className='col auto-margin-top-bottom'>
                        <button className='btn btn-primary full-width Xlower-font-size'>Mass Assign Teacher</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='mt-3 position-relative'>
                        <div className='overflow-auto'>
                            <table className='w-100 '>
                                <thead className='bg-main'>
                                    <tr>
                                        <td></td>
                                        <td><input type="checkbox"
                                        className='form-check-input'
                                        ></input></td>
                                        <td>Name</td>
                                        <td>School</td>
                                        <td>Tuition Centre</td>
                                        <td>Tag to Country Partner/Teacher</td>
                                        <td>Grade</td>
                                        <td>Class</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><input type="checkbox" className='form-check-input'/></td>
                                        <td><input className="form-control" type="text"></input></td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="checkbox" className='form-check-input'/></td>
                                        <td><input className="form-control" type="text"></input></td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="checkbox" className='form-check-input'/></td>
                                        <td><input className="form-control" type="text"></input></td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input type="checkbox" className='form-check-input'/></td>
                                        <td><input className="form-control" type="text"></input></td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected><span className="form-label">Lorem Ipsum</span></option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </td>
                                        <td>Lorem Ipsum</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='row top-space'>
                    <div className='col-md-10'/>
                    <div className='col-md-2'>
                        <button className='btn more-round btn-color-theme top'><i class="fa-solid fa-check"/> submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CSVUpload;