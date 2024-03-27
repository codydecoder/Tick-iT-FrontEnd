import VenueList from './VenueList'
import VenueDetails from './VenueDetails'
import {Routes, Route} from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <h1>This is Main Component</h1>
      <Routes>
        <Route path='/venues' element = {<VenueList/>}/>
        <Route path='/venues/:venueId' element = {<VenueDetails/>}/>
      </Routes>
    </div>
  )
}