import React from "react";

const JobCatagory = () => {
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
        <div className="w-full md:w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg sm:my-4 mx-auto">
          <img className="w-[70px]" src="Icons/accounts 1.png" alt="" />
          {/* className="flex sm:flex-row-reverse md:w-full gap-3 mt-4 mx-auto" */}
          <h2 className="text-xl font-bold mt-8 mb-2">Account & Finance</h2>
          <p>300 Jobs Available</p>
        </div>
        <div className="w-full md:w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg sm:my-4 mx-auto">
          <img className="w-[70px]" src="Icons/business 1.png" alt="" />
          <h2 className="text-xl font-bold mt-8 mb-2">Creative Design</h2>
          <p>100+ Jobs Available</p>
        </div>
        <div className="w-full md:w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg sm:my-4 mx-auto">
          <img className="w-[70px]" src="Icons/social-media 1.png" alt="" />
          <h2 className="text-xl font-bold mt-8 mb-2">Marketing & Sales</h2>
          <p>150 Jobs Available</p>
        </div>
        <div className="w-full md:w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg sm:my-4 mx-auto">
          <img className="w-[70px]" src="Icons/chip 1.png" alt="" />
          <h2 className="text-xl font-bold mt-8 mb-2">Engineering Job</h2>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </section>
  );
};

export default JobCatagory;
