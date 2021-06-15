/*
        {order.ordernumber}
            *DRONEIMG*
               *H1*
            {order.ETA}
              *BTN*
*/
import droneImg from "../assets/Drone.svg";
import "../scss/components.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Status() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  console.log(cart);
  const history = useHistory();
  function goHome() {
    let path = "/";
    history.push(path);
  }
  return (
    <section className="statusContainer">
      <p className="statusOrderID">Ordernummer #8127398</p>
      <img src={droneImg} alt="droneImg" className="droneImg"></img>
      <h1 className="statusHeading">Din beställning är på väg!</h1>
      <p className="statusETA">ETA: 13 min</p>
      <button type="button" className="statusBtn" onClick={goHome}>
        Ok, cool!
      </button>
    </section>
  );
}

export default Status;
