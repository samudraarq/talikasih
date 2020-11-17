import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Carousel } from "./Carousel";

configure({ adapter: new Adapter() });

describe("<Carousel />", () => {
  let wrapper;
  let props = {
    auth: {
      token: "",
      user: {},
      isLogin: false,
    },
  };

  beforeEach(() => {
    wrapper = shallow(<Carousel {...props} />);
  });

  it("should render three SwiperSlider", () => {
    expect(wrapper.find("SwiperSlide")).toHaveLength(3);
  });

  it("should render three Donate Button (one each slide)", () => {
    expect(wrapper.find("Link[to='/discover']")).toHaveLength(3);
  });

  it("should render three Create Campaign Button (one each slide) when not login", () => {
    expect(wrapper.find("button")).toHaveLength(3);
  });

  it("should render three Create Campaign Link (one each slide) when login", () => {
    wrapper.setProps({
      auth: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        isLogin: true,
      },
    });
    expect(wrapper.find("Link[to='/campaign/create']")).toHaveLength(3);
  });
});
