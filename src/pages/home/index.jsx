import NavBar from "../../Components/NavBar.jsx";
import Banner from "../../Components/Banner.jsx";
import Gallery from "../../Components/Gallery.jsx";
import "./index.scss";

function Index() {
  return (
    <header>
        <NavBar />
        <Banner />
        <Gallery />
    </header>
  );
}

export default Index;