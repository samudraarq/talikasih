import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import EditProfile from "../components/UserProfile/EditProfile/EditProfile";

const EditProfilePage = () => {
  return (
    <>
      <Navbar />
      <EditProfile />
      <Footer />
    </>
  );
};

export default EditProfilePage;
