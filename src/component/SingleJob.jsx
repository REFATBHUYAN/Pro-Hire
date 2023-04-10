import React from "react";
import { Link } from "react-router-dom";

const SingleJob = ({ data }) => {
  const {
    id,
    company_name,
    company_logo,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = data;

  return (
    <div className="p-10 border rounded-lg w-full">
      <img className="w-40" src={company_logo} alt="" />
      <h1 className="font-bold text-2xl mb-2">{job_title}</h1>
      <h3>{company_name}</h3>
      <div className="flex gap-4 my-4">
        <p className="border-purple-400 border px-5 py-2 rounded-md">
          {remote_or_onsite}
        </p>
        <p className="border-purple-400 border px-5 py-2 rounded-md">
          {fulltime_or_parttime}
        </p>
      </div>
      <div className="flex mb-4 gap-4">
        <div className="flex">
          <img src="Icons/Frame-4.png" alt="" />
          <p>{location}</p>
        </div>
        <div className="flex">
          <img src="Icons/Frame.png" alt="" />
          <p>Salary: {salary}</p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="py-3 px-5 btn-color text-white rounded-lg font-bold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleJob;
