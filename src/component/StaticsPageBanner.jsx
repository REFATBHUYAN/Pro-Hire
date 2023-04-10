import React from "react";

const StaticsPageBanner = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-12 items-center">
      <div className="w-full pl-4">
        {/* className="md:flex mx-5 mt-8 w-full" */}
        <h1 className="font-bold text-4xl md:text-7xl">
          Making Your <br /> <span className="text-purple-400">Dream Job</span>{" "}
          <br />a Reality
        </h1>
        <p className="w-full my-5">
          Welcome to our job site, your gateway to exciting career
          opportunities. Discover a wide range of job listings from top
          employers in your industry and take the next step in your professional
          journey.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="w-full mt-4">
        <img
          className="border-2 border-purple-700 rounded-full w-3/4 mx-auto"
          src="refat.png"
          alt="banner photo"
        />
      </div>
    </div>
  );
};

export default StaticsPageBanner;
