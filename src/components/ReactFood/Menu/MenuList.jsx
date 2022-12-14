const MenuList = ({ array }) => {
  return (
    <>
      {array.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
};

export default MenuList;
