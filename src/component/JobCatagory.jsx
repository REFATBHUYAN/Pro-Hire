import React from "react";

const JobCatagory = () => {
  return (
    <section className="my-32">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Job Category List</h1>
        <p className="my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:flex w-full gap-3 mt-4">
        <div className="w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg">
          <img className="w-[70px]" src="Icons/accounts 1.png" alt="" />
          <h2 className="text-xl font-bold mt-8 mb-2">Account & Finance</h2>
          <p>300 Jobs Available</p>
        </div>
        <div className="w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg">
          <img className="w-[70px]" src="Icons/business 1.png" alt="" />
          <h2 className="text-xl font-bold mt-8 mb-2">Creative Design</h2>
          <p>100+ Jobs Available</p>
        </div>
        <div className="w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg">
          <img className="w-[70px]" src="Icons/social-media 1.png" alt="" />
          <h2 className="text-xl font-bold mt-8 mb-2">Marketing & Sales</h2>
          <p>150 Jobs Available</p>
        </div>
        <div className="w-[312px] h-[243px] bg-purple-100 p-10 rounded-lg">
          <img className="w-[70px]" src="Icons/chip 1.png" alt="" />
          <h2 className="text-xl font-bold mt-8 mb-2">Engineering Job</h2>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </section>
  );
};

export default JobCatagory;
