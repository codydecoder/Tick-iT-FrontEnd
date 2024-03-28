import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function VenueList() {

  const [venues, setVenues] = useState([])
  const [error, setError] = useState('')
  const [events, setEvents] = useState([])
  const { venueId } = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    const getVenues = async () => {
      try{
        const response = await axios.get(`http://localhost:8000/venues`)
        // console.log(response.data)
        setVenues(response.data)
      } catch (error) {
        setError('Failed to get venues')
        console.error(error)
      }
    }

    const getEvents = async () => {
      try{
        const response = await axios.get(`http://localhost:8000/events`)
        console.log('line 29', response.data)

        // setEvents(response.data.filter(eventlist => eventlist.venue == 1))

        setEvents(response.data)
      } catch (error) {
        setError('Failed to get events')
        console.error(error)
      }
    }
    getVenues()
    getEvents()
  }, [] )


  return (
    <div className="venue-container">
      <h1>VENUES</h1>
      <div>
          {venues.map( (venue) => (
            <div key={venue.name} onClick={()=>(navigate (`/venues/${venue.id}`))} className='venue-card'>
              <div className='venue-info'>
                <h3>{venue.name}</h3>
                <img src = {venue.image} width="300px"></img>
                <p>Address: {venue.address}</p>
              </div>

              <div className='upcoming-events'>
                <h3>Upcoming Events</h3>
                {events.filter((event) => event.venue === venue.id).map((venueEvent =>             (<div key={venueEvent.name} className="upcoming-list">{venueEvent.name}</div>)))}
              </div>

            </div>
          ))}
      </div>

    </div>
  )
}
