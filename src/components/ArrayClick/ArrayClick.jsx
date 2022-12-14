import { useState } from "react";

import Son from "./Son";
import Daughter from "./Daughter";

const ArrayClick = () => {
  const [array, setArray] = useState(() => [
    { color: "blue", clicked: 0 },
    { color: "white", clicked: 0 },
    { color: "yellow", clicked: 0 },
    { color: "green", clicked: 0 },
    { color: "red", clicked: 0 },
  ]);

  return (
    <>
      <Son data={array} setData={setArray} />
      <Daughter data={array} />
    </>
  );
};

export default ArrayClick;
