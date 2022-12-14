const Header = ({ text, children }) => {
  return (
    <div className="text-bg-primary p-3">
      <h3 className="text-capitalize fs-3">{text}</h3>
      {children}
    </div>
  );
};

export default Header;
