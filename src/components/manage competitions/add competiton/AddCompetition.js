import React from 'react'
import TagsInput from '../../tags input/TagsInput'
import './addcompetiton.css'

const AddCompetition = () => {
    return (
        <div className=' overflow-hidden w-100 add-comp'>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <h2 className='text-main'>Add Competition</h2>
                <div className='px-5'>
                    <div className='container-fluid'>
                        <div className="accordion " id="accordionPanelsStayOpenExample">

                            <div className="accordion-item ">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Competition 1
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body ">
                                        <div className="accordion-item mx-4 mb-5">
                                            <h2 className="accordion-header" id="settingsAccord-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#settingsAccord-collapseOne" aria-expanded="true" aria-controls="settingsAccord-collapseOne">
                                                    <i className="fa-solid fa-gear me-2"></i> Settings
                                                </button>
                                            </h2>
                                            <div id="settingsAccord-collapseOne" className="accordion-collapse collapse show" aria-labelledby="settingsAccord-headingOne">
                                                <div className="accordion-body">
                                                    <form action="">
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <label htmlFor="CompetitionName">Competition Name</label>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <input type="text" className='form-control' name="CompetitionName" placeholder='Competition Name' id="CompetitionName" />
                                                                </div>

                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="CompetitionIdentifier">Competition Identifier</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <input type="text" className='form-control' name="CompetitionIdentifier" placeholder='Competition Identifier' id="CompetitionIdentifier" />
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="CompetitionDate">Competition Date</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <input id="CompetitionDate" className="form-control" type="date" />
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <p className='text-center mb-0'>To</p>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <input id="CompetitionEndDate" className="form-control" type="date" />
                                                                            <button type="button" className="btn btn-sm btn-toggle active" data-toggle="button" aria-pressed="true" autoComplete="off">
                                                                                <div className="handle"></div>
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="Re-runofcompetition?">Re-run of competition?</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className="form-check form-switch">
                                                                                <input className="form-check-input" type="checkbox" id="Re-runofcompetition?" />

                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>

                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className=" ">
                                                                                <input className="form-control" type="text" id="Re-runofcompetition?" placeholder='Competition Reference' />

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="CompetitionFormat">Competition Format</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className="form-check form-switch">
                                                                                <input className="form-check-input" type="checkbox" id="CompetitionFormat" />

                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="InputTag">Tags</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4 w-50'>
                                                                    <TagsInput tags={["Easy", "Primary 1", "Math"]} />

                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="DifficultyGroup">Difficulty Group</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4 w-50'>
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Open this select menu</option>
                                                                        <option value={1}>One</option>
                                                                        <option value={2}>Two</option>
                                                                        <option value={3}>Three</option>
                                                                    </select>


                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="GradesParticipating">Grades Participating</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4 w-50'>
                                                                    <TagsInput tags={["Grade 1", "Grade 2", "Grade 3"]} />

                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="CompetitionInstructions">Competition Instructions</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <div className="form-floating">
                                                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                                                                        <label htmlFor="floatingTextarea2">Competition Instructions</label>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-end mb-4'>
                                                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fas fa-check me-3"></i> <span>Submit</span></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mx-4 mb-5">
                                            <h2 className="accordion-header" id="countryPartnerAccord-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#countryPartnerAccord-collapseOne" aria-expanded="true" aria-controls="countryPartnerAccord-collapseOne">
                                                    <i className=" fas fa-user me-2"></i> Country Partner
                                                </button>
                                            </h2>
                                            <div id="countryPartnerAccord-collapseOne" className="accordion-collapse collapse show" aria-labelledby="countryPartnerAccord-headingOne">
                                                <div className="accordion-body">
                                                    <div className="accordion" id="accordionCountry1">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ccc" aria-expanded="true" aria-controls="ccc">
                                                                    Country Partner 1
                                                                </button>
                                                            </h2>
                                                            <div id="ccc" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionCountry1">
                                                                <div className="accordion-body">
                                                                    <div className='d-flex justify-content-end'>
                                                                        <i className="fa-solid fa-xmark"></i>
                                                                    </div>
                                                                    <form action="">
                                                                        <div className='row'>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country1Organisation" className='mb-3'>Organisation</label>
                                                                                    <select id='country1Organisation' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Organisation</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country1Country" className='mb-3'>Country</label>
                                                                                    <select id='country1Country' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Country</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country1Country Partner" className='mb-3'>Country Partner</label>
                                                                                    <select id='country1Country Partner' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Country Partner</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country1Allow Session Edits by Partners" className='mb-3'>Allow Session Edits by Partners</label>
                                                                                    <div className="form-check form-switch">
                                                                                        <input className="form-check-input" type="checkbox" id="country1Allow Session Edits by Partners" />

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="Registration Opens" className='mb-3'>Registration Opens</label>
                                                                                    <input id="Registration Opens" className="form-control" type="date" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="Days Before" className='mb-3'>Days Before</label>
                                                                                    <input id="RDays Before" className="form-control" type="number" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="Competition Dates" className='mb-3'>Competition Dates</label>
                                                                                    <input id="Competition Dates" className="form-control" type="date" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div>
                                                                                    <label htmlFor="Languages to Translate" className='mb-3'>Languages to Translate</label>
                                                                                    <TagsInput tags={["Malay", "Tamil"]} id={"Languages to Translate"} />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div>
                                                                                    <label htmlFor="Languages to View" className='mb-3'>Languages to View</label>
                                                                                    <TagsInput tags={["English", "Chinese"]} id={"Languages to View"} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex justify-content-end mt-4'>
                                                                            <p className='active-status'>Status: Active</p>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="accordion" id="accordionCountry2 ">
                                                        <div className="accordion-item mt-4">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cp2" aria-expanded="true" aria-controls="cp2">
                                                                    Country Partner 2
                                                                </button>
                                                            </h2>
                                                            <div id="cp2" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionCountry2">
                                                                <div className="accordion-body">
                                                                    <div className='d-flex justify-content-end'>
                                                                        <i className="fa-solid fa-xmark"></i>
                                                                    </div>
                                                                    <form action="">
                                                                        <div className='row'>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country2Organisation" className='mb-3'>Organisation</label>
                                                                                    <select id='country2Organisation' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Organisation</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country2Country" className='mb-3'>Country</label>
                                                                                    <select id='country2Country' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Country</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country2Country Partner" className='mb-3'>Country Partner</label>
                                                                                    <select id='country2Country Partner' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Country Partner</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country2Allow Session Edits by Partners" className='mb-3'>Allow Session Edits by Partners</label>
                                                                                    <div className="form-check form-switch">
                                                                                        <input className="form-check-input" type="checkbox" id="country2Allow Session Edits by Partners" />

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="country2Registration Opens" className='mb-3'>Registration Opens</label>
                                                                                    <input id="country2Registration Opens" className="form-control" type="date" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="country2Days Before" className='mb-3'>Days Before</label>
                                                                                    <input id="country2Days Before" className="form-control" type="number" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="country2Competition Dates" className='mb-3'>Competition Dates</label>
                                                                                    <input id="country2Competition Dates" className="form-control" type="date" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div>
                                                                                    <label htmlFor="country2Languages to Translate" className='mb-3'>Languages to Translate</label>
                                                                                    <TagsInput tags={["Malay", "Tamil"]} id={"country2Languages to Translate"} />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div>
                                                                                    <label htmlFor="country2Languages to View" className='mb-3'>Languages to View</label>
                                                                                    <TagsInput tags={["English", "Chinese"]} id={"country2Languages to View"} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex justify-content-end mt-4'>
                                                                            <p className='pending-status'>Status: Pending</p>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="accordion" id="accordionCountry3 ">
                                                        <div className="accordion-item mt-4">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cp3" aria-expanded="true" aria-controls="cp3">
                                                                    Country Partner 3
                                                                </button>
                                                            </h2>
                                                            <div id="cp3" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionCountry3">
                                                                <div className="accordion-body">
                                                                    <div className='d-flex justify-content-end'>
                                                                        <i className="fa-solid fa-xmark"></i>
                                                                    </div>
                                                                    <form action="">
                                                                        <div className='row'>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country3Organisation" className='mb-3'>Organisation</label>
                                                                                    <select id='country3Organisation' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Organisation</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country3Country" className='mb-3'>Country</label>
                                                                                    <select id='country3Country' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Country</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country3Country Partner" className='mb-3'>Country Partner</label>
                                                                                    <select id='country3Country Partner' className="form-select" aria-label="Default select example">
                                                                                        <option selected>Search for Country Partner</option>
                                                                                        <option value={1}>One</option>
                                                                                        <option value={2}>Two</option>
                                                                                        <option value={3}>Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className="mb-4">
                                                                                    <label htmlFor="country3Allow Session Edits by Partners" className='mb-3'>Allow Session Edits by Partners</label>
                                                                                    <div className="form-check form-switch">
                                                                                        <input className="form-check-input" type="checkbox" id="country3Allow Session Edits by Partners" />

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="country3Registration Opens" className='mb-3'>Registration Opens</label>
                                                                                    <input id="country3Registration Opens" className="form-control" type="date" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="country3Days Before" className='mb-3'>Days Before</label>
                                                                                    <input id="country3Days Before" className="form-control" type="number" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-2'>
                                                                                <div>
                                                                                    <label htmlFor="country3Competition Dates" className='mb-3'>Competition Dates</label>
                                                                                    <input id="country3Competition Dates" className="form-control" type="date" />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div>
                                                                                    <label htmlFor="country3Languages to Translate" className='mb-3'>Languages to Translate</label>
                                                                                    <TagsInput tags={["Malay", "Tamil"]} id={"country3Languages to Translate"} />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div>
                                                                                    <label htmlFor="country3Languages to View" className='mb-3'>Languages to View</label>
                                                                                    <TagsInput tags={["English", "Chinese"]} id={"country3Languages to View"} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex justify-content-end mt-4'>
                                                                            <p className='locked-status'>Status: Locked</p>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='d-flex justify-content-end mb-4'>
                                                        <button type="button" className="btn btn-confirm px-4 mt-3 py-2 "><i className="fas fa-check me-3"></i> <span>Submit</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mx-4 mb-5">
                                            <h2 className="accordion-header" id="roundAccord-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#roundAccord-collapseOne" aria-expanded="true" aria-controls="roundAccord-collapseOne">
                                                    <i className=" fas fa-wrench  me-2"></i> Rounds
                                                </button>
                                            </h2>
                                            <div id="roundAccord-collapseOne" className="accordion-collapse collapse show" aria-labelledby="roundAccord-headingOne">
                                                <div className="accordion-body">
                                                    <div className="accordion" id="accordionRound1">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ccc" aria-expanded="true" aria-controls="ccc">
                                                                    Round 1
                                                                </button>
                                                            </h2>
                                                            <div id="ccc" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionRound1">
                                                                <div className="accordion-body">
                                                                    <div className='d-flex justify-content-end mb-4'>



                                                                        <button className='delete-btn shadow-sm py-1 px-3 me-3'><i className='fas fa-trash'></i>  Delete Round</button>
                                                                        <button className='dublicate-btn bg-main shadow-sm py-1 px-3 me-3'><i className="fas fa-clone"></i>Duplicate Round</button>
                                                                    </div>
                                                                    <form action="">
                                                                        <div className='row'>
                                                                            <div className='col-lg-4'>
                                                                                <div className='mb-4'>
                                                                                    <label htmlFor="Round Label">Round Label</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-8'>
                                                                                <div className='mb-4'>
                                                                                    <input type="text" className='form-control' id='Round Label' placeholder='Round Label' />
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-4'>
                                                                                <div className='mb-4'>
                                                                                    <label htmlFor="Competition Configuration">Competition Configuration</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-3'>
                                                                                <div className='mb-4'>
                                                                                    <div className="form-check form-switch">
                                                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                                                       
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex justify-content-end mt-4'>
                                                                            <p className='active-status'>Status: Active</p>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className='d-flex justify-content-end mb-4'>
                                                        <button type="button" className="btn btn-confirm px-4 mt-3 py-2 "><i className="fas fa-check me-3"></i> <span>Submit</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddCompetition