import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import DownloadApps from "../components/Home/DownloadApps/DownloadApps";
import NewCampaign from "../components/Home/NewCampaign/NewCampaign";
import Trending from "../components/Home/Trending/Trending";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import ModalLogin from "../components/Modal/ModalLogin";


const Home = () => {
  const [modalIsOpen, setmodalIsOpen ] = useState(false);
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <Navbar openModal={setmodalIsOpen} setIsLogin={setIsLogin} />
      <Carousel/>
      <ModalLogin setIsLogin={setIsLogin} isLogin={isLogin} openModal={setmodalIsOpen} modalIsOpen={modalIsOpen}/>
      
      <div
        style={{
          background: "linear-gradient(#ffffff 0%, #ffffff 50%, #f2f9fa 100%)",
        }}
      >
        <Trending />
        <NewCampaign />
        <DownloadApps />
      </div>
      <Footer />
    </>
  );
};

export default Home;
