import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to={"/"}>Return to home</Link>
    </section>
  );
};
export default NotFound;
