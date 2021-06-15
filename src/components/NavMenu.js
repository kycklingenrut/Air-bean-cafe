import "../scss/components.css";
import { NavLink } from "react-router-dom";

function NavMenu({ closeMenu }) {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/profile",
      text: "Profile",
    },
    {
      id: 3,
      path: "/menu",
      text: "Menu",
    },
    {
      id: 4,
      path: "/about",
      text: "About",
    },
  ];

  return (
    <ul className="linksList">
      {links.map((link) => {
        return (
          <li className="listItem" key={link.id}>
            <NavLink
              to={link.path}
              activeClassName="active-link"
              onClick={closeMenu}
              exact
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
export default NavMenu;
