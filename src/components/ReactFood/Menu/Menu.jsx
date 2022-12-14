import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

import MenuFilter from "./MenuFilter";
import MenuItem from "./MenuItem";
import Header from "../Header";
import SubHeader from "../SubHeader";

const Menu = () => {
  const { data, handleClicked, orders, totalPrice } = useContext(DataContext);
  const navigate = useNavigate();

  const categorias = [...new Set(data.map((_) => _.categoria))];

  return (
    <div className="bg-light bg-gradient">
      <Header text="cardápio">
        <SubHeader
          qtde={orders}
          total={totalPrice}
          onClick={() => navigate("/order")}
        />
      </Header>
      <div className="d-md-flex flex-md-wrap justify-content-around align-items-md-stretch">
        {categorias.map((categoria, index) => {
          return (
            <div key={index} className="p-3 w-auto">
              <h3 className="fs-4 text-danger">{categoria}</h3>
              {data.map((item, index) => {
                return (
                  <MenuFilter key={index} by={item.categoria === categoria}>
                    <MenuItem
                      className="justify-content-between"
                      item={item}
                      onClick={() => handleClicked(index)}
                    />
                  </MenuFilter>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
