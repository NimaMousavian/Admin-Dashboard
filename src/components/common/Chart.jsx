import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Chart = ({ title, data, dataKey, xAxisDataKey, grid }) => {
  return (
    <div className="shadow-lg shadow-primary-light mt-7 rounded-lg p-2">
      <h3 className="text-xl font-bold ml-8 my-6">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <Line type="monotone" dataKey={dataKey} stroke="#7b3efb" />
          <XAxis dataKey={xAxisDataKey} stroke="#222" />
          <YAxis />
          {grid && <CartesianGrid stroke="#eee" />}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
