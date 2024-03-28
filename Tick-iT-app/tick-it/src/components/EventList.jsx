import React, { useState, useEffect }from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"


function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/events/`);
        console.log(response.data);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    getAllEvents()
  }, []);

  
  return (
    <div className="event-list-container">
      <h1>Event List</h1>
      <ul className="bullet-point">
        {events.map(event => (
          <li key={event.id}>
            <div className="event-item">
            <h2 className="event-list-title">{event.name}</h2>
            <p className="event-list-date">Date: {event.date}</p>
            <p className="event-list-time">Time: {event.time}</p>
            <p className="event-list-price">Price: {event.price}</p>
            <p className="event-list-description">Description: {event.description}</p>
            <p className="event-list-venue">Venue: {event.venue}</p>
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.name} style={{maxWidth: '100%'} } />
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default EventList;