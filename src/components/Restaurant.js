import React, { useState } from "react";
import OrderList from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="restaurant-ul">
        <OrderList orderType="Pizzas" />
        <OrderList orderType="Salads" />
        <OrderList orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
