const Son = ({ data, setData }) => {
  const handleClicked = (id) => {
    const newData = data.map((item, index) => {
      return index === id ? { ...item, clicked: item.clicked + 1 } : item;
    });
    setData(newData);
  };

  return (
    <ul>
      {data.map(({ color }, index) => {
        return (
          <li key={index} onClick={() => handleClicked(index)}>
            {color}
          </li>
        );
      })}
    </ul>
  );
};

export default Son;
