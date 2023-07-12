import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../utils";

export function loader({ params }) {
  return getVans(params.id);
}

const VanDetail = () => {
  const location = useLocation();
  const van = useLoaderData();

  const backPath = location.state.search ? `?${location.state.search}` : "";
  const backBtnText = location.state?.type || "all";

  return (
    <section className="van-detail-page-container">
      <Link to={`..${backPath}`} relative="path" className="back-button">
        &larr; <span>Back to {backBtnText} vans</span>
      </Link>
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
    </section>
  );
};
export default VanDetail;
