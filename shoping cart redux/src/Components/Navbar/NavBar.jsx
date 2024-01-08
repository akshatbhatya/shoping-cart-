
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



function NavBar() {

  const item=useSelector((state)=>state.cart)


  useEffect(() => {
    
    console.log(item.length);
  }, [item]);
  

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

        {item.length > 0 && <span>Cart Items: {item.length}</span>}
        {item.length === 0 && <span>Your cart is empty.</span>}
  
      </nav>
    </>
  )
}

export default NavBar
