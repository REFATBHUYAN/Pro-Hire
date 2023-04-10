import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "./Home";
import SingleAppliedJob from "./SingleAppliedJob";

const AppliedJob = () => {
  const getJobsData = useContext(JobContext);
  const [jobAdd, setJobAdd] = useState([]);
  // console.log(getJobsData);
  useEffect(() => {
    let applyJob = [];
    let storedJobs = localStorage.getItem("job-item");
    if (storedJobs) {
      let jobIds = JSON.parse(storedJobs);
      // console.log(jobIds);
      for (let id of jobIds) {
        let exixst = getJobsData.find((jd) => jd.id === id);
        applyJob.push(exixst);
      }
    }
    // console.log(applyJob);
    setJobAdd(applyJob);
  }, []);
  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-32">Applied Jobs</h1>
      <div>
        <div class="mb-3 xl:w-96">
          <select data-te-select-init>
            <option value="1">One</option>
            <option value="2" disabled>
              Two
            </option>
          </select>
        </div>
      </div>
      <div className="w-3/4 mx-auto mb-32">
        {jobAdd.map((job) => (
          <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
