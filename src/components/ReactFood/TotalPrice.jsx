import MenuFilter from "./Menu/MenuFilter";

const TotalPrice = ({ children, className, label }) => {
  return (
    <div
      className={`fw-semibold p-3  ${
        children !== "Pedido Vazio"
          ? "d-flex justify-content-between align-items-center"
          : className
      }`}
    >
      <MenuFilter by={children !== "Pedido Vazio"}>
        <div className="text-capitalize">{label}</div>
      </MenuFilter>
      <div>{children}</div>
    </div>
  );
};

export default TotalPrice;
