import React from "react";

const Banner = () => {
  return (
    <div className="md:flex mx-5 mt-10 w-full">
      <div className="md:w-1/2">
        <h1 className="font-bold text-4xl md:text-7xl">
          Making Your <br /> <span className="text-purple-400">Dream Job</span>{" "}
          <br />a Reality
        </h1>
        <p className="w-3/4 my-5">
          Welcome to our job site, your gateway to exciting career
          opportunities. Discover a wide range of job listings from top
          employers in your industry and take the next step in your professional
          journey.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="md:w-1/2 mt-4 w-full">
        <img
          className="border-2 border-purple-700 rounded-full w-3/4 mx-auto"
          src="refat.png"
          alt="banner photo"
        />
      </div>
    </div>
  );
};

export default Banner;
