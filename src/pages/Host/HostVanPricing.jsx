import { useOutletContext } from "react-router-dom";
const HostVanPricing = () => {
  const { price } = useOutletContext();
  return (
    <section className="host-van-pricing-component">
      <p>${price.toFixed(2)}</p>
      <span>/day</span>
    </section>
  );
};
export default HostVanPricing;
