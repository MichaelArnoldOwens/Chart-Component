import { ChartData } from '../types/ChartTypes';
import React from 'react';

interface ChartProps {
  data: Array<ChartData>;
  width?: number;
  height?: number;
  color?: string;
}

function Chart(props: ChartProps) {
  return (
    <div>
      Chart Goes here
    </div>
  )
}

export default Chart;