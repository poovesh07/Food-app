import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import StoreContext from '../../context/StoreContext'

const Navbar = ({setshowLogin}) => {

  const [menu, setmenu] = useState("menu")

    const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setmenu("Mobile App")} className={menu === "Mobile App" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setmenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className='navbar-right'>
       <Link to={'/cart'}><img src={assets.basket_icon} alt="Basket" /> </Link>

        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="Search" />
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

        <button className='signin-btn' onClick={()=>setshowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
