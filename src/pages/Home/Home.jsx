import React from "react";
import head from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <div className="home-content d-flex justify-content-center align-items-center py-5 flex-column">
      <div className="image w-25 d-flex justify-content-center my-5 ">
        <img className=" w-75" src={head} alt="" />
      </div>
      <h1>START FRAMEWORK</h1>
      <i className="fa-solid fa-star text-center py-3"></i>
      <p className=" text-white">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
