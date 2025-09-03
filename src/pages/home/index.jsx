import NavBar from "../../Components/NavBar.jsx";
import Banner from "../../Components/Banner.jsx";
import Gallery from "../../Components/Gallery.jsx";
import Footer from "../../Components/Footer.jsx";
import "./index.scss";

function Index() {
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

export default Index;
