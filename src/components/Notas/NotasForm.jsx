import { useState } from "react";
import Nota from "./Nota";
import Media from "./Media";

const NotasForm = () => {
  const [notas, setNotas] = useState(() => ({
    nota1: "",
    nota2: "",
    nota3: "",
    nota4: "",
  }));

  const handleOnChange = (e, key) => {
    const data = e.target.value;
    const value = data > 10 || data < 0 ? "" : data;

    setNotas((prev) => ({ ...prev, [key]: value }));
  };

  const handleResult = () => {
    const total = Object.values(notas).reduce(
      (prev, curr) => parseFloat(prev) + parseFloat(curr),
    );
    return (total / Object.values(notas).length).toFixed(2);
  };

  return (
    <>
      {Object.keys(notas).map((name) => {
        return (
          <Nota
            key={name}
            value={notas[name]}
            onChange={(e) => handleOnChange(e, name)}
          >
            {name}
          </Nota>
        );
      })}
      <Media result={handleResult()} />
    </>
  );
};

export default NotasForm;
