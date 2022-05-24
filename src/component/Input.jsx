import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("init value");

  const handleClick = () => {};
  return (
    <>
      <p>{value}</p>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
      />
      <button onClick={handleClick}>Click here</button>
    </>
  );
};

export default Input;
