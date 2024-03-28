import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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
        <div className='button-div'>
          <Link to="/venues"><button> ← </button></Link>
        </div>
          <img src = {venues.image} width="750px"></img>
          <h2>{venues.name}</h2>
          <div className="data-lines">
            <h3>Parking: </h3>
            <p>{venues.parking}</p>
          </div>
          <div className="data-lines">
            <h3>Capacity: </h3>
            <p>{venues.capacity}</p>
          </div>
          <div className="data-lines">
            <h3>Venue Description:</h3>
            <p>{venues.description}</p>
          </div>
          <div className="data-lines">
            <h3>Policies: </h3>
            <p>{venues.policies}</p>
          </div>
      </div>
    </div>
    </div>
  )
}