import MenuFilter from "./MenuFilter";

const MenuItem = ({ item, onClick, showIf, className, productClass }) => {
  return (
    <ul
      className={`${className} btn btn-light d-flex align-items-center`}
      onClick={onClick}
    >
      <div className={productClass}>{item.descricao}</div>
      <MenuFilter by={showIf}>
        <div className="px-3">{item.clicked} x</div>
      </MenuFilter>
      <div>US$ {item.preco.toFixed(2)}</div>
    </ul>
  );
};

export default MenuItem;
