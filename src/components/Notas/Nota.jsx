const Nota = ({ children, value, onChange }) => {
  return (
    <>
      <div>
        <legend>
          <strong>Informe a {children}:</strong>
        </legend>
        <input type="text" value={value} onChange={onChange} />
      </div>
      <br />
    </>
  );
};

export default Nota;
