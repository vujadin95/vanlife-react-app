import { Link, NavLink } from "react-router-dom";

import userUrl from "../assets/images/user.png";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <Link className="logo" to={"/"}>
        #vanlife
      </Link>
      <nav>
        <NavLink
          to={"host"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          host
        </NavLink>
        <NavLink
          to={"about"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          about
        </NavLink>
        <NavLink
          to={"vans"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          vans
        </NavLink>
        <Link to={"login"}>
          <img
            style={{ verticalAlign: "middle" }}
            src={userUrl}
            alt="user icon"
          />
        </Link>
      </nav>
    </header>
  );
};
export default Header;
