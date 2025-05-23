import React from 'react'
import Navbar from '../navbar/Navbar'

function hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
        <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(225, 165, 0, 0.7)]'
        >

        </div>

        <Navbar />

    </div>
  )
}

export default hero