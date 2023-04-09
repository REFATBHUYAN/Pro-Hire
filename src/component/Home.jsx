import React, { createContext } from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";

export const JobContext = createContext({});

// const [data, setData] = useState(null);

const Home = () => {
  const jobDatas = useLoaderData();

  return (
    <div className="m-5">
      <JobContext.Provider value={jobDatas}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </JobContext.Provider>
    </div>
  );
};

export default Home;