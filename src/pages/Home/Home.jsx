import Navbars from "../../component/navbar";
import Footer from "../Footer/Footer";
import Cards from "../cards/card";
import Banner from "../Banner/banner";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Banner />
      <div style={{ display: "flex", marginLeft: "35px" }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div style={{ display: "flex", marginLeft: "35px" }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
