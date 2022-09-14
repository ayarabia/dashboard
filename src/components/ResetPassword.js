import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import Service from './axios/services';

const ResetPassword = () => {
    let navigate = useNavigate();
    const [addDataState, setAddDataState] = useState({"username": "super_admin","user_key": "FliSMo5GOd"});
    const [loading, setLoading] = useState(false);
    const [errorlist, seterrorlist] = useState(false);
    function handelOnChange(e) {
         let myData = { ...addDataState };
        myData[e.target.name] = e.target.value;
      
        setAddDataState(myData);
        seterrorlist(null);
      }

    const schema = Yup.object().shape({
       password: Yup.string().required(),
       conpassword: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })
    
  const handlesubmit = async(e) => {
    e.preventDefault();
    e.preventDefault();
    setLoading(true);
    const isValid = await schema.validate(addDataState).catch((error) => seterrorlist(error.errors))
    setLoading(false);
    if(isValid) {
        setLoading(true)
        seterrorlist(null);
        console.log(addDataState);
        Service.changePassword(addDataState)
        .then(({ data }) => {
            if (data) {
                setLoading(false);
                console.log("valid");
              }
            else {
                setLoading(false);
            }
        })
       .catch((error) => {
            setLoading(false);
        });
    }
    // navigate("/login", { replace: true });
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
                        {errorlist && <p className='text-danger w-100 text-center'>{errorlist[0]}</p> }
                        <form  onSubmit={handlesubmit}>
                            <div className='my-big'>
                                <label htmlFor="password" className="mb-2 fs-5 fw-bold">New Password</label>
                                <input onChange={handelOnChange} placeholder='Enter your new password' className="form-control mb-3" type="password" name="password" ></input>
                                <label htmlFor="conpassword" className="mb-2  fs-5 fw-bold">Confirm Password</label>
                                <input onChange={handelOnChange}  placeholder='Confirm your new password' className="form-control mb-3" type="password" name="conpassword" ></input>
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