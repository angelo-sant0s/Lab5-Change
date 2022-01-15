import React, {useState, useEffect} from 'react';
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const Donut = () => {

    const dados = [
        {symbol: "Methane", amount: "CH4", color: "Azure", percentage: 10},
        {symbol: "Carbon Dioxide", amount: "CO2", color: "CadetBlue", percentage: 80},
        {symbol: "Nitrous oxide", amount: "N2O", color: "AliceBlue",  percentage: 7},
        {symbol: "Fluorinated gases", amount: "N2O", color: "Beige", percentage: 3}
    ];
    const [active, setActive] = useState(null);


    return (
        <>
            <svg width={400} height={400}>
                <Group top={200} left={200}>
                    <Pie data={dados} pieValue={ (data) => data.percentage } 
                     outerRadius={200}
                     innerRadius={({ data }) => {
                     const size = active && active.symbol === data.symbol ? 12 : 8;
                     return 200 - size;
                    }}
                    padAngle={0.01}>
                        {(pie) => {
                            return pie.arcs.map((arc) => {
                                return (
                                        <g
                                            key={arc.data.symbol}
                                            onMouseEnter={() => setActive(arc.data)}
                                            onMouseLeave={() => setActive(null)}
                                        >
                                        <path d={pie.path(arc)} fill={arc.data.color}></path>
                                        </g>
                                 );
                             });
                        }}
                    </Pie>
                    
          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                {`${active.percentage}%`}
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                Click the Arcs
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                to see the data.
              </Text>
            </>
          )}
                </Group>
            </svg>
        </>
    )
}

export default Donut;
