/* 
            *H1*
{coffee.item}   amount


*H3*            {total.amount}
*P*            
            *btn*
*/
/* if cart.items => STATUS */

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// FEL NÄR JAG VILL ANVÄNVDA CONTEXT FÖR ATT HÄMTA USERID, HUR LÖSA?
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

function Cart({ setShowCart, props }) {
  const cart = useSelector((state) => {
    return state.cart;
  });

  // console.log(props.id);

  const history = useHistory();

  function paymentBtn() {
    const IDs = cart.map((item) => {
      return item.id;
    });
    console.log(IDs);

    setShowCart(false);
    let path = "/status";
    history.push(path);
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
              <p className="orderCounter">1</p>
            </section>
          );
        })}
      </div>
      <section className="totalAmount">
        <h1 className="totalTitle">Total</h1>
        <h1 className="orderTotal">198 kr</h1>
        <p className="orderInclude">inkl. moms + drönarleverans</p>
      </section>
      <button className="payNow" onClick={paymentBtn}>
        Take my money!
      </button>
    </section>
  );
}

export default Cart;
