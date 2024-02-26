import React from "react";

const Home = () => {
  return (
    <div>
      <ul className="text-center my-2 flex justify-center gap-7">
        <li>
          <a href="./home" disable>
            Home
          </a>
        </li>
        <li>
          <a href="./useState">UseState</a>
        </li>
        <li>
          <a href="./UseEffects">UseEffects</a>
        </li>
        <li>
          <a href="./UseRef">UseRef</a>
        </li>
        <li>
          <a href="./UseReducer">UseReducer</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
