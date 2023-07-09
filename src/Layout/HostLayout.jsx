import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="host-layout">
        <Link to={`/host`}>Dashboard</Link>
        <Link to={`income`}>Income</Link>
        <Link to={`review`}>Review</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
