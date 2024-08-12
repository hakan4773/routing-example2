import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
function Footer() {
  return (
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><NavLink to={"/Home"} className="nav-link px-2 text-body-secondary">Home</NavLink></li>
      <li class="nav-item"><NavLink to={"/About"} className="nav-link px-2 text-body-secondary">About</NavLink></li>
      <li class="nav-item"><NavLink to={"/Products"} className="nav-link px-2 text-body-secondary">Products</NavLink></li>
     
    </ul>
    <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
</div>
  )
}

export default Footer
