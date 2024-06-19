/* eslint-disable react/prop-types */

import { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import Avatar from "../assets/Avatar.svg";

export const Form1 = ({ form, setForm }) => {
  const [error, setError] = useState(false);
  const [iconError, setErrorIcon] = useState(false);
  const [confirmErrorPassword, setConfirmErrorPassword] = useState(false);
  const ageGroupDetails = [
    "18 - 25",
    "26 - 35",
    "36 - 45",
    "46 - 55",
    "56 - 65",
    "66 - 75",
    "76 - 85",
    "85 - 100",
  ];

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setForm({
      ...form,
      password: newPassword,
    });

    if (newPassword.length < 8) {
      setError(true);
    } else {
      setError(false);
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      setErrorIcon(true);
    } else {
      setErrorIcon(false);
    }
  };
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setForm({
      ...form,
      confirmPassword: newConfirmPassword,
    });
    if (newConfirmPassword !== form.password) {
      setConfirmErrorPassword(true);
    } else {
      setConfirmErrorPassword(false);
    }
  };

  return (
    <div className='formInputBody'>
      <h4 className='textTitle2'>Personal Infomation</h4>

      <div className='flex-container'>
        <div className='input-body'>
          <label>First Name</label>
          <input
            className='inputElem'
            type='text'
            placeholder='Enter first name'
            value={form.firstName}
            onChange={(e) =>
              setForm({
                ...form,
                firstName: e.target.value,
              })
            }
          />
        </div>
        <div className='input-body'>
          <label>Last Name</label>
          <input
            className='inputElem'
            type='text'
            placeholder='Enter last name'
            value={form.lastName}
            onChange={(e) =>
              setForm({
                ...form,
                lastName: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Phone Number</label>
          <input
            className='inputElem'
            value={form.credential}
            type='email'
            placeholder='Enter Phone Number'
            onChange={(e) =>
              setForm({
                ...form,

                credential: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Email address (optional)</label>
          <input
            className='inputElem'
            value={form.email}
            type='email'
            placeholder='Enter email'
            onChange={(e) =>
              setForm({
                ...form,

                email: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Age</label>
          <select
            className='inputElem'
            value={form.ageGroup}
            placeholder='Select'
            onChange={(e) =>
              setForm({
                ...form,
                ageGroup: e.target.value,
              })
            }>
            <option>Select Age</option>
            {ageGroupDetails.map((ageGroup) => (
              <option key={ageGroup} value={ageGroup}>
                {ageGroup}
              </option>
            ))}
          </select>
        </div>
        <div className='input-body'>
          <label>Choose Gender</label>
          <div className='flex-container'>
            <label htmlFor='radioId' className='radioLabel'>
              <input
                type='radio'
                id='radioId'
                checked={form.gender === "male"}
                className='radio1'
                onChange={() =>
                  setForm({
                    ...form,
                    gender: "male",
                  })
                }
              />
              <span></span>
              Male
            </label>
            <label htmlFor='radioId1' className='radioLabel'>
              <input
                type='radio'
                id='radioId1'
                checked={form.gender === "female"}
                className='radio1'
                onChange={() =>
                  setForm({
                    ...form,
                    gender: "female",
                  })
                }
              />
              <span></span>
              Female
            </label>
          </div>
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Residential address </label>
          <input
            className='inputElem'
            type='text'
            value={form.resAddress}
            placeholder='Ex: No 21 Agaro road, Abeokuta.'
            onChange={(e) =>
              setForm({
                ...form,
                resAddress: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Site</label>
          <select
            className='inputElem'
            placeholder='Select'
            onChange={(e) =>
              setForm({
                ...form,
                siteId: e.target.value,
              })
            }>
            <option>Select site</option>
            <option value={"Ajegunle"}>Ajegunle</option>
            <option value={"Jakande"}>Jakande</option>
          </select>
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>ID Type</label>
          <select
            className='inputElem'
            placeholder='Select'
            value={form.idUpload.idType}
            onChange={(e) =>
              setForm({
                ...form,
                idUpload: { ...form.idUpload, idType: e.target.value },
              })
            }>
            <option>Select ID</option>
            <option value={"National ID card (NIN"}>
              National ID card (NIN)
            </option>
            <option value={"Voter’s card"}>Voter’s card</option>
            <option value={"International Passport"}>
              International Passport
            </option>
          </select>
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>ID Number</label>
          <input
            className='inputElem'
            type='text'
            value={form.idUpload.idNumber}
            onChange={(e) =>
              setForm({
                ...form,
                idUpload: { ...form.idUpload, idNumber: e.target.value },
              })
            }
            placeholder='Enter your ID Number'
          />
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Upload Document</label>
          <input
            className='inputElem'
            id='upload'
            type='file'
            hidden
            onChange={(e) =>
              setForm({
                ...form,
                idUpload: { ...form.idUpload, url: e.target.files[0] },
              })
            }
          />
          <label htmlFor={"upload"} className='inputElem2'>
            <label htmlFor={"upload"} className='button'>
              Choose File
            </label>
            <p className='upName'>
              {form?.idUpload?.url
                ? form?.idUpload?.url.name
                : "No file chosen"}
            </p>
          </label>
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Create Password</label>
          <input
            className='inputElem'
            value={form.password}
            type='password'
            placeholder='Enter password'
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Confirm Password </label>
          <input
            className='inputElem'
            value={form.confirmPassword}
            type='password'
            style={{
              border: confirmErrorPassword && "2px solid #F04438",
            }}
            placeholder='Confirm password'
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <p
            className='errorMessage'
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "5px",
              color: error ? "#F04438" : "#475467",
            }}>
            {error ? (
              <RiErrorWarningLine
                size={16}
                color={!form.password === "" && error ? "#F04438" : ""}
              />
            ) : (
              <GrStatusGood size={16} color={!error && "#079455"} />
            )}
            Must be 8 characters
          </p>

          <p
            className='errorMessage'
            style={{
              display: "flex",
              paddingBottom: "5px",

              alignItems: "center",
              color: iconError ? "#F04438" : "#475467",
            }}>
            {iconError ? (
              <RiErrorWarningLine size={16} color={iconError && "#F04438"} />
            ) : (
              <GrStatusGood size={16} color={!iconError && "#079455"} />
            )}
            Must contain one special character
          </p>
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Upload Profile picture (Optional)</label>
          <input
            className='inputElem'
            id='uploadProfilePicture'
            type='file'
            hidden
            onChange={(e) =>
              setForm({
                ...form,
                profilePic: {
                  ...form.profilePic,
                  url: e.target.files[0],
                },
              })
            }
          />
          <label
            htmlFor={"uploadProfilePicture"}
            className='uploadProfilePicture2'>
            <img
              className='previewImg'
              src={
                form?.profilePic?.url
                  ? URL.createObjectURL(form?.profilePic?.url)
                  : Avatar
              }
            />
            <label htmlFor={"uploadProfilePicture"} className='button'>
              <MdOutlineFileUpload size={18} />
              Upload picture
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};
