import "../scss/components.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../actions/cartActions";
import { incrementCart } from "../actions/cartActions";

function MenuList() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => {
    return state.cart.menu;
  });

  useEffect(() => {
    async function fetchMenu() {
      const resp = await fetch(`http://localhost:8000/api/coffee`);
      const data = await resp.json();
      console.log("fetchMenu: ", data);
      dispatch(setMenu(data));
    }
    fetchMenu();
  }, [dispatch]);

  return (
    <section className="menuContainer">
      <Header></Header>

      <section className="menuList">
        <h1 className="menuTitle">Meny</h1>
        {menu.map((item, index) => {
          return (
            <section className="menuItems" key={index}>
              <button
                type="submit"
                className="addItem"
                onClick={() => dispatch(incrementCart(item))}
              >
                <p>+</p>
              </button>
              <h2 className="itemTitle">{item.title}</h2>
              <h2 className="itemPrice">{item.price} kr</h2>
              <p className="itemDescription">{item.desc}</p>
            </section>
          );
        })}
      </section>
      <Footer></Footer>
    </section>
  );
}
export default MenuList;
