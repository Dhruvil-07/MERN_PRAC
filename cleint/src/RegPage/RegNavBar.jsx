import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RegNavBar() {
  return (

    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">

        <span className="navbar-brand">
          Registration Page
        </span>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-2 ms-auto mb-5 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link active" to='/'>
                Add Data
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link active" to='/dispdata'>
                Display Data
              </NavLink>
            </li>

          </ul>

        </div>

      </div>
    </nav>


  )
}
