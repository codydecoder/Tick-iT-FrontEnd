import React, { useState, useEffect }from "react";
import axios from "axios";


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
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Description: {event.description}</p>
            <p>Venue: {event.venue}</p>
            <img src={event.image} alt={event.name} style={{maxWidth: '100%'}} />
          </li>
        ))}
      </ul>
    </div>
  )
}


export default EventList;