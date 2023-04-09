import React from "react";
import Banner from "./Banner";
import JobCatagory from "./JobCatagory";
import FeaturedJobs from "./FeaturedJobs";
import Footer from "./Footer";

const FirstPage = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCatagory></JobCatagory>
      <FeaturedJobs></FeaturedJobs>
      <Footer></Footer>
    </div>
  );
};

export default FirstPage;
