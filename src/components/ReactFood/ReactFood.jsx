import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "../../contexts/DataContext";

import Menu from "./Menu/Menu";
import Order from "./Order";

const ReactFood = () => {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default ReactFood;
