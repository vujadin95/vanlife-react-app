import { Link } from "react-router-dom";
import imgUrl from "../assets/images/about_img.png";
const About = () => {
  return (
    <div className="about-page">
      <img src={imgUrl} alt="stargazing from top of the van" />
      <section className="about-desc">
        <h2>Dont’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-desc-btn-container">
          <h3>
            Your destination is waiting.
            <br />
            Your van is ready
          </h3>
          <Link to={"/about"}>Explore our vans</Link>
        </div>
      </section>
    </div>
  );
};
export default About;
