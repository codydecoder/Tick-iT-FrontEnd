import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="header-container">
      <Link className="header-title">Tick-iT</Link>
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