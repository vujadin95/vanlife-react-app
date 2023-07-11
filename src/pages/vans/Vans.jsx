import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vansList, setVansList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVansList(data.vans));
  }, []);

  const filteredVans = typeFilter
    ? vansList.filter((van) => van.type.toLowerCase() === typeFilter)
    : vansList;

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  const vansListElement = filteredVans.map((van) => (
    <Link
      to={van.id}
      state={{ search: searchParams.toString() }}
      key={van.id}
      className="van-card"
    >
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
      <div className="vans-filter-list">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type-btn simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type-btn rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type-btn luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type-btn clear"
          >
            Clear Filters
          </button>
        )}
      </div>
      <div className="vans-list-container">{vansListElement}</div>
    </section>
  );
};
export default Vans;
