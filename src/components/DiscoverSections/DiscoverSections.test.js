import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { DiscoverSections } from "./DiscoverSections";

configure({ adapter: new Adapter() });

describe("<DiscoverSections />", () => {
  let wrapper;
  let props = {
    newCampaign: {
      documents: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    },
    popularCampaign: {
      documents: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    },
    urgentCampaign: {
      documents: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    },
  };
  beforeEach(() => {
    wrapper = shallow(<DiscoverSections {...props} />);
  });

  it("should render 9 CampaignCard", () => {
    expect(wrapper.find("CampaignCard")).toHaveLength(9);
  });
});
