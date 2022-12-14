import { useState } from "react";
import MyButton from "./MyButton";
import MyWatch from "./MyWatch";

const Exercises = () => {
  const [value, setValue] = useState(() => "");

  const time = new Date().toLocaleTimeString();

  const handleClick = (item) => {
    setValue((prevValue) => prevValue + item);
  };

  return (
    <main>
      <input type="text" value={value} onChange={(e) => e.target.value} />
      <div>
        <MyButton onClick={() => handleClick(3)}>{3}</MyButton>
        <MyWatch>{time}</MyWatch>
      </div>
    </main>
  );
};

export default Exercises;
