import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import EditProfilePage from "./EditProfilePage";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EditProfile from "../components/UserProfile/EditProfile/EditProfile";

configure({ adapter: new Adapter() });

describe("<EditProfilePage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditProfilePage />);
  });

  it("should render one <Navbar />", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
  it("should render one <EditProfile />", () => {
    expect(wrapper.find(EditProfile)).toHaveLength(1);
  });
  it("should render one <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
