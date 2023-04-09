import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { JobContext } from "./Home";

const JobDetails = () => {
  const id = useLoaderData();
  const allData = useContext(JobContext);
  let singleJob = allData.find((dt) => dt.id == id);
  console.log(singleJob);
  return (
    <div>
      <h1>this is job details page for {id}</h1>
    </div>
  );
};

export default JobDetails;
