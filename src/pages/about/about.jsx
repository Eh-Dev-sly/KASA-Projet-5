import NavBar from "../../Components/NavBar.jsx";
import Banner from "../../Components/Banner.jsx";
import Gallery from "../../Components/Gallery.jsx";
import Footer from "../../Components/Footer.jsx";
import "./about.scss";

function About() {
  return (
    <>
      <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default About;
