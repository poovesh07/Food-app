import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Exploremenu from "../../components/Exploremenu/Exploremenu";
import Fooddisplay from "../../components/Fooddisplay/Fooddisplay";
import AppDownload from "../../components/AppDownload/AppDownload";


const Home = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
