import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1 className="text-center my-5 text-4xl text-red-500">Use Ref Hooks</h1>
      <div className="w-1/2 mx-auto flex flex-col gap-10 justify-center">
        <input type="text" ref={inputRef} className="outline-dashed"/>
        <button onClick={handleFocus} className="border-2 p-4 inline">Focus</button>
      </div>
    </div>
  );
};

export default UseRef;
