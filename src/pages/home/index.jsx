import NavBar from "../../Components/NavBar.jsx";
import Home_Banner from "../../Components/Home_Banner.jsx";
import Gallery from "../../Components/Gallery.jsx";
import Footer from "../../Components/Footer.jsx";
import "./index.scss";

function Index() {
  return (
    <>
      <header>
        <NavBar />
        <Home_Banner />
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
