import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "./Home";
import SingleAppliedJob from "./SingleAppliedJob";

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
      <h1 className="text-center font-bold text-4xl mt-24">Applied Jobs</h1>
      <p className="text-center text-lg mb-24 mt-5">
        Here are the jobs you have already applied for. You can filter the jobs
        you have applied for using the filter section.
      </p>
      <div className="w-3/4 mx-auto mb-32">
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
