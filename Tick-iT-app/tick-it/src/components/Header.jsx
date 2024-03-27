import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="header-container">
      <div className='header-logo'>
        <img src="https://imgs.search.brave.com/ehE-syLrtU_5HR4MMx555UyLPayNKcIuBHi2pd-mlVc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzM0LzEwLzI2/LzM2MF9GXzUzNDEw/MjY2Nl9uaTMxcnFp/MDVaMThHZGt1TmhY/cWcwbVpjVjVHU1Rr/RC5qcGc" id='header-logo-barcode'/>
        <Link className="header-title" to="/">Tick-iT</Link>
      </div>
      <div className='header-top'>
        <div id='header-left'>
          <div className="header-dropdown" >
            <button id="header-dropdown-button" onClick={() => setShowSearchBar(!showSearchBar)}>Search?</button>
          
          </div>
        </div>
        <nav id='header-right'>
          <Link className="header-links" to="/venues">VENUES</Link>
          <Link className="header-links" to="/events">EVENTS</Link>
          <Link className="header-links" to="/myevents">MY EVENTS</Link>
        </nav>
      </div>
      <div className="header-dropdown">
        {showSearchBar && (
          <div className="search-bar">
            <input id="search-input" type="text" placeholder="Search..." />
            <button id="search-submit" type="submit">Search</button>
          </div>
        )}
      </div>
    
    </div>
  )
}