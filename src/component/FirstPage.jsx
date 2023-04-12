import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import JobCatagory from "./JobCatagory";
import FeaturedJobs from "./FeaturedJobs";
import Navbar from "./Navbar";

const FirstPage = () => {
  const [jobCatagory, setJobCatagory] = useState([]);
  useEffect(() => {
    fetch("/featuresJob.json")
      .then((res) => res.json())
      .then((data) => setJobCatagory(data));
  }, []);
  return (
    <div>
      <div className="bg-gray-100">
        <Banner></Banner>
      </div>
      <JobCatagory catagory={jobCatagory}></JobCatagory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default FirstPage;
