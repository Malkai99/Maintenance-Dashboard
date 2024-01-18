import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut  } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({title, value}) => {

    
    const getChartColor = (color) => {
        const opciones = {
            'Disponibilidad': '#3498DB',
            'Rendimiento': '#B30000',
            'Calidad': '#FFC029',
            'default': '#598234',
        }
    
        return opciones[color] || opciones['default'];
    }

    const options = {
        plugins:{
            legend:{
                display: false
            },
            tooltip: {
                enabled: false,
                mode: 'dataset'
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        layout:{
          padding: 20
        },
    };

    const data = {
        labels: ['OEE', 'Waste'],
        datasets: [
          {
            label: 'Effectiveness',
            data: [value,100-value],
            backgroundColor: [
                getChartColor(title),
                '#E2E2E2',
            ],
            borderColor: [
                getChartColor(title),
                '#E2E2E2',
            ],
            borderWidth: 1,
            rotation: 90,
            cutout: '85%',
          },
        ],
    };

    const percentageText = {
        id: 'gaugePointer',
        afterDatasetsDraw(chart){
            const { ctx } = chart;
            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;


            // Text            

            function getFont() {
                const factorSize = 52;
                const aspectRatio = chart.chartArea.width / chart.chartArea.height;
                const fontSize = factorSize * aspectRatio;
                return fontSize > 60 ? 60 : fontSize;
            }


            // ctx.font = `bold 3rem Inter sans-serif`;
            ctx.font = `bold ${getFont()}px Inter sans-serif`;
            ctx.fillStyle = getChartColor(title);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${value}%`, xCenter,yCenter);


        }
    };

  return (
    <div className="card__container block w-full px-8 py-5 max-w-full 2xl:max-w-[100%] lg:max-w-[600px] lg:max-h-[350px] max-h-80  h-[350px] 2xl:max-h-96 bg-white rounded-2xl shadow-cardShadow ">
      <h3 className='font-roboto font-bold w-full text-2xl md:text-3xl xl:text-4xl text-grey-text ' >{title}</h3>
      <div className='relative block h-[90%] w-[99%]' >
          <Doughnut 
            options={options}
            data={data}
            plugins={[percentageText]}
          />
      </div>
    </div>
  )
}

export default DoughnutChart