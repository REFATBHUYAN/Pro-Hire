import React, { useContext, useState } from "react";
import { JobContext } from "./Home";
import SingleJob from "./SingleJob";

const FeaturedJobs = () => {
  const allData = useContext(JobContext);
  const [data, setData] = useState(allData.slice(0, 4));
  const [toggle, setToggle] = useState(true);
  console.log(data);
  const showAllJobs = () => {
    setData(allData);
    setToggle(false);
  };

  return (
    <section className="mx-5 mb-32">
      <div className="text-center mb-8">
        <h1 className="font-bold text-5xl mb-4">Featured Jobs</h1>
        <p>
          Check out our featured jobs section for the latest and most exciting
          career opportunities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 mx-auto">
        {data.map((dt) => (
          <SingleJob key={data.id} data={dt}></SingleJob>
        ))}
      </div>
      {toggle && (
        <div className="mx-auto text-center">
          <button
            onClick={() => showAllJobs()}
            className="py-3 px-5 bg-purple-400 hover:bg-purple-600 text-white rounded-lg font-bold"
          >
            See All Jobs
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedJobs;
