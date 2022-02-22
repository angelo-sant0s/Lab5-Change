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


const C0Graph = (props) => {

  const [chartBJ, setChartBJ] = useState([]);
  const [chartBE, setChartBE] = useState([]);
  const [chartTK, setChartTK] = useState([]);
  const [chartNY, setChartNY] = useState([]);
  const [arraydata, setArrayData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

          try{
            const resp = await fetch(
                `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=CH&begin=2021-12-01&end=2021-12-31`
                  )
              const chartBJ = await resp.json();
              setChartBJ(chartBJ);
        }catch(error){
            console.log(error);
        }
          try{
            const resp = await fetch(
                `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=BE&begin=2021-12-01&end=2021-12-31`
                  )
              const chartBE = await resp.json();
              setChartBE(chartBE);
        }catch(error){
            console.log(error);
        }
          try{
            const resp = await fetch(
                `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=US&begin=2021-11-01&end=2021-12-31`
                  )
              const chartNY = await resp.json();
              setChartNY(chartNY);
          }catch(error){
            console.log(error);
          }
        try{
          const resp = await fetch(
               `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=JP&begin=2021-11-01&end=2021-12-31`
                 )
             const chartTK = await resp.json();
             setChartTK(chartTK);
         }catch(error){
           console.log(error);
        }
    };
    fetchData()
  }, [])
  useEffect(() => {
    let array = [];
    if(props.cities[0][0]){
      array.push({
        label: `Carbone Monoxide Average Beijing [mol/m²] per day`,
        data: chartBJ?.map(x => x.average),
        backgroundColor: [
          'rgba(173, 216, 230, 0.2)',
        ],
        borderColor: [
          'rgba(173, 216, 230, 1)',
        ],
        borderWidth: 1
      })
    }
    if(props.cities[1][0]){
      array.push({
        label: `Carbone Monoxide Average Berlin [mol/m²] per day`,
        data: chartBE?.map(x => x.average),
        backgroundColor: [
          'rgba(255, 140, 0, 0.2)',
        ],
        borderColor: [
          'rgba(255, 140, 0, 1)',
        ],
        borderWidth: 1
      })
    }if(props.cities[2][0]){
      array.push({
        label: `Carbone Monoxide Average New York [mol/m²] per day`,
        data: chartNY?.map(x => x.average),
        backgroundColor: [
          'rgba(255,255,0, 0.2)',
        ],
        borderColor: [
          'rgba(255,255,0, 1)',
        ],
        borderWidth: 1
      })
    }if(props.cities[3][0]){
      array.push({
      label: `Carbone Monoxide Average Tokyo [mol/m²] per day`,
      data: chartTK?.map(x => x.average),
      backgroundColor: [
        'rgba(211, 211, 211, 0.2)',
      ],
      borderColor: [
        'rgba(211, 211, 211, 1)',
      ],
      borderWidth: 1
    })
    }
    setArrayData(array);
  }, [props.cities])
  

  let data = {
    labels: chartBJ?.map(x => x.start.substring(8,10)),
    datasets: arraydata
  };

  return (
      <Bar
        data={data}
       />
  )
}

export default C0Graph;