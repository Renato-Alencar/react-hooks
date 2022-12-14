import Button from "./Button";
import TotalPrice from "./TotalPrice";

const SubHeader = ({ qtde, onClick, total }) => {
  return (
    <div className="d-flex justify-content-evenly align-items-center align-self-stretch">
      <Button className="btn btn-outline-primary text-light fw-semibold position-relative">
        Pedidos
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {qtde}
        </span>
      </Button>
      <Button
        className="btn btn-outline-primary text-light text-uppercase fw-semibold"
        onClick={onClick}
      >
        ver pedido
      </Button>
      <TotalPrice>US$ {total}</TotalPrice>
    </div>
  );
};

export default SubHeader;
