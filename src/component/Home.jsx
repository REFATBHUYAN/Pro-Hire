import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";

export const JobContext = createContext({});

// const [data, setData] = useState(null);

const Home = () => {
  const jobDatas = useLoaderData();
  // const [data, setData] = useState(jobDatas.slice(0, 4));
  // setData();
  // console.log(data);

  return (
    <div className=" max-w-7xl mx-auto w-full">
      <JobContext.Provider value={jobDatas}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </JobContext.Provider>
    </div>
  );
};

export default Home;
