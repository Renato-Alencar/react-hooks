import { useState, useEffect } from "react";

const Media = ({ result }) => {
  const [state, setState] = useState(() => "Undefined");

  useEffect(() => {
    if (result >= 6) setState("Aprovado");
    else if (result >= 0 && result < 6) setState("Reprovado");

    return () => setState(state);
  }, [result]);

  return (
    <>
      <p>
        <strong>Média</strong>:{result === "NaN" ? "" : result}
      </p>
      <strong>{state}</strong>
    </>
  );
};

export default Media;
