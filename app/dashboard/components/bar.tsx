'use client'
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: 'Mens',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: 'Womens',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: 'Kids',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
 


];

// #endregion
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const SimpleRadialBarChart = () => {
  return (
    <RadialBarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }}
      responsive
      cx="30%"
      barSize={14}
      data={data}
    >
      <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="uv" />
      <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
    </RadialBarChart>
  );
};

export default SimpleRadialBarChart;