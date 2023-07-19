import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans, requireAuth } from "../../utils";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params, request }) {
  await requireAuth(request);
  return await getHostVans(params.id);
}

const HostVanDetail = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const van = useLoaderData();

  return (
    <section className="host-van-detail-container">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-detail-van-wrapper">
        <div className="host-detail-van-item">
          <img src={van.imageUrl} alt={van.name} />
          <div className="host-detail-info">
            <button className={`van-type-btn ${van.type}`}>{van.type}</button>
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
        </div>
        <nav className="host-vans-nav">
          <NavLink
            to={"."}
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to={"pricing"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to={"photos"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={van} />
      </div>
    </section>
  );
};
export default HostVanDetail;
