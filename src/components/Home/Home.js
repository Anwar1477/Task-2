import React from "react";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";

const Home = () => {
  return (
    <div className="my-10">
      <div className="underline text-center uppercase text-2xl font-semibold ">
        <h1>Technical Task</h1>
      </div>
      <div className="grid grid-cols-2 border-2 w-2/3 mx-auto p-4 my-4 gap-2">
        <Step1 />

        <Step2 />
      </div>
    </div>
  );
};

export default Home;
