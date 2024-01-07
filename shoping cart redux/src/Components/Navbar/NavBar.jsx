
import { Link } from 'react-router-dom'
import "./NavBar.css"
function NavBar() {
  return (
    <>
      <nav className='navbar-parent'>
        <span>
          logo
        </span>

        <div className="nav-links">

          <Link to={'/'}>Home</Link>
          <Link to={"/cart"} >Cart</Link>

        </div>

        <span>cart Items:0</span>
      </nav>
    </>
  )
}

export default NavBar
