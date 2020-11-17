import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import UserProfilePage from "./UserProfilePage";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UserProfile from "../components/UserProfile/UserProfile";

configure({ adapter: new Adapter() });

describe("<UserProfilePage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserProfilePage />);
  });

  it("should render one <Navbar />", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
  it("should render one <UserProfile />", () => {
    expect(wrapper.find(UserProfile)).toHaveLength(1);
  });
  it("should render one <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
