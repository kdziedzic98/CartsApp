import React, { useState } from "react";
import "../styles/Cart.css";
import cartIcon from "../images/cart.png";
import trashIcon from "../images/trash.png";
import ChartComp from "./ChartComp";

const Cart = ({ data, setData, id, setAdded }) => {
  const [chart, setChart] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  const deleteCart = (el) => {
    if (el < 21) {
      fetch(`https://dummyjson.com/carts/${el}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deletedCart) => {
          setData(data.filter((cart) => cart.id !== deletedCart.id));
        });
    } else {
      setData(data.filter((cart) => cart.id !== el));
      setAdded(false);
    }
  };

  const filterData = (id) => {
    data.map((element) => (element.id === id ? setDataChart(element) : null));
    setChart(true);
  };

  return (
    <>
      <div className="cart-wrapper">
        <img
          src={cartIcon}
          alt="cart icon"
          className="cart-icon"
          onClick={() => filterData(id)}
        />
        <div className="cart-wrapper-btn">
          <img
            src={trashIcon}
            alt="trash icon"
            className="trash-icon"
            onClick={() => deleteCart(id)}
          ></img>
          <p className="cart-title">Cart {id}</p>
        </div>
      </div>
      {chart && <ChartComp data={dataChart} setChart={setChart} />}
    </>
  );
};

export default Cart;
