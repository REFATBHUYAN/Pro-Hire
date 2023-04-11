import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import JobCatagory from "./JobCatagory";
import FeaturedJobs from "./FeaturedJobs";

const FirstPage = () => {
  const [jobCatagory, setJobCatagory] = useState([]);
  useEffect(() => {
    fetch("/featuresJob.json")
      .then((res) => res.json())
      .then((data) => setJobCatagory(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <JobCatagory catagory={jobCatagory}></JobCatagory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default FirstPage;
