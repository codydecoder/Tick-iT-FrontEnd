import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function VenueList() {

  const [venues, setVenues] = useState([])
  const [error, setError] = useState('')
  const [events, setEvents] = useState('')

  const navigate = useNavigate()
  let showItem = (id) => {
    navigate(`/venues/${id}`)
  }


  useEffect(() => {
    const getVenues = async () => {
      try{
        const response = await axios.get(`http://localhost:8000/venues`)
        console.log(response.data)
        setVenues(response.data)
      } catch (error) {
        setError('Failed to get venues')
        console.error(error)
      }
    }

    const getEvents = async () => {
      try{
        const response = await axios.get(`http://localhost:8000/events`)
        setEvents(response.data.filter(eventlist => eventlist.venue == 1))
      } catch (error) {
        setError('Failed to get events')
        console.error(error)
      }
    }
    console.log(events)

    getVenues()
    getEvents()
  }, [] )


  return (
    <div>
      <h1>VENUES</h1>
      <div className="venue_container">
          {venues.map( (venue) => (
            <div key={venue.name} onClick={()=> showItem(venue.id)}>
              <div className='venue_info'>
                <h3>{venue.name}</h3>
                <img src = {venue.image} width="300px"></img>
                <p>{venue.address}</p>
              </div>

              <div className='upcoming_events'>
                <h3>March</h3>
                {events.map((eventlist) => (
                  <div>{eventlist.name}</div>
                ))}
              </div>

            </div>
          ))}
      </div>

    </div>
  )
}