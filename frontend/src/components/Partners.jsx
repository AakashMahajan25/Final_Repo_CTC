import React from 'react'
import Bsp from '../assets/bsp.png'
import Bsp2 from '../assets/bsp2.jpg'

const Partners = () => {
  return (

    <>
    <div className='bg-gradient-to-br from-blue-500 to-green-500 py-10 mt-20'>
      <div className='text-center text-4xl text-white'>PARTNERS</div>
      <p className='text-center text-white lg:w-2/3 m-auto p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt impedit quaerat odio rem laborum, aspernatur incidunt consequatur quos sapiente aperiam optio a excepturi consequuntur minima temporibus, saepe, corrupti iusto exercitationem? </p>
    </div>
    <div className='lg:pb-20 pb-10 pt-6'>
        <h1 className='text-center py-2 mb-4 text-2xl lg:text-4xl font-semibold text-blue-800'>Educational Partners</h1>
        <div className='flex justify-center gap-10 lg:w-1/2 lg:m-auto'>
            <img src={Bsp} alt=""  className='w-1/3 '/>
            <img src={Bsp2} alt="" className='w-1/3 ' />
        </div>
    </div>
    </>
  )
}

export default Partners
