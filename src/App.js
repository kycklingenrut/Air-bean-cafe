import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./scss/main.css";
import "./scss/theme.css";

import { LoginContext } from "./context/LoginContext";

import Navbar from "./views/Nav";
import Start from "./views/Start";
import Profile from "./views/Profile";
import Menu from "./views/Menu";
import About from "./views/About";
import Cart from "./components/Cart";
import Status from "./views/Status";

function App() {
  const [loggedIn, setLogin] = useState(false);

  return (
    <div className="App">
      <Navbar></Navbar>

      <section className="routes">
        <LoginContext.Provider value={{ loggedIn, setLogin }}>
          <Switch>
            <Route path="/" component={Start} exact></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/status" component={Status}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </LoginContext.Provider>
      </section>
    </div>
  );
}

export default App;
