
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { useSelector } from 'react-redux'



function NavBar() {

  const item=useSelector((state)=>state.cart)
  

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

        <span>cart Items: {item.length} </span>
      </nav>
    </>
  )
}

export default NavBar
