import { Link, useLoaderData } from "react-router-dom";
import { getHostVans, requireAuth } from "../../utils";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();

  const vansElement = vans.map((van) => (
    <div key={van.id}>
      <Link to={van.id} className="host-vans-item">
        <img src={van.imageUrl} alt={van.name} />
        <div className="host-vans-item-desc">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="host-vans-page">
      <h1>Your listed vans</h1>
      <div className="host-vans-container">{vansElement}</div>
    </div>
  );
};
export default HostVans;
