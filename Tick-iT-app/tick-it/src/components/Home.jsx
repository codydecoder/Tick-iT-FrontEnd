import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const [allVenues, setAllVenues] = useState([])

  useEffect(() => {
    const getAllVenues = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/venues/`)

      console.log(response.data)
      const venuesArr = response.data
      setAllVenues(venuesArr)
    }
    getAllVenues()
  }, [])
  return (
    <div className='home'>
      {/* <div className=‘venues’> */}
      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {allVenues.map((venue) => (
          <div className="venue-card" key={venue}>
            {/* Notes from last project: */}
            {/* <SwiperSlide onClick={() => showItem(drink.idDrink)}><img src={drink.strDrinkThumb} alt='pic' /><p className="drink-name">{drink.strDrink}</p></SwiperSlide> */}
            <SwiperSlide ><img src={venue.image} alt='pic' /></SwiperSlide>
          </div>
        ))}
      </Swiper>
      {/* </div> */}
      {/* All Venues Section */}
      <div className='all-venues'>
        {allVenues.map((venue) => (
          <div><img className='venue-image' src={venue.image} alt='pic' /><p className="venue-name">{venue.name}</p></div>
        ))}
      </div>
    </div>
  )
}