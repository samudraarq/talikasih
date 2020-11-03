import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import UserProfile from "../components/UserProfile/UserProfile";

const UserProfilePage = () => {
  return (
    <>
      <Navbar />
      <UserProfile />
      <Footer />
    </>
  );
};

export default UserProfilePage;
