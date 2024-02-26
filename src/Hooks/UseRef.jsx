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
        <input type="text" ref={inputRef} className="outline-dashed" />
        <button onClick={handleFocus} className="border-2 p-4 inline">
          Focus
        </button>
      </div>
      <Container />
    </div>
  );
};

const Container = () => {
  const divRef = useRef(null);
  const handleColor = () => {
    divRef.current.style.backgroundColor = "red";
  };
  return (
    <div className="h-44 w-44 mx-auto my-24">
      <button onClick={handleColor} ref={divRef}  className="border py-10 px-20">
        Change Background Red
      </button>
    </div>
  );
};

export default UseRef;
