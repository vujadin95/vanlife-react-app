import { useOutletContext } from "react-router-dom";
const HostVanInfo = () => {
  const van = useOutletContext();
  return (
    <section className="host-van-detail-component">
      <p>
        Name: <span>{van.name}</span>
      </p>
      <p>
        Category:{" "}
        <span style={{ textTransform: "capitalize" }}>{van.type}</span>
      </p>
      <p>
        Description: <span>{van.description}</span>
      </p>
      <p>
        Visibility: <span>Public</span>
      </p>
    </section>
  );
};
export default HostVanInfo;
