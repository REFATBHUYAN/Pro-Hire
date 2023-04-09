import React from "react";
import Banner from "./Banner";
import JobCatagory from "./JobCatagory";
import FeaturedJobs from "./FeaturedJobs";

const FirstPage = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCatagory></JobCatagory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default FirstPage;
