import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vansList, setVansList] = useState([]);

  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVansList(data.vans));
  }, []);

  const vansListElement = vansList.map((van) => (
    <Link to={van.id} key={van.id} className="van-card">
      <img src={van.imageUrl} alt={van.name} />
      <div className="van-desc">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <button className={`van-type-btn ${van.type}`}>{van.type}</button>
    </Link>
  ));

  return (
    <section className="vans-page">
      <h1 className="vans-page-title">Explore our van options</h1>
      <div className="vans-list-container">{vansListElement}</div>
    </section>
  );
};
export default Vans;
