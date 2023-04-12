import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "./Home";
import SingleAppliedJob from "./SingleAppliedJob";
import Navbar from "./Navbar";

const AppliedJob = () => {
  const getJobsData = useContext(JobContext);
  const [jobAdd, setJobAdd] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    let applyJob = [];
    let storedJobs = localStorage.getItem("job-item");
    if (storedJobs) {
      let jobIds = JSON.parse(storedJobs);

      for (let id of jobIds) {
        let exixst = getJobsData.find((jd) => jd.id === id);
        applyJob.push(exixst);
      }
    }
    setJobAdd(applyJob);
    setFilter(applyJob);
  }, []);

  const handleFilterBy = (e) => {
    console.log(e.target.value);
    let filterItem = e.target.value;
    let filterJob;
    if (filterItem === "All") {
      setFilter(jobAdd);
    } else if (filterItem === "Remote") {
      filterJob = jobAdd.filter((job) => job.remote_or_onsite === filterItem);
      setFilter(filterJob);
    } else if (filterItem === "Onsite") {
      filterJob = jobAdd.filter((job) => job.remote_or_onsite === filterItem);
      setFilter(filterJob);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 rounded -mt-16">
        <div className="md:flex justify-between">
          <img className="w-[250px] h-[250px]" src="/Icons/Vector.png" alt="" />
          <h1 className=" text-5xl text-center font-bold my-20 pt-12">
            Applied Jobs
          </h1>
          <img
            className="w-[244px] h-[244px]"
            src="/Icons/Vector-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-3/4 mx-auto my-28">
        <div className="text-end mb-5">
          <select
            className="border-purple-500 border rounded-md"
            onChange={handleFilterBy}
          >
            <option selected>Filter By</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
            <option value="All">All</option>
          </select>
        </div>
        {filter.map((job) => (
          <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
