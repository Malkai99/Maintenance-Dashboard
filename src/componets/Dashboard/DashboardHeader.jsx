import React from 'react'

const DashboardHeader = () => {
    const styles = {
        cardStyles: 'flex items-center justify-center bg-white rounded-xl shadow-cardShadow px-5 py-5 ',
        fontStyles: 'font-roboto font-bold text-xl text-dark-charcoal'
    }

  return (
    <div className='relative sm:flex justify-center w-full h-auto hidden mt-[30px]' >

        <div className='w-1/3 h-full flex justify-start' >
            <div className={`${styles.cardStyles} ${styles.fontStyles} w-[200px] h-[50px]`}>
                <p>Machine 1</p>
            </div>
        </div>
        <div className='w-1/3 h-full flex justify-center' >
            <div className={`${styles.cardStyles} ${styles.fontStyles} w-[200px] h-[50px]`}>
                <p>Shift 2</p>
            </div>
        </div>
        <div className='w-1/3 h-full flex justify-end' >
            <div className={`${styles.cardStyles} ${styles.fontStyles} w-[400px] h-[50px]`}>
                <p>18:10 Wednesday 8th, November 2023 </p>
            </div>
        </div>
        
    </div>
  )
}

export default DashboardHeader