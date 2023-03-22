import React from "react";
import "../styles/CartList.css";
import Cart from "./Cart";

const CartList = ({ data, setData, error, setAdded }) => {
  return (
    <>
      {!error ? (
        <div className="carts-container">
          {data?.map((cart) => (
            <Cart
              key={cart.id}
              data={data}
              setData={setData}
              id={cart.id}
              setAdded={setAdded}
            />
          ))}
        </div>
      ) : (
        <div className="carts-error">{error}</div>
      )}
    </>
  );
};

export default CartList;
