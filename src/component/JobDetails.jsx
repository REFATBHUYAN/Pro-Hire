import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { JobContext } from "./Home";

const JobDetails = () => {
  const daynamicId = useLoaderData();
  const allData = useContext(JobContext);
  let singleJob = allData.find((dt) => dt.id == daynamicId);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    address,
  } = singleJob;
  console.log(singleJob);
  return (
    <div className="mt-24">
      <h1 className="text-center font-bold text-4xl">
        Jobs Details{job_title}
      </h1>
      <div>
        <div>
          <h1>job description</h1>
        </div>
        <div>
          <h1>side card</h1>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
