import React, { useEffect, useState } from "react";

const AppliedJob = () => {
  const [jobAdd, setJobAdd] = useState([]);
  useEffect(() => {
    let applyJob = [];
    let storedJobs = localStorage.getItem("job-item");
    if (storedJobs) {
      let jobIds = JSON.parse(storedJobs);
      // jobIds.map(ji => )
    }
  }, []);
  return (
    <div>
      <h1>applied job item</h1>
    </div>
  );
};

export default AppliedJob;
