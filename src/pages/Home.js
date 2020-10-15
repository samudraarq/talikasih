import React from "react";
import Footer from "../components/Footer/Footer";
import DownloadApps from "../components/Home/DownloadApps/DownloadApps";
import NewCampaign from "../components/Home/NewCampaign/NewCampaign";
import Trending from "../components/Home/Trending/Trending";

const Home = () => {
  return (
    <>
      <Trending />
      <NewCampaign />
      <DownloadApps />
      <Footer />
    </>
  );
};

export default Home;
