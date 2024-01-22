import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type='text' 
        className='text-l font-light w-full p-1 focus:outline-none capitalize placeholder:lowercase' 
        placeholder='Search for city....' />
        <UilSearch size={25} className="text-white cursor-pointer hover:scale-125 transition ease-out "  />
        <UilLocationPoint size={25} className="text-white cursor-pointer hover:scale-125 transition ease-out " />
      </div>
      <div className='flex flex-row items-center justify-center ml-6'>
        <button name='metric'className='text-xl text-white font-light'  >°C</button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name='imperial'className='text-xl text-white font-light'  >°F</button>
      </div>
    </div>
  )
}

export default Inputs
