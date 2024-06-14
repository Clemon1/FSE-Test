import { MdKeyboardArrowLeft } from "react-icons/md";
import img5 from "../../assets/form5a.svg";
import { useState } from "react";
import "../../App.scss";
import { TbFingerprint } from "react-icons/tb";
import { Link } from "react-router-dom";
export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <div className='container'>
      <div className='side1'>
        <img src={img5} />
      </div>
      <form className='formContainer'>
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
                      setForm({ ...form, email: e.target.value })
                    }
                  />
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
                    type='text'
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
