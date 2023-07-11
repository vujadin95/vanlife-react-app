import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section className="van-detail-page-container">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <>
          <img src={van.imageUrl} alt={van.name} />
          <button className={`van-type-btn ${van.type}`}>{van.type}</button>
          <h2>{van.name}</h2>
          <p className="van-detail-price">
            ${van.price}
            <span>/day</span>
          </p>
          <p className="van-detail-desc">{van.description}</p>
          <Link className="rent-this-van-btn" to={"/"}>
            Rent this van
          </Link>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};
export default VanDetail;
