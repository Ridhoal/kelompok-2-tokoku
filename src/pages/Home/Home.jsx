import Navbars from "../../component/navbar";
import Footer from "../Footer/Footer";
import Cards from "../cards/card";
import Banner from "../Banner/banner";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Banner />
      <div style={{ display: "flex"  }}>
        <Cards />
      </div>

      {/* <div style={{ display: "flex", marginLeft: "180px" }}>
        <Cards />
        <Cards />
        <Cards />
        
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
