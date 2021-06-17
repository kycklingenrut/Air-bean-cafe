import Cart from "../components/Cart";
import NavMenu from "../components/NavMenu";
import "../scss/components.css";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  function dropdownMenu() {
    setShowMenu(!showMenu);
  }

  function dropdownCart() {
    setShowCart(!showCart);
  }

  return (
    <div className="navContainer">
      <nav className="navBar">
        <div className="heading">
          <button type="button" className="menuBtn" onClick={dropdownMenu}>
            {showMenu ? (
              <FaTimes className="faTimes1"></FaTimes>
            ) : (
              <FaBars className="faBars"></FaBars>
            )}
          </button>
          <button type="button" className="cartBtn" onClick={dropdownCart}>
            {showCart ? (
              <FaTimes className="faTimes2"></FaTimes>
            ) : (
              <FaShoppingBag className="faShopping"></FaShoppingBag>
            )}
          </button>
        </div>
        <div
          className="links"
          style={showMenu ? { display: "flex" } : { display: "none" }}
        >
          <NavMenu closeMenu={closeMenu}></NavMenu>
        </div>
        <div
          className="cartOverlay"
          style={showCart ? { display: "flex" } : { display: "none" }}
        >
          <Cart setShowCart={setShowCart}></Cart>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
