import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut  } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);



const GaugeChart = ({title, subtitle, value}) => {

  const options = {
    plugins:{
        legend:{
            display: false
        },
        tooltip: {
            enabled: false
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    layout:{
      padding: 40
    },
  }
    
  const data = {
    labels: [title, subtitle],
    datasets: [
      {
        label: 'Efectividad',
        data: [value,100-value],
        backgroundColor: [
            '#598234',
            '#2B2B36',
        ],
        borderColor: [
            '#598234',
            '#2B2B36',
        ],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
        cutout: '75%',
      },
    ],
  };

  const gaugePointer = {
        id: 'gaugePointer',
        afterDatasetsDraw(chart, args, plugins){
            const { ctx, data } = chart;
            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;
            const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
            const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
            const aspectRatioGauge = outerRadius - innerRadius
            const pointerThick = (outerRadius - innerRadius) + aspectRatioGauge;
            const startPoint = 0 - outerRadius - (aspectRatioGauge/2);
            const angle = Math.PI / 180;
            const pointerWidht = 6;
            const elementValue = chart.getDatasetMeta(0).data[0].$context.raw

            
            function sumArray(arr) {
              return arr.reduce((acc,current) => acc + current, 0)
            }
            
            const dataPointArray = data.datasets[0].data.map((datapoint,index) => {
              return datapoint;
            })
            
            const totalSum = sumArray(dataPointArray)
            const pointerValue = elementValue / totalSum * 100;
            const targetPointerRotation = (elementValue / totalSum  * 180) - 90;

            //Pointer
            ctx.save();
            ctx.translate(xCenter,yCenter);
            ctx.rotate(angle * targetPointerRotation);
            ctx.beginPath();
            ctx.fillStyle = '#598234';
            // initial point (X,Y), width, height, radius 
            ctx.roundRect(0 - pointerWidht/2, startPoint, pointerWidht, pointerThick, 5);
            ctx.fill();

            ctx.restore();

            // Text           
            

            function getFont() {
                const factorSize = 30;
                const aspectRatio = chart.chartArea.width / chart.chartArea.height;
                const fontSize = factorSize * aspectRatio;
                return fontSize > 60 ? 60 : fontSize;
            }

            // GET custom distance
            // function getDistanceY() {
            //   const radius = chart.getDatasetMeta(0).data[0].outerRadius
            //   let centerAxisY = chart.chartArea.height / 2 + radius - 10;
            //   centerAxisY = Math.min(245, Math.max(195, centerAxisY));

            //   return centerAxisY;
            // }
            // console.log(getDistanceY())

            ctx.font = `bold ${getFont()}px Inter sans-serif`;
            // ctx.font = `bold 3rem Inter sans-serif`;
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(`${pointerValue.toFixed(0)}%`, xCenter,yCenter);
            // ctx.fillText(`${pointerValue.toFixed(0)}%`, xCenter+10,getDistanceY());


            



        },
        // afterDatasetsDraw(chart, args, plugins){
        //     const { ctx, data } = chart;
        //     ctx.save();
        //     const xCenter = chart.getDatasetMeta(0).data[0].x;
        //       const yCenter = chart.getDatasetMeta(0).data[0].y;
        //     const outRadius = chart.getDatasetMeta(0).data[0].outRadius;
        //     const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
        //     ctx.moveTo(xCenter,yCenter);
        //     ctx.moveTo(xCenter,yCenter- outRadius);
        //     ctx.stroke();

        // },
};

  return (
    <div className="card__container block w-full px-8 py-5 max-w-full 2xl:max-w-[100%] lg:max-w-[600px] lg:max-h-[350px] max-h-80  h-[350px] 2xl:max-h-96 bg-white rounded-2xl shadow-cardShadow ">
      <h3 className='font-roboto font-bold w-full text-2xl md:text-3xl xl:text-4xl text-grey-text select-none' >{title}</h3>
      <div className='relative block h-full w-[99%]' >
          <Doughnut 
            options={options}
            data={data}
            plugins={[gaugePointer]}
          />
      </div>
    </div>
  )
}

export default GaugeChart