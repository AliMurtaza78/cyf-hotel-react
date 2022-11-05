import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const OrderList = prop => {
  const [orders, setOrders] = useState(0);
  const itemName = prop.orderType;
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {itemName} : {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default OrderList;
