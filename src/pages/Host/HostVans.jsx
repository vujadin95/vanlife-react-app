import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

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
    <div className="host-vans-container">
      <h1>Your listed vans</h1>
      <div className="host-vans-wrapper">
        {vans.length > 0 ? vansElement : <h1>Loading...</h1>}
      </div>
    </div>
  );
};
export default HostVans;
