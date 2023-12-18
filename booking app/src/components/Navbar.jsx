import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 h-[50px] bg-[#003580] flex justify-between items-center pr-10 pl-10'>
    <div className='max-w-[1024px] text-white flex items-center'>
      <span className='font-bold'>MyBookings</span>
    </div>
    <div className='text-white'>
      <button className='ml-4 hover:font-bold'>Register</button>
      <button className='ml-4 hover:font-bold'>Login</button>
    </div>
  </nav>
  )
}

export default Navbar