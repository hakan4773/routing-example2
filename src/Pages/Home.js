import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <div className="container">
    <div className="banner-container">
        <div className="banner">
            <h2>It's time for some Cocktails</h2>
            <NavLink to="/products">
                <div className="btn">View Cocktails</div>
            </NavLink>
        </div>
    </div>
</div>
  )
}

export default Home
