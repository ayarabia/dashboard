import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './register.css'


const Register = () => {
  let [user, setUser] = useState({ first_name: "", last_name: "", email: "", password: "", age: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();


  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
  }

  async function formSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let validationResponse = validateRegisterationForm();


    if (validationResponse.error) {
      setLoading(false);
      setErrorList(validationResponse.error.details);
    }
    else {

      let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);


      if (data.errors) {
        setError(data.message);
        setLoading(false);

      }
      else {
        setLoading(false);
        navigate('/login');
      }
    }

  }

  function validateRegisterationForm() {
    let schema = Joi.object(
      {
        first_name: Joi.string().min(3).max(15).required(),
        last_name: Joi.string().min(3).max(15).required(),
        age: Joi.number().min(16).max(80).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      }
    );

    return schema.validate(user, { abortEarly: false });
  }

  const clearError = () => {
    setError("");
    setErrorList([])
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
            <h1 className='text-uppercase mb-5'><span>Register</span></h1>
            <form onSubmit={formSubmit}>


              {errorList.map((errors, idx) => idx === 1 ? <div key={idx} className="alert alert-danger p-2"> wrong password</div> :
                <div key={idx} className="alert alert-danger p-2"> {errors.message} </div>)}

              <label htmlFor="first_name" className="mb-2">First Name</label>
              <input onFocus={clearError} onChange={getUser} className="form-control mb-3" type="text" name="first_name" ></input>

              <label htmlFor="last_name" className="mb-2">Last Name</label>
              <input onFocus={clearError} onChange={getUser} className="form-control mb-3" type="text" name="last_name" ></input>

              <label htmlFor="email" className="mb-2">Email</label>
              <input onFocus={clearError} onChange={getUser} className="form-control mb-3" type="email" name="email" ></input>

              <label htmlFor="password" className="mb-2">Password</label>
              <input onFocus={clearError} onChange={getUser} className="form-control mb-3" type="password" name="password" ></input>

              <label htmlFor="age" className="mb-2">Age</label>
              <input onFocus={clearError} onChange={getUser} className="form-control mb-3" type="number" name="age" ></input>

              

              <div className='d-flex justify-content-between'>
                <p className='text-danger'>{error ? "invalid Data" : ""}</p>
                <div>
                  <NavLink
                    to="/login">
                    Login
                  </NavLink>
                  <NavLink className='ms-3'
                    to="/forgotpassword">
                    Forgot password
                  </NavLink>
                </div>
              </div>
              <button type="submit" className="btn login__btn mt-3 text-white">{loading ? <i className="fas fa-spinner  fa-spin"></i> : "Register"}</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register