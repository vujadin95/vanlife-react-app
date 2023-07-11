import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetail = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const [van, setVan] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [params.id]);

  if (!van) {
    return <h1>Loading...</h1>;
  }
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
