import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import { LoginContext } from "../context/LoginContext";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

function Start() {
  const history = useHistory();
  const { loggedIn } = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  async function signUp() {
    if (username !== "" && password !== "" && email !== "") {
      const accountData = {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `http://localhost:8000/api/account`,
        accountData
      );
      const data = await response.json();
      console.log(data);
      if (!data.success) {
        alert("Användarnamnet är upptaget, prova ett annat!");
      } else {
        alert("Konto skapat, var vänlig logga in");
        history.push({
          pathname: "/profile",
        });
      }
    } else {
      alert("Du måste fylla i alla fält!");
    }
  }

  return (
    <section className="signUpOverlay">
      {loggedIn ? (
        <div className="startPage">
          <img src={logo2} alt="AirBean logo"></img>
          <h1>AirBean Coffee</h1>
        </div>
      ) : (
        <div className="signUpContainer">
          <img src={logo} alt="logo"></img>
          <h1 className="signUpHeader">Välkommen till AirBean-familjen!</h1>
          <p className="signUpBread">
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
            required
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          ></input>
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          ></input>
          <div className="gdpr">
            <input type="radio" id="gdpr" name="gdpr" value="true" />
            <label htmlFor="gdpr">GDPR Ok!</label>
          </div>
          <br></br>
          <button type="submit" className="signUpBtn" onClick={signUp}>
            Registrera
          </button>
        </div>
      )}
    </section>
  );
}

export default Start;
