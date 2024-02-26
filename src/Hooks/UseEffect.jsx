import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users");
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl">UseEffect Hook</h1>
      <h1 className="text-center text-4xl mt-10 mb-4">Random GitHub Users</h1>

      <div className="  w-3/4 justify-center flex flex-wrap gap-10 mx-auto ">
        {data.map((users) => (
          <div className="text-center">
            <img
              src={users.avatar_url}
              alt={users.login}
              height={200}
              width={200}
              className="rounded-md"
            />
            <h3 className="text-center my-2">{users.login.toUpperCase()}</h3>
            <a href={users.html_url} target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
