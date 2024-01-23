import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function TimeandLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div>
      <div className='flex flex-row items-center justify-center my-6'>
        <p className='text-white text-l font-extralight'>
            {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className='justify-center flex items-center my-6'>
        <p className='text-white text-3xl'>{`${name},${country}`}</p>
      </div>
    </div>
  )
}

export default TimeandLocation
