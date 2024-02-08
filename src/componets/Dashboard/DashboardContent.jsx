import React from 'react'
import GaugeChart from './GaugeChart'
import ListCard from './ListCard'
import SingleCard from './SingleCard'
import DoughnutChart from './DoughnutChart'
import dashboardData from '../../data/dashboard.json'
import useGetDashboardInfo from '../hooks/useGetDashboardInfo'
import LoadingSpinner from '../Utils/LoadingSpinner'

const DashboardContent = () => {

  // const {metrics,production,machines} = dashboardData;
  const { data, isLoading } = useGetDashboardInfo(1,2,'02/06/2024')
  const { machines = [{}], metrics = [{}], production } = data || {};

  if (isLoading) {
    return <LoadingSpinner />;
  }
  

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
          <MetricComponent key={`${metric.type}-${index}`} value={metric.value} title={metric.title} subtitle={metric.subtitle} />
      );
    }
    console.warn(`Unknown metric type: ${metric.type}`);
    return null;
  };

  const renderProduction = (productionInfo) => {
    if (productionInfo && typeof productionInfo === 'object') {
      return Object.entries(productionInfo).map(([key, value]) => (
        <SingleCard key={key} title={key} qty={value} />
      ));
    }
    console.warn('Invalid production data format');
  }
  

  return (
    <div className={`${styles.gridStyles} my-10 pb-12 md:pb-0`}>
      <div className='flex flex-col justify-between items-center 2xl:max-h-[350px]'>
        {
         production && renderProduction(production)
        }
      </div>
      {
        machines && <ListCard machines={machines} />
      }
      {
        metrics && Array.isArray(metrics) && metrics.map(renderMetric)
      }
    </div>
  )
}

export default DashboardContent