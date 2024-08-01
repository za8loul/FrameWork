import React, { useState } from "react";
import ContactTitle from "../../Components/ContactTitle/ContactTitle";
import './Contact.css'

export default function Contact() {
  const [inputValues, setInputValues] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (field, value) => {
    setInputValues({ ...inputValues, [field]: value });
  };

  return (
    <div>
      <ContactTitle />
      <div className="container justify-content-center d-flex contact">
        <div className="w-50">
          <label
            htmlFor="userName"
            className={`position-relative ${
              inputValues.userName ? "top-0" : "top"
            }  w-100 `}
          >
            userName :
          </label>
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative"
            value={inputValues.userName}
            onChange={(e) => handleChange("userName", e.target.value)}
          />

          <label
            htmlFor="userAge"
            className={`position-relative ${
              inputValues.userAge ? "top-0" : "top"
            }  w-100 `}
          >
            userAge :
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userAge"
            className="form-control border-0 border-bottom py-3 position-relative"
            value={inputValues.userAge}
            onChange={(e) => handleChange("userAge", e.target.value)}
          />

          <label
            htmlFor="userEmail"
            className={`position-relative ${
              inputValues.userEmail ? "top-0" : "top"
            } w-100 `}
          >
            userEmail :
          </label>
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userEmail"
            className="form-control border-0 border-bottom py-3 position-relative"
            value={inputValues.userEmail}
            onChange={(e) => handleChange("userEmail", e.target.value)}
          />

          <label
            htmlFor="userPassword"
            className={`position-relative ${
              inputValues.userPassword ? "top-0" : "top"
            } w-100 `}
          >
            userPassword :
          </label>
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userPassword"
            className="form-control border-0 border-bottom py-3 position-relative"
            value={inputValues.userPassword}
            onChange={(e) => handleChange("userPassword", e.target.value)}
          />
        </div>
      </div>
      <div className="container w-50 mb-5">
        <div className="d-flex ms-5">
          <button className="btn mt-4 text-white sub-btn">send Message</button>
        </div>
      </div>
      
    </div>
  );
}
