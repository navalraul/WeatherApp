import React from 'react';
import { UilArrowUp , UilArrowDown , UilTemperature , UilTear , UilWind , UilSun , UilSunset } from '@iconscout/react-unicons'
import { iconUrlFromCode } from '../services/weatherService';

function Temperature ({weather: 
  {details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidy, feels_like,timezone}}){
  return (
    <div>
      
      <div className='flex justify-center items-center py-6 text-xl text-cyan-300'>
        <p>{details}</p>
      </div>

      <div className='flex flex-row justify-around py-3 text-white'>
        <img src={iconUrlFromCode(icon)} alt="" className='w-20' />
        <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className="mr-1" />
                Real fell:
                <span className='font-medium ml-1'>32°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} className="mr-1" />
                Humidity:
                <span className='font-medium ml-1'>65%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} className="mr-1" />
                Wind:
                <span className='font-medium ml-1'>10 km/h</span>
            </div>
        </div>

      </div>

      <div className='flex flex-row items-center justify-center text-white space-x-2 py-3 text-sm'>
        <UilSun />
        <p className='font-light'>
        Rise: <span className='font-medium ml-1'>6:45 AM</span></p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light'>
        Set: <span className='font-medium ml-1'>6:45 PM</span></p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light'>
        High: <span className='font-medium ml-1'>45°</span></p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light'>
        Low: <span className='font-medium ml-1'>22°</span></p>
        <p className='font-light'>|</p>
      </div>

    </div>
  )
}

export default Temperature
