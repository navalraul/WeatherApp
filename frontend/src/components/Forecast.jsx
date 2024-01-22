import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div className='flex items-center justify-start ml-16 my-6'>
            <p className='text-white font-medium uppercase '>{title}</p>
        </div>
        <hr className='my-2 ml-10 mr-10' />

        <div className='flex flex-row items-center justify-around text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    4:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-2 ' />
                <p className='font-medium '>32°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm '>
                    4:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-2 ' />
                <p className='font-medium '>32°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm '>
                    4:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-2' />
                <p className='font-medium'>32°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    4:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-2' />
                <p className='font-medium'>32°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    4:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-2' />
                <p className='font-medium'>32°</p>
            </div>
        
        </div>
    </div>
  )
}

export default Forecast
