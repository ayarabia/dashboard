import React from 'react'
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    let navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  }
    return (
        <div className='register overflow-hidden '>
            <div className='row '>
                <div className='col-lg-7 d-md-none d-lg-block'>
                    <div className='land__Image'>

                    </div>

                </div>
                <div className='col-lg-5 px-5 col-md-12 '>
                    <div className='login__form'>
                        <h1 className=''><span>Reset</span> Password</h1>
                        <form  onSubmit={handlesubmit}>
                            <div className='my-big'>
                                <label htmlFor="password" className="mb-2 fs-5 fw-bold">New Password</label>
                                <input placeholder='Enter your new password' className="form-control mb-3" type="password" name="password" ></input>
                                <label htmlFor="conpassword" className="mb-2  fs-5 fw-bold">Confirm Password</label>
                                <input placeholder='Confirm your new password' className="form-control mb-3" type="password" name="conpassword" ></input>
                            </div>

                            <button className="btn login__btn mt-3 text-white">Change Password</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword