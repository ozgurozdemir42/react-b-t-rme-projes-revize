import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Hero
        cname="hero-mid"
        heroimg="https://www.meram.bel.tr/upload/medya/HE5B5613.jpg"
        title="Hakkımızda"
        url="/"
      />
      <AboutUs/>
    </>
  );
}

export default About;
