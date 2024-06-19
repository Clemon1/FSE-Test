import { MdKeyboardArrowLeft } from "react-icons/md";
import img5 from "../../assets/form5a.svg";
import { useState } from "react";
import "../../App.scss";
import { TbFingerprint } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAddLoginMutation } from "../../redux/RTK-Query/auth";
import { useDispatch } from "react-redux";
import { authenticate } from "../../redux/authSlice";
export const Login = () => {
  const [form, setForm] = useState({
    credential: "",
    password: "",
  });
  const body = {
    credential: form.credential,
    password: form.password,
  };
  console.log("body:", body);
  const [addLogin, { isError }] = useAddLoginMutation();
  const dispatch = useDispatch();
  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const req = dispatch(authenticate(await addLogin(body).unwrap()));
      console.log(req);
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div className='container'>
      <div className='side1'>
        <img src={img5} />
      </div>
      <form className='formContainer' onSubmit={handleLoginForm}>
        <div className='backFlexContainer'>
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <MdKeyboardArrowLeft size={20} />

            <p className='text-top'>Back home</p>
          </span>
        </div>
        <section className='LoginForm'>
          <div className='formInputBody'>
            <div className='logHeader'>
              <h4 className='textTitle2'>Welcome back!</h4>
              <h4 className='textTitle3'>
                Welcome back! Please enter your details.
              </h4>
            </div>
            <div className='input-body'>
              <div className='flex-container'>
                <div className='input-body'>
                  <label>Email address / Phone number</label>
                  <input
                    className='inputElem'
                    type='text'
                    placeholder='Enter email or Phone number'
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, credential: e.target.value })
                    }
                  />
                  {isError === "Please provide credential and password!" &&
                    isError}
                </div>
              </div>
              <span className='spExample'>
                Phone number must have country code. E.g. +234.
              </span>
            </div>
            <div className='input-body'>
              <div className='flex-container'>
                <div className='input-body'>
                  <label>Password</label>
                  <input
                    className='inputElem'
                    type='password'
                    placeholder='Enter password'
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                </div>
                <span className='loginBio'>
                  <TbFingerprint size={36} color='#0E9874' />
                </span>
              </div>
            </div>

            <div className='flexUnder'>
              <span className='remBer'>
                <input type='checkbox' className='check' />
                <label>Remember for 30 days</label>
              </span>
              <span className='forgetPass'>Forgot Password</span>
            </div>
            <button className='loginBTN'>Login</button>
            <p className='lastLink'>
              Don’t have an account?
              <Link to={"/"}>
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </section>
      </form>
    </div>
  );
};
