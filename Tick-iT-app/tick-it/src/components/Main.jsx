import VenueList from './VenueList'
import VenueDetails from './VenueDetails'
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import EventList from './EventList'
import EventDetails from './EventDetails'


export default function Main() {
  return (
    <div>
      <h1>This is Main Component</h1>
      <Routes>
        <Route path='/venues' element = {<VenueList/>}/>
        <Route path='/venues/:venueId' element = {<VenueDetails/>}/>
        <Route path='/events' element = {<EventList/>}/>
        <Route exact path="/" component={EventList} />
        <Route path="/events/:id" component={EventDetails} />
      </Routes>
    </div>
  )
}