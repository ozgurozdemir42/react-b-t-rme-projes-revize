import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Hero
        cname="hero-mid"
        heroimg="https://www.meram.bel.tr/upload/medya/HE5B5542.jpg"
        title="İletişim"
        url="/"
      />
      <ContactForm/> 
    </>
  );
}

export default Contact;
