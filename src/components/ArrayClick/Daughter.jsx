const Daughter = ({ data }) => {
  return (
    <>
      {data.map(({ color, clicked }, index) => {
        return (
          <>
            {clicked > 0 && (
              <ul key={index}>
                <li>{color}</li>
                <li>{clicked}</li>
              </ul>
            )}
          </>
        );
      })}
    </>
  );
};

export default Daughter;
