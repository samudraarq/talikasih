import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CategorySelect from "../components/CategorySelect/CategorySelect"
import Admin from "../components/Admin/Admin";

const AdminPanel = () => {
    return (
      <>
        <Navbar />
        <CategorySelect />
        <Admin />
        <Footer />
      </>
    );
  };
  
  export default AdminPanel;
  