import React from 'react'
// import PieChart from './PieChart'
import GaugeChart from './GaugeChart'
import ListCard from './ListCard'
import SingleCard from './SingleCard'
import DoughnutChart from './DoughnutChart'

const DashboardContent = () => {
  const styles = {
    gridStyles:`dashboard__container block relative w-full h-full grid gap-10 gap-y-20 xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 sm:grid-cols-1 sm:grid-auto-rows-auto`,
    marginStyles: `lg:px-20 md:px-10 px-5 my-10`
  }

  return (
    <div className={`${styles.gridStyles} my-14`}>

      <div className='flex xl:justify-start' >
        <GaugeChart />
      </div>
      <div className='flex items-start xl:justify-center'>
        <ListCard />
      </div>
      <div className='flex flex-col justify-between items-center xl:items-end' >
        <SingleCard title={'Piezas Reales'} qty={232} />
        <SingleCard title={'Meta Piezas'} qty={232} />
      </div>
      <div className='flex xl:justify-start' >
        <DoughnutChart title={'Avaibility'} value={85} />
      </div>
      <div className='flex xl:justify-center' >
      <DoughnutChart title={'Performance'} value={66} />
      </div>
      <div className='flex xl:justify-end' >
      <DoughnutChart title={'Quality'} value={35} />
      </div>

      {/* <div className='flex xl:justify-start' >
        <GaugeChart />
      </div> */}

      {/* <ListCard /> */}
      {/* <div className='flex sm:flex-col justify-between xl:items-end' >
        <SingleCard title={'Piezas Reales'} qty={232} />
        <SingleCard title={'Meta Piezas'} qty={232} />
      </div>
      <DoughnutChart title={'Avaibility'} value={85} />
      <DoughnutChart title={'Performance'} value={66} />
      <DoughnutChart title={'Quality'} value={35} /> */}

    </div>
  )
}

export default DashboardContent