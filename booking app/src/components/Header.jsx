

import React from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import ParkIcon from '@mui/icons-material/Park';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <div className='text-white flex flex-col justify-center bg-[#003580]'>
      <div className=' justify-center pl-10 mt-[20px] mb-[30px] flex gap-10'>
        <div className='p-3 flex items-center gap-1 active'>
          <HotelIcon />
          <span>Stays</span>
        </div>
        <div className='p-3 flex items-center gap-1 '>
          <FlightIcon />
          <span>Flight</span>
        </div>
        <div className='flex items-center gap-1 p-3'>
          <DirectionsCarFilledIcon />
          <span>Car Rental</span>
        </div>
        <div className='flex items-center gap-1 p-3'>
          <ParkIcon />
          <span>Attraction</span>
        </div>
        <div className='flex items-center gap-1 p-3'>
          <LocalTaxiIcon />
          <span>Airport Taxi</span>
        </div>
      </div>
      <div className='mb-10 flex flex-col items-center justify-center pl-10 pr-10'>
        <h1 className='font-bold text-5xl'>Get Lifetime of discount? It's Genius</h1>
        <button className='mt-8 p-2 rounded-[10px] bg-white text-black '>Sign In/Register</button>
      </div>
      <div>
        <div>
            <HotelIcon/>
            <input type="text" placeholder='Where are you Going?'/>
        </div>
        <div>
            <CalendarMonthIcon/>
           <span>date to date</span>
        </div>
        <div>
            <PersonIcon/>
            <span>2 Adults 2 Children 1 room</span>
        </div>
      </div>
      <style>
        {`
            .active {
                border: 1px solid white;
                border-radius: 20px;
            }
        `}
      </style>
    </div>
  );
};

export default Header;


