import { useOutletContext } from "react-router-dom";
const HostVanPhotos = () => {
  const { imageUrl, name } = useOutletContext();
  return (
    <section className="host-van-photos-component">
      <img src={imageUrl} alt={name} />
    </section>
  );
};
export default HostVanPhotos;
