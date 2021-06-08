import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

type Props = {
    filteredData?:any
  };

const Graph: React.FC<Props> = ({filteredData}) => {
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${(
                payload[0].value as number
              ).toFixed(0)}`}</p>
            </div>
          );
        }
    
        return null;
      };
  return (
    <section className="section">
      <BarChart
        width={1050}
        height={500}
        data={filteredData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" dx={15} dy={5} tick={{fontSize: 15,fontWeight:700 }} minTickGap={-10} axisLine={false} width={50}/>
        <YAxis tick={{fontSize: 15,fontWeight:700 }}/>
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" />
      </BarChart>
    </section>
  );
};

export default Graph;
