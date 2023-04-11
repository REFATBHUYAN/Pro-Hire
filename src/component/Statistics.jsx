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
        <div className="mb-16">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-12 items-center">
            <div className="w-full pl-4">
              {/* className="md:flex mx-5 mt-8 w-full" */}
              <h1 className="font-bold text-3xl md:text-5xl">
                Exploring the World of
                <br /> <span className="text-purple-400">Statistics</span>{" "}
                <br />: Assignment Marks
              </h1>
              <p className="w-full my-5">
                View your assignment results with ease. Our user-friendly
                platform allows you to access your grades and feedback in
                real-time, so you can track your progress and stay on top of
                your academic goals. Get detailed insights and personalized
                recommendations to help you improve and excel in your future
                assignments.
              </p>
            </div>
            <div className="w-full mt-4">
              <img
                className="border-2 border-purple-700 rounded-full w-3/4 mx-auto"
                src="https://i.ibb.co/5YW7Wf8/download.jpg"
                alt="banner photo"
              />
            </div>
          </div>
        </div>
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
        <p className="text-center mt-5">
          Fig: All Assignment Marks of the Course
        </p>
      </div>
    );
  }
}
