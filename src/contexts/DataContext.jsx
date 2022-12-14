import { createContext, useState, useEffect } from "react";
import { cardapio } from "../components/ReactFood/cardapio.json";

export const DataContext = createContext();

export const Provider = ({ children }) => {
  const newCardapio = cardapio.map((item) => ({ ...item, clicked: 0 }));
  const [data, setData] = useState(() => newCardapio);

  const orders = data.reduce((acc, { clicked }) => acc + clicked, 0);
  const totalPrice = data
    .reduce((acc, { clicked, preco }) => acc + clicked * preco, 0)
    .toFixed(2);

  useEffect(() => {
    orders;
    totalPrice;
  }, [data]);

  const handleClearData = () => setData(newCardapio);

  const handleClicked = (id) => {
    const newData = data.map((item, index) => {
      return index === id ? { ...item, clicked: item.clicked + 1 } : item;
    });
    setData(newData);
  };

  return (
    <DataContext.Provider
      value={{ data, handleClearData, handleClicked, orders, totalPrice }}
    >
      {children}
    </DataContext.Provider>
  );
};
