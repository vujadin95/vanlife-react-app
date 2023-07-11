import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h3>Here will go Dashboard page</h3>
      <Outlet />
    </>
  );
};
export default Dashboard;
