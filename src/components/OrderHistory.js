import profileImg from "../assets/ProfileImg.svg";
import "../scss/components.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  const user = useSelector((state) => {
    return state.user.user;
  });

  let userId = user.id;
  useEffect(() => {
    async function getUser() {
      const response = await fetch(`http://localhost:8000/api/order/` + userId);
      const data = await response.json();
      if (data.success === true) {
        setOrders(data.order);
        console.log(data.success);
      } else {
        setOrders([]);
      }
    }
    getUser();
  }, [userId]);

  return (
    <section className="orderHistory">
      <div className="userInfo">
        <img src={profileImg} alt="Profile pic" className="profileImg"></img>
        <h1 className="orderUsername">{user.username}</h1>
        <p className="orderEmail">{user.email}</p>
      </div>

      <section className="orderDetails">
        <section className="orderList">
          <h1>Orderhistorik</h1>
          {orders.map((item, index) => {
            return (
              <div key={index} className="singleOrder">
                <p className="orderID">#{item.orderNumber}</p>
                <p className="orderDate">{item.ETA.slice(0, 10)}</p>
                <p className="orderTotal">Total ordersumma</p>
                <p className="orderSum">{item.price} kr</p>
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
}
export default OrderHistory;
