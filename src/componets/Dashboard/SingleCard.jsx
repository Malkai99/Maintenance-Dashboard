import React from 'react'

const SingleCard = ({title,qty}) => {

  return (
    <div className='flex flex-col items-center md:w-[280px] w-[80%] h-[150px] p-[25px] justify-center bg-white rounded-2xl shadow-cardShadow my-5 md:my-0 '>
        <p className='font-roboto font-semibold text-6xl select-none' >{qty}</p>
        <h2 className='font-roboto font-bold text-3xl select-none' >{title}</h2>
    </div>
  )
}

export default SingleCard