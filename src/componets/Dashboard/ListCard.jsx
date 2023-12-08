import React from 'react'

const ListCard = () => {

    
    const getColorStatus = (isActive) => {
        if(isActive) return 'text-green-success';
        return 'text-red-alert';
    }

    return (
        <div className='font-roboto lg:max-w-[400px] lg:max-h-[350px] h-[350px] card__container block w-full px-8 py-5 max-w-full max-h-80 2xl:max-h-96 bg-white rounded-2xl shadow-cardShadow'>
            <h3 className='font-roboto font-bold w-full text-2xl md:text-3xl xl:text-4xl text-grey-text ' >Machines</h3>
            <ul className='h-[80%] flex flex-col justify-around' >
                <li className='relative flex justify-between items-center flex-wrap h-auto w-full'>
                    <p>Machine 1</p>
                    <p className={`${getColorStatus(true)}`} >Active</p>
                </li>
                <li className='relative flex justify-between items-center flex-wrap h-auto w-full' >
                    <p>Machine 2</p>
                    <p className={`${getColorStatus(true)}`} >Active</p>
                </li>
                <li className='relative flex justify-between items-center flex-wrap h-auto w-full' >
                    <p>Machine 3</p>
                    <p className={`${getColorStatus(true)}`} >Active</p>
                </li>
                <li className='relative flex justify-between items-center flex-wrap h-auto w-full' >
                    <p>Machine 4</p>
                    <p className={`${getColorStatus(false)}`} >Inactive</p>
                </li>
            </ul>
        </div>
    )
}

export default ListCard