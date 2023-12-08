import React from 'react'
import Search from './Search'
import NavIcon from './NavIcon'

function Nav() {
  return (
    <div className="container-fluid d-flex justify-content-between bg-dark text-white p-2">
      <div className="nav-left">
    <div className="container d-flex">
        <NavIcon icon={<i className="ri-facebook-box-fill"></i>}/>
        <NavIcon icon={<i className="ri-instagram-line"></i>}/>
        <NavIcon icon={<i className="ri-snapchat-line"></i>}/>
        <NavIcon icon={<i className="ri-google-line"></i>}/>
        <NavIcon icon={<i className="ri-linkedin-box-fill"></i>}/>
      
    </div>
      </div>
      <Search icon={<i className="ri-search-line"></i>} />
    </div>
  )
}

export default Nav