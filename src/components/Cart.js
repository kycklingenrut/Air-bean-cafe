import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { decrementCart, resetCart } from "../actions/cartActions";

function Cart({ setShowCart }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
  const user = useSelector((state) => {
    return state.user.user;
  });

  const [singleOrder, setSingleOrder] = useState({});

  const price = cart.map((item) => {
    return item.price;
  });
  var sum = price.reduce(function (a, b) {
    return a + b;
  }, 0);

  const IDs = cart.map((item) => {
    return item.id;
  });
  const userID = user.id;

  async function paymentBtn() {
    if (userID !== undefined && IDs !== []) {
      fetch(`http://localhost:8000/api/order`, {
        method: "POST",
        body: JSON.stringify({
          userId: userID,
          id: IDs,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            console.log(result);
            setSingleOrder(result);
            console.log(singleOrder);
            setShowCart(false);

            history.push({
              pathname: "/status",
              state: singleOrder,
            });
            dispatch(resetCart());
          }
        });
    } else {
      alert("Du måste logga in först!");
    }
  }

  return (
    <section className="cartContainer">
      <h1 className="cartTitle">Din Beställning</h1>
      <div className="allItemsContainer">
        {cart.map((item, index) => {
          return (
            <section className="orderContainer" key={index}>
              <h1 className="orderTitle">{item.title}</h1>
              <p className="orderPrice">{item.price} kr</p>
              <button
                type="submit"
                className="deleteItem"
                onClick={() => dispatch(decrementCart(index))}
              >
                <p>x</p>
              </button>
            </section>
          );
        })}
      </div>
      <section className="totalAmount">
        <h1 className="totalTitle">Total</h1>
        <h1 className="orderTotal">{sum} kr</h1>
        <p className="orderInclude">inkl. moms + drönarleverans</p>
      </section>
      <button className="payNow" onClick={paymentBtn}>
        Take my money!
      </button>
    </section>
  );
}

export default Cart;
