import "../scss/components.css";
import droneImg from "../assets/Drone.svg";

import { useHistory } from "react-router-dom";
import moment from "moment";

function Status(props) {
  const history = useHistory();
  function goHome() {
    let path = "/";
    history.push(path);
  }
  console.log(props);
  const now = moment().format("YYYY-MM-DD HH:mm:ss");
  console.log(now);

  const then = props.location.state.ETA;
  console.log(then);

  const diffTime = moment
    .utc(moment(then).diff(moment(now)))
    .format("HH:mm:ss");
  console.log(diffTime);
  const sliced = diffTime.slice(3, 5);
  console.log(sliced);

  function slicedOrNot() {
    if (sliced > 10) {
      return "Hoppas du får njuta av kaffet!";
    } else {
      return `ETA: ca ${sliced} min`;
    }
  }

  return (
    <section className="statusContainer">
      <p className="statusOrderID">
        Ordernummer #{props.location.state.orderNumber}
      </p>
      <img src={droneImg} alt="droneImg" className="droneImg"></img>
      <h1 className="statusHeading">Din beställning är på väg!</h1>
      <p className="statusETA">{slicedOrNot()}</p>
      <button type="button" className="statusBtn" onClick={goHome}>
        Ok, cool!
      </button>
    </section>
  );
}

export default Status;
