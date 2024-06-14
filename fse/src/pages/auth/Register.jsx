import { useState } from "react";
import "../../App.scss";
import img1 from "../../assets/form1a.svg";
import img2 from "../../assets/form2a.svg";
import img3 from "../../assets/form3a.svg";
import img4 from "../../assets/form4a.svg";

import { Form1 } from "../../components/form1";
import { Form2 } from "../../components/form2";
import { Form3 } from "../../components/form3";
import { Form4 } from "../../components/form4";
import { StepperIndicator } from "../../components/stepperIndicator";
import { MultiStepFormBody } from "../../components/mutistepFormBody";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { MobileStepperIndicator } from "../../components/MobileStepper";
import axios from "axios";

export const Register = () => {
  const [page, setPage] = useState(0);
  const [skip, setSkip] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    credential: "",
    email: "",
    password: "",
    confirmPassword: "",
    roleName: "Farmer",
    gender: "",
    resAddress: "",
    ageGroup: "",
    hasSmartphone: true,
    hasBankAccount: false,
    profilePic: {
      url: "",
    },

    idUpload: {
      idType: "",
      idNumber: "",
      url: "",
    },
    siteId: "",
    bankDetails: {
      accountNumber: "",
      bankName: "",
    },
    farmDetails: {
      name: "",
      address: "",
      long: "",
      lat: "",
      docUploads: [
        {
          url: "",
        },
        {
          url: "",
        },
      ],
      crops: [
        {
          cropId: "",
          farmSeasonStart: "",
          farmSeasonEnd: "",
        },
        {
          cropId: "",
          farmSeasonStart: "",
          farmSeasonEnd: "",
        },
      ],
    },
  });
  console.log(form);
  const handleBack = (e) => {
    e.preventDefault();
    setPage((prev) => prev - 1);
  };
  const handleContinue = (e) => {
    e.preventDefault();

    setPage((prev) => prev + 1);
  };
  const multiStepper = () => {
    if (page === 0) {
      return <Form1 form={form} setForm={setForm} />;
    } else if (page === 1) {
      return <Form2 form={form} setForm={setForm} />;
    } else if (page === 2) {
      return <Form3 skip={skip} setSkip={setSkip} />;
    } else {
      return <Form4 form={form} setForm={setForm} />;
    }
  };
  const formData = new FormData();

  // formData.append("firstName", form.firstName);
  // formData.append("lastName", form.lastName);
  // formData.append("email", form.email);

  // for (const upload in form.idUpload) {
  //   formData.append(`idUpload.${upload}`, form.idUpload[upload]);
  // }

  // formData.append("siteId", form.siteId);

  // for (const bankDetails in form.bankDetails) {
  //   formData.append(
  //     `bankDetails.${bankDetails}`,
  //     form.bankDetails[bankDetails],
  //   );
  // }
  // for (const farm in form.farmDetails) {
  //   if (farm === "docUploads") {
  //     form.farmDetails.docUploads.forEach((doc, index) => {
  //       formData.append(`farmDetails.docUploads[${index}].url`, doc.url);
  //     });
  //   } else if (farm === "crops") {
  //     form.farmDetails.crops.forEach((crop, index) => {
  //       formData.append(`farmDetails.crops[${index}].cropId`, crop.cropId);
  //       formData.append(
  //         `farmDetails.crops[${index}].farmSeasonStart`,
  //         crop.farmSeasonStart,
  //       );
  //       formData.append(
  //         `farmDetails.crops[${index}].farmSeasonEnd`,
  //         crop.farmSeasonEnd,
  //       );
  //     });
  //   } else {
  //     formData.append(`farmDetails.${farm}`, form.farmDetails[farm]);
  //   }
  // }

  const body = {
    userDetails: {
      firstName: form.firstName,
      lastName: form.lastName,
      credential: form.credential,
      email: form.email,
      password: form.password,
      roleName: form.roleName,
      gender: form.gender,
      resAddress: form.resAddress,
      ageGroup: form.ageGroup,
      hasBankAccount: true,
      hasSmartphone: true,

      profilePic: {
        url: formData.append("profilePic.url", form.profilePic.url),
      },
    },
    idUpload: {
      idType: form.idUpload.idType,
      idNumber: form.idUpload.idNumber,
      url: "dddds",
    },
    siteId: "fws-rjcszynq",
    bankDetails: {
      backName: form.bankDetails.bankName,
      accountNumber: form.bankDetails.accountNumber,
    },
    farmDetails: form.farmDetails,
  };
  const handleRegistrations = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post(
        "https://www.dev.farmwarehouse.ng/api/users/signup",
        body,
      );
      await req.data;
      console.log(req.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className='container'>
      <div className='side1'>
        <img
          src={page === 0 ? img1 : page === 1 ? img2 : page === 2 ? img3 : img4}
        />
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
          <p className='text-top'>
            Already have an account?
            <Link to={"/login"}>
              <span className='text-topActive'>Log in</span>
            </Link>
          </p>
        </div>
        <section className='stepper'>
          <StepperIndicator
            height={
              page === 0
                ? "0%"
                : page === 1
                ? "33.3%"
                : page === 2
                ? "66.6%"
                : "100%"
            }
          />
          <MobileStepperIndicator
            width={
              page === 0
                ? "0%"
                : page === 1
                ? "33.3%"
                : page === 2
                ? "66.6%"
                : "100%"
            }
          />
          <MultiStepFormBody
            handleBack={handleBack}
            handleContinue={handleContinue}
            backBtnDisabled={page === 0}
            finished={page === 3}
            handleSubmit={handleRegistrations}
            btnText={page === 3 ? "Add Farm" : "Continue"}
            continueBtnDisabled={page === 3 || (page === 2 && skip === false)}>
            <>{multiStepper()}</>
          </MultiStepFormBody>
        </section>
      </form>
    </div>
  );
};
