import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Food Crops",
    percentage: 90
  },
  {
    name: "Feed Crops",
    percentage: 40
  },
  {
    name: "Livestock",
    percentage: 80
  },
  {
    name: "Oil Crops",
    percentage: 50
  },
  {
    name: "Ornamentals",
    percentage: 30
  },
  {
    name: "Industrial",
    percentage: 60
  },
  {
    name: "Fibre Crops",
    percentage: 50
  }
];

const Chart = () => {
  return (
    <div class ='mx-20'>
      <LineChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 60,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="percentage"
        stroke="#08711F"
        activeDot={{ r: 8 }}
      />
     
    </LineChart>
  
<div class='mx-96 px-28 mt-8'>


     <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-48 h-12 rounded">Get Started </button>
     </div>
    </div>
  );
}

export default Chart;






