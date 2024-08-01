import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className=" container w-75 py-5">
        <div className="row">
          <div className="col-md-4 py-4 text-center">
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <h6>Clark, MO 65243</h6>
          </div>
          <div className="col-md-4 py-4 text-center">
            <h2>AROUND THE WEB</h2>
            <i className="fa-brands fa-xl fa-facebook me-3"></i>
            <i className="fa-brands fa-twitter me-3 fa-xl"></i>
            <i className="fa-brands fa-linkedin me-3 fa-xl"></i>
            <i className="fa-solid fa-globe me-3 fa-xl"></i>
          </div>
          <div className=" py-4 col-md-4 text-center">
            <h2>ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="copy py-3 text-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
