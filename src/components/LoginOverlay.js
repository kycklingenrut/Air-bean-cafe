import "../scss/components.css";
import logo from "../assets/logo.svg";
// import { UserContext } from "../context/UserContext";
// import { LoginContext } from "../context/LoginContext";
import OrderHistory from "./OrderHistory";
import { useState } from "react";

//Problem med att hållas inloggad, hur lösa?
function LoginOverlay() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [loggedIn, setLogin] = useState(false);
  const [gdpr, setGdpr] = useState(false);
  console.log(gdpr);
  // const { user, setUser } = useContext(UserContext);
  // const { loggedIn, setLogin } = useContext(LoginContext);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  //Test för inloggningen
  // useEffect(() => {
  //   async function getUser() {
  //     const response = await fetch(`http://localhost:8000/api/login`);
  //     const data = await response.json();
  //     setUser(data);
  //   }
  //   getUser();
  // }, []);
  // console.log(user);
  // console.log(username, password);

  function handleClick() {
    console.log(`Username: ${username}
    Password: ${password}`);
    fetch(`http://localhost:8000/api/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success === false) {
          console.log(result);
          alert("Fel användarnamn eller lösenord, försök igen!");
        } else {
          console.log(result);
          setUser(result);
          setLogin(true);
        }
        // res.json().then((data) => {
        //   setUser(data);
        //   setLogin(true);
        // fetchUserHistory();
        // });
      });
  }

  return (
    <section
      className={loggedIn && gdpr ? "loginOverlay dark" : "loginOverlay"}
    >
      {loggedIn && gdpr ? (
        <div>
          <OrderHistory data={user}></OrderHistory>
          <button
            className="logOutBtn"
            type="button"
            onClick={() => {
              setLogin(false);
            }}
          >
            Logga Ut
          </button>
        </div>
      ) : (
        <div>
          <img src={logo} alt="logo"></img>
          <h1 className="loginHeader">Välkommen till AirBean-familjen!</h1>
          <p className="loginBread">
            Genom att skapa ett konto nedan kan du spara och se din
            orderhistorik.
          </p>

          <label htmlFor="username">Användarnamn</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsername}
          ></input>
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
          ></input>
          <div className="gdpr">
            <input
              type="radio"
              id="gdpr"
              name="gdpr"
              value="true"
              onClick={() => {
                setGdpr(true);
              }}
            />
            <label htmlFor="gdpr">GDPR Ok!</label>
          </div>
          <br></br>
          <button type="submit" className="loginBtn" onClick={handleClick}>
            Logga in
          </button>
        </div>
      )}
    </section>
  );
}
export default LoginOverlay;
