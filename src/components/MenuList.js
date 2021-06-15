import "../scss/components.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setCart } from "../actions/menuActions";

// ANVÄND STATE
function MenuList() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => {
    return state.menu;
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

  function addToCart(coffeeItem) {
    console.log(coffeeItem);
    dispatch(setCart(coffeeItem));
  }

  return (
    <section className="menuList">
      <h1 className="menuTitle">Meny</h1>
      {menu.map((item) => {
        return (
          <section className="menuItems" key={item.id}>
            <button
              type="submit"
              className="addItem"
              onClick={() => addToCart(item)}
            >
              <p>+</p>
            </button>
            <h2 className="itemTitle">{item.title}</h2>
            <h2 className="itemPrice">{item.price} kr</h2>
            <p className="itemDescription">{item.desc}</p>
          </section>
        );
      })}

      {/* <button></button> */}
    </section>
  );
}
export default MenuList;
