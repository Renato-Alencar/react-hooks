import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../contexts/DataContext";
import MenuFilter from "./Menu/MenuFilter";
import MenuItem from "../ReactFood/Menu/MenuItem";
import Header from "./Header";
import Button from "./Button";
import TotalPrice from "./TotalPrice";

const Order = () => {
  const { data, handleClearData, totalPrice } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="bg-body bg-gradient">
      <Header text="pedido" />
      {data.map((item, index) => {
        return (
          <MenuFilter key={index} by={item.clicked > 0}>
            <MenuItem
              productClass="me-auto"
              className="p-3"
              item={item}
              showIf={() => by}
            />
          </MenuFilter>
        );
      })}
      <TotalPrice label="total" className="fs-4">
        {totalPrice > 0 ? `US$ ${totalPrice}` : "Pedido Vazio"}
      </TotalPrice>
      <div className="d-flex justify-content-around mt-3 p-3 bg-light">
        <Button
          className="btn btn-light shadow p-3 mb-3 rounded"
          onClick={handleClearData}
        >
          Limpar
        </Button>
        <Button
          className="btn btn-light shadow p-3 mb-3 rounded"
          onClick={() => navigate("/")}
        >
          Incluir mais itens
        </Button>
        <Button className="btn btn-danger shadow p-3 mb-3 rounded">
          Concluir
        </Button>
      </div>
    </div>
  );
};

export default Order;
