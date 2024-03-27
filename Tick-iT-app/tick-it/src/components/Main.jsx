
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import VenueList from './VenueList'
import VenueDetails from './VenueDetails'
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import EventList from './EventList'
import EventDetails from './EventDetails'


function Main() {

  return (
    <div>
      <h1>This is Main Component</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path='/venues' element = {<VenueList/>}/>
        <Route path='/venues/:venueId' element = {<VenueDetails/>}/>
      </Routes>
    </div>
  )
}

export default Main