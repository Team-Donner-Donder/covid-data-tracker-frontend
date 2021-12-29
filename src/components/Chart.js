import React, { PureComponent } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default class Chart extends PureComponent {
  render() {
    return (
      // <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={800}
        height={600}
        data={this.props.historicData}
        margin={{
          top: 1,
          right: 30,
          left: 100,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='4 4' />
        <XAxis stroke='#8884d8' width={100} dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar label='test' dataKey='deathCt' fill='#C0392B' />
        <Bar label='test' dataKey='positiveCt' fill='#2980B9' />
      </BarChart>
      // </ResponsiveContainer>
    );
  }
}
