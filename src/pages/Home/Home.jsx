import Navbars from "../../component/navbar";
import Footer from "../Footer/Footer";
import Cards from "../cards/card";
import Banner from "../Banner/banner";
import { useEffect, useState } from "react";

function home = 
const [laptop,setLaptop]= useState ([]);
useEffect(()=>{
  const fetchData =async () => {
    try {
      const response = await fetch ()
      const jsonData = await response.json ();
      const laptops = jsonData.laptop;
      setLaptop(laptops);
    
    }  catch (error){
      console.error("Error fetching data:",error)
    } 
  }
  fetchData();
},[]);
console.log(laptop);
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
