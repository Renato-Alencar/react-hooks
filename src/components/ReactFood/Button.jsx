const Button = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      className={`${className} rounded-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
