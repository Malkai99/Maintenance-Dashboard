import React from 'react'

const SingleCard = ({title,qty}) => {

  return (
    <div className='flex flex-col sm:w-[280px] w-[80%] h-[150px] p-[25px] justify-center items-start bg-white rounded-2xl shadow-cardShadow my-5 sm:m-0 '>
        <p className='font-roboto font-semibold text-6xl' >{qty}</p>
        <h2 className='font-roboto font-bold text-3xl' >{title}</h2>
    </div>
  )
}

export default SingleCard