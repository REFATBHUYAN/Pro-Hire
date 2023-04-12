import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

export const JobContext = createContext({});

// const [data, setData] = useState(null);

const Home = () => {
  const jobDatas = useLoaderData();

  return (
    <div className=" max-w-full mx-auto w-full">
      <JobContext.Provider value={jobDatas}>
        <div className="bg-gray-100">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
        <ScrollRestoration />
      </JobContext.Provider>
    </div>
  );
};

export default Home;
