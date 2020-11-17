import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import DownloadApps from "./DownloadApps";

configure({ adapter: new Adapter() });

describe("<DownloadApps />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DownloadApps />);
  });

  it("should render three images", () => {
    expect(wrapper.find("img")).toHaveLength(3);
  });
});
