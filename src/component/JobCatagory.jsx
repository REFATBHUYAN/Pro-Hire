import React from "react";

const JobCatagory = ({ catagory }) => {
  return (
    <section className="my-32 mx-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Job Category List</h1>
        <p className="my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {catagory.map((cata) => (
          <div
            key={cata.id}
            className="w-full md:w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg sm:my-4 mx-auto"
          >
            <img className="w-[70px]" src={cata.logo} alt="" />
            <h2 className="text-xl font-bold mt-8 mb-2">{cata.title}</h2>
            <p>{cata.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCatagory;
