'use client';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ accounts }: DonutChartProps) => {
   const data = {
      labels: ['Bank 1', 'Bank 2', 'Bank 3'],
      datasets: [
         {
            label: 'Banks',
            data: [1250, 4000, 3178,],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
         }
      ]
   }
   return (
      <Doughnut 
         data={data}
         options={{
            cutout: '55%',
            radius: '100%',
            plugins: {
               legend: {
                  display: false
               }
            }
         }}

      />
  )
}

export default DonutChart