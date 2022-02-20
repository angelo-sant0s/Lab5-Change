import React, { useState, useEffect } from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);


const OzoneGraph = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try{
           const resp = await fetch(
                `https://api.v2.emissions-api.org/api/v2/ozone/average.json?country=CH&begin=2020-12-01&end=2020-12-31`
                  )
              const chart = await resp.json();
              setChart(chart);
        }catch(error){
            console.log(error);
        }
    };
    fetchData()
  }, [])

  let data = {
    labels: chart?.map(x => x.start.substring(8,10)),
    datasets: [{
      label: `Ozone Average Beijing [mol/m²] per day`,
      data: chart?.map(x => x.average),
      backgroundColor: [
        'rgba(98, 161, 127, 0.2)',
      ],
      borderColor: [
        'rgba(98, 161, 127, 1)',
      ],
      borderWidth: 1
    }]
  };

  let options = {
    scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Ozone [mol/m²]'
            },
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'day'
            }
        }]
    }
  }

  return (
      <Bar
        data={data}
        options={options}
       />
  )
}

export default OzoneGraph;