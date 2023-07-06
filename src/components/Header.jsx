import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        #vanlife
      </Link>
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>about</Link>
      </nav>
    </header>
  );
};
export default Header;
