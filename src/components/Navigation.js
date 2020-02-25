import React from 'react'
import logo from "../images/logo.png"

export default function Navigation() {
    return (
       <nav>
           <div className="left">
               <img src={logo} alt="logo" />
           </div>

           <div className="right">
               <a href="#">Help</a>
           </div>
       </nav>
    )
}
