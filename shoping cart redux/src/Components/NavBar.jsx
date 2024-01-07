import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <>
      <nav>
        <span>
            logo
        </span>

        <div className="nav-links">

            <Link to={'/'}>Home</Link>
            <Link to={"/cart"} >Cart</Link>
            
        </div>
      </nav>
    </>
  )
}

export default NavBar
