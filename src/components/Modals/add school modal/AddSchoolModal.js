import React, {  useState } from 'react'
import axios from 'axios';
import './addmodal.css'


const AddSchoolModal = ({getSchoolsData}) => {
    const [addDataState, setAddDataState] = useState({});
    const [loading, setLoading] = useState(false);

    function getData(e) {
        let myData = { ...addDataState };
        myData[e.target.name] = e.target.value;
        setAddDataState(myData);
        
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('http://34.231.234.91/api/schools', addDataState)
            .then(({data}) => {
                if (data) {
                    
                    setLoading(false);
                    handleCloseModal();
                    getSchoolsData();
                }
                else {
                    setLoading(false);
                }
            })
            .catch((error) => {
               
                setLoading(false);
            });
    }

    function handleCloseModal() {
        document.getElementById("addSchoolModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        document.querySelector("body").classList.remove("modal-open");
        document.querySelector("body").style = "";
    }

    return (
        <div className="modal fade" id="addSchoolModal" tabIndex={-1} aria-labelledby="addSchoolModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Add School</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body  ">
                        <form onSubmit={formSubmit} >
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mb-3'>
                                        <label htmlFor="schoolname" className="form-label">School name</label>
                                        <input onChange={getData} name="name" type="text" className="form-control" id="schoolname" placeholder='Enter name' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mb-3'>
                                        <label htmlFor="schooladdress" className="form-label">School address</label>
                                        <input onChange={getData} name="address" type="text" className="form-control" id="schooladdress" placeholder='Enter Address' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mb-3'>
                                        <label htmlFor="schoolpostal_code" className="form-label"> Postal Code</label>
                                        <input onChange={getData} name="postal_code" type="number" className="form-control" id="schoolpostal_code" placeholder='Enter postal code' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mb-3'>
                                        <label htmlFor="schoolphone" className="form-label"> Phone</label>
                                        <input onChange={getData} name="phone" type="number" className="form-control" id="schoolphone" placeholder='Enter phone' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mb-3'>
                                        <label htmlFor="schoolemail" className="form-label"> Email</label>
                                        <input onChange={getData} name="email" type="email" className="form-control" id="schoolemail" placeholder='Enter email' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mb-3'>
                                        <label htmlFor="schoolcountry_id" className="form-label"> Country</label>
                                        <input onChange={getData} name="country_id" type="number" className="form-control" id="schoolcountry_id" placeholder='Enter country id' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mb-3'>
                                        <label htmlFor="schoolis_tution_centre" className="form-label"> Tution Centre</label>
                                        <div>
                                            <div className="form-check">
                                                <input onChange={getData} className="form-check-input" type="radio" name="is_tution_centre" id="flexRadioDefault1" value={1} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={getData} className="form-check-input" type="radio" name="is_tution_centre" id="flexRadioDefault2" value={0} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    no
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            <div className='d-flex justify-content-end'>
                                <button type="submit" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>{loading ? <i className="fas fa-spinner  fa-spin"></i> : "Save"}</span></button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSchoolModal