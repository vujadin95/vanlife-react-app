import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        #vanlife
      </Link>
      <nav>
        <Link to={"/about"}>about</Link>
        <Link to={"./vans"}>vans</Link>
      </nav>
    </header>
  );
};
export default Header;
