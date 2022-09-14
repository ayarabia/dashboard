import axios from 'axios';
import Service from "./axios/services";
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import landimage from '.././assets/images/sidebar.jpeg'
import './login.css';
import { NavLink } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorList, setErrorList] = useState([]);
  let navigate = useNavigate();

  let [user, setUser] = useState({ identifier: '', password: '' });

  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function formSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let validationResponse = validateRegisterationForm();
    if (validationResponse.error) {
    setErrorList(validationResponse.error.details);
    console.log(validationResponse);
      setLoading(false);
      console.log(user);
    }
    else {
      // let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
      let { data } = await axios.post(`https://api.adstarks.com/public/api/login`, user);
      console.log(data);
      if (data.token) {

        localStorage.setItem("userToken", data.token);
        console.log(data.token);
        console.log("yes");
        navigate('/',{replace:true})

        setLoading(false);
      }
      else {
        setLoading(false);
        setError(data.message);
        console.log("no");
      }

    }

  }

  function validateRegisterationForm() {
    let schema = Joi.object(
      {
        identifier: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9#_]{3,30}$')),
      }
    );

    return schema.validate(user, { abortEarly: false });
  }

  const clearError=()=>{
    setError("");
  }

  return (
    <div className='login overflow-hidden'>
      <div className='row '>
        <div className='col-lg-7 d-md-none d-lg-block'>
          <div className='land__Image'>

          </div>
          
        </div>
        <div className='col-lg-5 px-5 col-md-12 '>
          <div className='login__form'>
            <h1 className='text-uppercase mb-5'>Login</h1>
            <form onSubmit={formSubmit}>
              {errorList.map((errors, idx) => idx === 1 ? <div key={idx} className="alert alert-danger p-2"> wrong password</div> :
                <div key={idx} className="alert alert-danger p-2"> {errors.message} </div>)}

              <label htmlFor="email" className="mb-2">Email</label>
              <input onChange={getUser} onFocus={clearError} className="form-control mb-4" type="email" name="identifier" ></input>

              <label htmlFor="password" className="mb-2">Password</label>
              <input onChange={getUser} onFocus={clearError}  className="form-control mb-3" type="password" name="password" ></input>
              <div className='d-flex justify-content-between'>
                <p className='text-danger'>{error?"invalid username or password":""}</p>
                <div>
                  <NavLink
                    to="/register">
                    Register
                  </NavLink>
                  <NavLink className='ms-3'
                    to="/forgotpassword">
                    Forgot password
                  </NavLink>
                </div>
              </div>
              <button type="submit" className="btn  mt-3 text-white login__btn">{loading ? <i className="fas fa-spinner  fa-spin"></i> : "Login"}</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login