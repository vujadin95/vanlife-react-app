import { Link, NavLink } from "react-router-dom";

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
      </nav>
    </header>
  );
};
export default Header;
