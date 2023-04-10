import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    name: "Assignment-1",
    marks: 60,
  },
  {
    name: "Assignment-2",
    marks: 59,
  },
  {
    name: "Assignment-3",
    marks: 60,
  },
  {
    name: "Assignment-4",
    marks: 60,
  },
  {
    name: "Assignment-5",
    marks: 60,
  },
  {
    name: "Assignment-6",
    marks: 60,
  },
  {
    name: "Assignment-7",
    marks: 60,
  },
  {
    name: "Assignment-8",
    marks: 60,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

  render() {
    return (
      <div className="my-20">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            //   width={500}
            //   height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
