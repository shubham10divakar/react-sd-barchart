import React, { useEffect, useState } from 'react';
import { CSVParser } from 'react-csv-parser';
import { PlotBarChart } from './PlotBarChart';

const sampleData = [
  { label: 'A', value: 30 },
  { label: 'B', value: 80 },
  { label: 'C', value: 45 },
  { label: 'D', value: 60 },
  { label: 'E', value: 20 },
  { label: 'F', value: 90 },
  { label: 'G', value: 55 },
];

export const BarChart = () => {
   const [csvData, setCsvData] = useState(sampleData);

  const filehandler = (data) => {
    console.log('Parsed CSV data', data);
    setCsvData(data);
    console.log('Parsed Set CSV data', csvData);
  };

  useEffect(()=>{
    console.log('Updated CSV data', csvData)
  },[csvData]);

   return (
    <div>
      <CSVParser onFileParsed={filehandler}/>
      <PlotBarChart data={csvData} width={800} height={500} />
    </div>
   );

};
