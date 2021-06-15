import { Route, Switch } from "react-router-dom";
// import { useState } from "react";
import "./scss/main.css";
import "./scss/theme.css";

// import { LoginContext } from "./context/LoginContext";
// import { UserContext } from "./context/UserContext";
// import { OrderContext } from "./context/OrderContext";

import Navbar from "./views/Nav";
import Start from "./views/Start";
import Profile from "./views/Profile";
import Menu from "./views/Menu";
import About from "./views/About";
import Cart from "./components/Cart";
import Status from "./views/Status";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState();
  // console.log(user);

  // const [loggedIn, setLogin] = useState(false);
  // const [singleOrder, setSingleOrder] = useState([]);
  // const [loggedIn, setLogin] = useState(false);

  // const handleUsername = (event) => {
  //   setUsername(event.target.value);
  //   console.log(event.target.value);
  // };
  // const handlePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  // function handleClick() {
  //   console.log("fetching");
  //   fetch(`http://localhost:8000/api/login`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       res.json().then((data) => {
  //         setUser(data);
  //         setLogin(true);
  //         console.log(user);
  //       });
  //     } else {
  //       console.log("Fel");
  //       setLogin(false);
  //       setUser("");
  //     }
  //   });
  // }

  return (
    <div className="App">
      <Navbar></Navbar>

      <section className="routes">
        {/* <LoginContext.Provider value={{ loggedIn, setLogin }}>
          <UserContext.Provider value={{ user, setUser }}> */}
        {/* <OrderContext.Provider value={{ order, setOrder }}> */}
        <Switch>
          <Route path="/" component={Start} exact></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/menu" component={Menu}></Route>
          {/* <Route path="/cart" component={Cart}></Route> */}
          <Route path="/status" component={Status}></Route>
          <Route path="/cart" render={() => <Cart></Cart>}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        {/* </OrderContext.Provider> */}
        {/* </UserContext.Provider>
        </LoginContext.Provider> */}
      </section>
    </div>
  );
}

export default App;
