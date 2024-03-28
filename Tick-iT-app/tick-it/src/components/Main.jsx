
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import VenueList from './VenueList'
import VenueDetails from './VenueDetails'
import React from 'react'
import EventList from './EventList'
import EventDetails from './EventDetails'
import MyEvents from './MyEvents'


function Main() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path='/venues' element = {<VenueList/>}/>
        <Route path='/venues/:venueId' element = {<VenueDetails/>}/>
        <Route path='/myevents' element = {<MyEvents/>}/>
      </Routes>

    </div>
  )
}

export default Main