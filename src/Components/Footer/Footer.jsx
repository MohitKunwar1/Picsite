import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='w-full border-t-2 border-amber-600 '>
      <div className='text-center m-1 md:m-4'>
        <h1 className=' md:font-bold text-xl md:text-3xl '>Picsite</h1>
        <div className=' font-normal text-sm md:text-base'>
          copyright &copy; 2023 Picsite Inc.
        </div>
        <div className=' text-light font-normal md:text-xl'>
          Facebook | Instagram | Twitter
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer