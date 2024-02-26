import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1 className="text-center text-4xl font-bold font-mono my-5">
        Counter App
      </h1>
      <div className="flex flex-col justify-center items-center border my-5 mx-auto">
        <h3 className="border border-gray-500 text-5xl p-10 my-10 rounded-full text-green-400">{count}</h3>
        <div>
          <button
            onClick={handlePlus}
            className="border border-red-600 mx-2 my-10 py-2 px-5"
          >
            Increase
          </button>
          <button
            onClick={handleMinus}
            className="border border-red-600 mx-2 my-10 py-2 px-5"
          >
            Decrease
          </button>
          <button
            onClick={handleReset}
            className="border border-red-600 mx-2 my-10 py-2 px-5"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default UseState;
