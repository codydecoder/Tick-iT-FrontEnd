import React, { useState, useEffect, useContext} from "react"
import axios from "axios"
import DataContext from '../DataContext'
import { Link, useParams } from "react-router-dom"


function EventDetails({match}) {
  const [event, setEvent] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getEventDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/events/${id}/`)
        console.log(id)
        setEvent(response.data)
      } catch (error) {
        console.error('error fetching event details:', error)
      }
    }

    getEventDetails()

  }, [id])
  
 if (!event) {
    return <p>Loading...</p>
 }

  return (
    <div className="event-details-container">
      <div className='button-div'>
        <Link to="/events"><button> ← </button></Link>
      </div>
      <h1>{event.name}</h1>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Price: {event.price}</p>
      <p>Description: {event.description}</p>      
      <img src={event.image} alt={event.name} style={{ maxWidth: '100%' }} />
      <br></br>
    </div>
  )
}

export default EventDetails