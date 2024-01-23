import React from 'react'

function TopButtons () {

  const cities = [
    {
      id:1,
      title: 'London'
    },
    {
      id:2,
      title: 'Delhi'
    },
    {
      id:3,
      title: 'Paris'
    },
    {
      id:4,
      title: 'New York'
    },
    {
      id:5,
      title: 'Tokyo'
    },
  ]

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) =>(
        <button className='text-white text-lg font-medium'>{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons;


