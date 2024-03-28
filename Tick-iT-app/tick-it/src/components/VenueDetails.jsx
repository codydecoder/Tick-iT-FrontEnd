import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function VenueDetails() {
  
  const [venues, setVenues] = useState('')
  const [error, setError] = useState('')
  const { venueId } = useParams()

  useEffect(() => {
    const getVenues = async () => {
      try{
        const response = await axios.get(`http://localhost:8000/venues/${venueId}`)
        console.log(response.data)
        setVenues(response.data)
      } catch (error) {
        setError('Failed to get venues')
        console.error(error)
      }
    }

    getVenues()
  }, [] )

  return (
    <div>
      <div className="venue-details-container">
      <div className="venue-container">
          <img src = {venues.image} width="550px"></img>
          <h2>{venues.name}</h2>
          <p>Parking: {venues.parking}</p>
          <p>Capacity: {venues.capacity}</p>
          <p>{venues.description}</p>
          <p>Policies: {venues.policies}</p>
      </div>
    </div>
    </div>
  )
}