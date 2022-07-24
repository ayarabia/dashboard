import React from 'react'
import {  useNavigate } from 'react-router-dom'

export const ForgotPassword = () => {
  let navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/resetpassword", { replace: true });
  }

  return (
    <div className='register overflow-hidden'>
      <div className='row '>
        <div className='col-lg-7 d-md-none d-lg-block'>
          <div className='land__Image'>

          </div>

        </div>
        <div className='col-lg-5 px-5 col-md-12 '>
          <div className='login__form'>
            <h1 className=''><span>Forget</span> Password?</h1>
            <div className='py-5'>
              <p>please enter your registered emial address.</p>
              <p className='text-grey'>We will send a verification code to your email</p>
            </div>
            <form onSubmit={handlesubmit}>
              <div className='mb-5'>
                <label htmlFor="email" className="mb-2">Email</label>
                <input placeholder='Your Email' className="form-control mb-3" type="email" name="email" ></input>
              </div>

              <button className="btn login__btn mt-3 text-white">Next</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
