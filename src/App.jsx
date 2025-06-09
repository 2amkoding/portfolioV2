import React from 'react'
import Hero from './components/hero/Hero'


const App = () => {
  return (


    <div className='bg-[#303446] min-h-screen flex p-4'>

      <div className='w-1/6 border border-[#babbf1] rounded-md h-screen m-auto'>Left sidebar</div>

      <div className='flex-1 flex flex-col items-center'>
        <div className='w-2/3 border border-[#babbf1] rounded-md h-1/3 mt-8'>About Me</div>



        <div className='w-2/3 border border-[#babbf1] rounded-md h-1/3 mt-8'>Insert mini-game</div>
      </div>

      <div className='w-1/6 border border-[#babbf1] rounded-md h-screen'>idk yet, stuff</div>

    </div >



  )
}

export default App
