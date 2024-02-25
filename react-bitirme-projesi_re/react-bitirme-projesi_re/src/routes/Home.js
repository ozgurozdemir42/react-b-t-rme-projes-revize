import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Hero
        cname="hero"
        heroimg="https://www.meram.bel.tr/upload/medya/MRM_4711_1.jpg"
        title="Senin Belediyen"
        text="Pöpüler Sosyal Tesisler"
        btnclass="show"
        url="/"
        buttontext="Belediyeni Keşfet"
      />
      <Destination/>
      <Trip/>
    </>
  );
}

export default Home;
