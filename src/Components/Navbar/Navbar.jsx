import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <><nav className="navbar navbar-expand-lg p-4">
    <div className="container">
      <NavLink className="navbar-brand" to={""} >START FRAMEWORK</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <NavLink className="nav-link me-3 " aria-current="page" to={"about"}>ABOUT</NavLink>
          <NavLink className="nav-link me-3" to={"portfolio"}>PORTFOLIO</NavLink>
          <NavLink className="nav-link me-3" to={"contact"}>CONTACT</NavLink>
        </div>
      </div>
    </div>
  </nav></>
  )
}
