import React from "react";
import Banner from "./Banner";
import JobCatagory from "./JobCatagory";
import FeaturedJobs from "./FeaturedJobs";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";

const FirstPage = () => {
  const jobCatagory = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <JobCatagory catagory={jobCatagory}></JobCatagory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default FirstPage;
