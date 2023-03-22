import React from "react";
import "../styles/App.css";
import "../styles/Topbar.css";

const Topbar = ({ data, setData, setError, added, setAdded }) => {
  const getCarts = () => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((carts) => {
        setData(carts.carts);
        setError("");
        setAdded(false);
      })
      .catch((error) => {
        setError(error.message);
        setData([]);
      });
  };

  const addCart = () => {
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Math.floor(Math.random() * 99) + 1,
        products: [
          {
            id: Math.floor(Math.random() * 99) + 1,
            quantity: 1,
          },
          {
            id: Math.floor(Math.random() * 99) + 1,
            quantity: 2,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((addedCart) => {
        setData([...data, addedCart]);
        setAdded(true);
      });
  };

  return (
    <div className="wrapper">
      <div className="wrapper-btns">
        <button className="btn-outline" onClick={() => getCarts()}>
          Get carts
        </button>
        <button disabled={added} className="btn-add" onClick={() => addCart()}>
          Add cart
        </button>
      </div>
      <h1 className="main-headline">Carts</h1>
    </div>
  );
};

export default Topbar;
