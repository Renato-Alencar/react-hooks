import { useEffect, useState } from "react";

const MyWatch = ({ children }) => {
  const [clock, setClock] = useState(() => children);
  const [stateButton, setStateButton] = useState(() => false);

  useEffect(() => {
    let timer = 0;
    if (stateButton) {
      timer = setInterval(() => {
        const time = new Date().toLocaleTimeString();
        setClock(time);
      }, 1000);
    } else clearInterval(timer);
    return () => clearInterval(timer);
  }, [stateButton]);

  const handleStateButton = () => setStateButton((prevState) => !prevState);

  return (
    <div>
      <span>{clock}</span>&nbsp;
      <button onClick={handleStateButton}>
        {stateButton ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default MyWatch;
