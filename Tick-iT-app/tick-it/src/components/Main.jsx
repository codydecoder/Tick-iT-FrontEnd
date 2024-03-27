import React from 'react'
import EventList from './EventList'
import EventDetails from './EventDetails'
import { Routes, Route } from 'react-router-dom'

function Main() {
  return (
    <div>
      <h1>This is Main Component</h1>
      <Routes>
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </div>
  )
}

export default Main