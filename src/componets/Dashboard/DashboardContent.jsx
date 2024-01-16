import React from 'react'
import GaugeChart from './GaugeChart'
import ListCard from './ListCard'
import SingleCard from './SingleCard'
import DoughnutChart from './DoughnutChart'
import dashboardData from '../../data/dashboard.json'

const DashboardContent = () => {

const {metrics,production,machines} = dashboardData;

  const styles = {
    gridStyles:`dashboard__container block relative w-full h-auto grid gap-6 xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 sm:grid-cols-1 sm:grid-auto-rows-auto`,
    marginStyles: `lg:px-20 md:px-10 px-5 my-10 pb-12`
  }

  const metricComponents = {
    doghnut: DoughnutChart,
    gauge: GaugeChart,
  };

  const renderMetric = (metric, index) => {
    const MetricComponent = metricComponents[metric.type];
    if (MetricComponent) {
      return (
        <>
          <MetricComponent value={metric.value} title={metric.title} subtitle={metric.subtitle} />
        </>
      );
    }
    console.warn(`Unknown metric type: ${metric.type}`);
    return null;
  };

  const renderProduction = () => {
    if (production && typeof production === 'object') {
      return Object.entries(production).map(([key, value]) => (
        <SingleCard key={key} title={key} qty={value} />
      ));
    }

    // Handle unexpected production data format
    console.warn('Invalid production data format');

  }
  

  return (
    <div className={`${styles.gridStyles} my-10 pb-12 md:pb-0`}>
      <div className='flex flex-col justify-between items-center 2xl:max-h-[350px]'>
        {renderProduction()}
      </div>
      <ListCard machines={machines} />
      {metrics && Array.isArray(metrics) && metrics.map(renderMetric)}
    </div>
  )
}

export default DashboardContent