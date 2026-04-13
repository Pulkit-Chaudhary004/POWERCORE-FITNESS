import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({gymName}) => {
  return (
    <>  
    
       <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
        <div className="d-flex justify-content-center">
  <a className="navbar-brand text-dark d-flex justify-content-center w-100 mx-4 fw-bold fs-2" href="#">{gymName}</a>
  </div>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end mx-5 " id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link  fw-bold"  to="/">Home <span className="visually-hidden">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link  fw-bold"  to="/franchise">Own a Franchise</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link   fw-bold" to="/train-with-us">Train with us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link  fw-bold" to="">Disabled </NavLink>
      </li>
    </ul>
  </div>
</nav>
    
    
    </>
  )
}

export default Navbar