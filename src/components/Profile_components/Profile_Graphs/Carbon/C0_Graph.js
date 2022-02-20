import React, { useState, useEffect } from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
);


const C0Graph = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try{
           const resp = await fetch(
                `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=CH&begin=2021-12-01&end=2021-12-31`
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
    labels: chart?.map(x => x.start),
    datasets: [{
      label: `C0 Average`,
      data: chart?.map(x => x.average),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  let options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  } 

  return (
    <div>
      <Bar
        data={data}
        options={options}/>
    </div>
  )
}

export default C0Graph;