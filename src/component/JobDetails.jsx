import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "./Home";
import toast, { Toaster } from "react-hot-toast";

const JobDetails = () => {
  const { jobId } = useParams();
  console.log(jobId);
  const allData = useContext(JobContext);
  let singleJob = allData.find((dt) => dt.id == jobId);
  console.log(singleJob);
  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    address,
  } = singleJob;

  const addtoCart = (id) => {
    let cartItem = [];
    let storedItem = localStorage.getItem("job-item");
    if (storedItem) {
      cartItem = JSON.parse(storedItem);
      let exist = cartItem.find((ct) => ct === id);
      if (exist) {
        // alert("already added");
        toast.error("Already Applied This Job");
      } else {
        cartItem.push(id);
      }
    } else {
      cartItem.push(id);
    }
    localStorage.setItem("job-item", JSON.stringify(cartItem));
  };

  return (
    <div className="w-full mx-auto">
      <div className="bg-gray-100 rounded -mt-16">
        <div className="md:flex justify-between">
          <img className="w-[250px] h-[250px]" src="/Icons/Vector.png" alt="" />
          <h1 className=" text-5xl text-center font-bold my-20 pt-12">
            Jobs Details
          </h1>
          <img
            className="w-[244px] h-[244px]"
            src="/Icons/Vector-1.png"
            alt=""
          />
        </div>
      </div>
      {/* <h1 className="text-center font-bold text-4xl my-24">Jobs Details</h1> */}
      <div className="md:flex gap-3 max-w-7xl mx-auto my-4 ">
        <div className="w-full md:w-3/4 p-4 ">
          <p className="my-4">
            <span className="font-semibold">Job Description: </span>
            {job_description}
          </p>
          <p className="my-4">
            <span className="font-semibold">Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p className="my-4">
            <span className="font-semibold">Educational Requirements: </span>{" "}
            <br /> {educational_requirements}
          </p>
          <p className="my-4">
            <span className="font-semibold">Experiences: </span> <br />{" "}
            {experiences}
          </p>
        </div>
        <div className="w-full md:w-1/4 bg-purple-200 p-8 rounded-md">
          <div className="w-full">
            <h1 className="font-bold mt-1">Job Details</h1>
            <hr className="border-purple-400 border mt-3 mb-4" />
            <div className="flex gap-2">
              <img src="Icons/Frame.png" alt="" />
              <p>
                <span className="font-semibold">Salary: </span> {salary}
              </p>
            </div>
            <div className="flex gap-2">
              <img src="Icons/Frame-1.png" alt="" />
              <p>
                <span className="font-semibold">Job Title: </span> {job_title}
              </p>
            </div>
            <h1 className="font-bold mt-5">Contact Informations</h1>
            <hr className="border-purple-400 border mt-3 mb-4" />
            <div className="flex gap-2">
              <img src="Icons/Frame-2.png" alt="" />
              <p>
                <span className="font-semibold">Phone: </span>{" "}
                {contact_information.phone}
              </p>
            </div>
            <div className="flex gap-2">
              <img src="Icons/Frame-3.png" alt="" />
              <p>
                <span className="font-semibold">Email: </span>{" "}
                {contact_information.email}
              </p>
            </div>
            <div className="flex gap-2">
              <img src="Icons/Frame-2.png" alt="" />
              <p>
                <span className="font-semibold">Address: </span> {address}
              </p>
            </div>
          </div>
          <button
            onClick={() => addtoCart(id)}
            className="btn btn-color w-full mt-8"
          >
            Apply Now
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default JobDetails;
