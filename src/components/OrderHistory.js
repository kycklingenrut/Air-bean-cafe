/* if LoggedIn => PROFILEVIEW
    *IMG*
    {username}
    {email}

    *H2*
    {order.details}
*/
import profileImg from "../assets/ProfileImg.svg";
import "../scss/components.css";
// import { UserContext } from "../context/UserContext";
// import { LoginContext } from "../context/LoginContext";
import { useEffect, useState } from "react";

function OrderHistory(props) {
  const [orders, setOrders] = useState([]);
  // const { user } = useContext(UserContext);
  // const { setLogin } = useContext(LoginContext);

  let userId = props.data.id;
  useEffect(() => {
    async function getUser() {
      const response = await fetch(`http://localhost:8000/api/order/` + userId);
      const data = await response.json();
      if (data.success === true) {
        setOrders(data.order);
        console.log(data.success);
      } else {
        setOrders(null);
      }
    }
    getUser();
  }, [userId]);
  console.log(orders);
  // console.log(props.data.username);
  return (
    <section className="orderHistory">
      <img src={profileImg} alt="Profile pic" className="profileImg"></img>
      <h1 className="orderUsername">{props.data.username}</h1>
      <p className="orderEmail">{props.data.email}</p>

      <section className="orderDetails">
        <h1>Orderhistorik</h1>
        <section className="orderList">
          {/* {orders.order.map((item, index) => {
            return ( */}
          <div>
            <p className="orderID"></p>
            <p className="orderDate">20/03/26</p>
            <p className="orderTotal">Total ordersumma</p>
            <p className="orderSum">333 kr</p>
          </div>

          {/* })} */}
        </section>
      </section>
    </section>
  );
}
export default OrderHistory;
