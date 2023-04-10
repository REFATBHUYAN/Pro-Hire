import React from "react";
import { Link } from "react-router-dom";

const SingleAppliedJob = ({ job }) => {
  const {
    id,
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    salary,
    fulltime_or_parttime,
    location,
  } = job;
  return (
    <>
      <div className="md:flex gap-4 w-full border-2 border-purple-400 p-8 mb-4 rounded-md">
        <img className="md:w-56" src={company_logo} alt="" />
        <div className="md:flex justify-between items-center p-4 w-full">
          <div>
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
          </div>
          <Link to={`/job/${id}`}>
            <button className="py-3 px-5 btn-color text-white rounded-lg font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleAppliedJob;
