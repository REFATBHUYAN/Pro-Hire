import React, { createContext } from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";

export const QuizContext = createContext({});

// const [data, setData] = useState(null);

const Home = () => {
  const quizeData = useLoaderData();
  const quizes = quizeData.data;
  return (
    <div className="m-5">
      <QuizContext.Provider value={quizes}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </QuizContext.Provider>
    </div>
  );
};

export default Home;