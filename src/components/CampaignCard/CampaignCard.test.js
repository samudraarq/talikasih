import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CampaignCard } from "./CampaignCard";
import styles from "./CampaignCard.module.css";

configure({ adapter: new Adapter() });

describe("<CampaignCard />", () => {
  let wrapper;

  let props = {
    campaign: {
      id: 111,
      title: "Save Parrot ! They're not the Pirate",
      goal: 1300000000,
      raised: 295500000,
      header_img:
        "https://res.cloudinary.com/drqx56ocf/image/upload/v1605232400/vefkgihktzhyetv3npfc.jpg",
      story:
        '<p><strong>Almost 50% of all parrot species are endangered</strong> and almost 25% of the species are&nbsp;<a href="https://en.wikipedia.org/wiki/Critically_endangered" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">critically endangered</a>. The main reasons for this are persistent&nbsp;<a href="https://en.wikipedia.org/wiki/Habitat_destruction" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">habitat destruction</a>, such as&nbsp;<a href="https://en.wikipedia.org/wiki/Deforestation" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">land clearance</a>&nbsp;with fire or settlement, on one hand and on the other the continuing trade in birds, which still offers wild-caught stock. Apart from these two main reasons there is a long list of others such as hunting and persecution as pests, the infiltration of other animal species into the habitat, changes to the habitat, the loss or reduction of&nbsp;<a href="https://en.wikipedia.org/wiki/Breeding_in_the_wild" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">breeding</a>&nbsp;habitat and&nbsp;<a href="https://en.wikipedia.org/wiki/Tree_hollow" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">nesting trees</a>&nbsp;and the lack of suitable food sources for the birds.</p><p>The Fonds supports projects, which serves the conservation of parrots. Of great importance is close cooperation with conservation groups and the local people in the relevant region to ensure, through partnership and education, the long-term success of measures for the protection of the species concerned and their habitats.</p><p>The following are just two examples of the work of the Fonds. With the conservation project for the&nbsp;<a href="https://en.wikipedia.org/wiki/Santa_Marta_parakeet" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">Santa Marta conure</a>&nbsp;in&nbsp;<a href="https://en.wikipedia.org/wiki/Colombia" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">Colombia</a>&nbsp;the Fonds promotes a project of the Colombian foundation&nbsp;<a href="https://en.wikipedia.org/w/index.php?title=Alianza_para_Ecos%C3%ADstemas_Cr%C3%ADticos&amp;action=edit&amp;redlink=1" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(165, 88, 88);">Alianza para Ecosístemas Críticos</a>. The latter strives for close co-operation with the&nbsp;<a href="https://en.wikipedia.org/wiki/Indigenous_peoples_of_the_Americas" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">Indigenous people</a>&nbsp;of the&nbsp;<a href="https://en.wikipedia.org/wiki/Sierra_Nevada_de_Santa_Marta" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">Sierra Nevada de Santa Marta</a>. The&nbsp;<a href="https://en.wikipedia.org/wiki/Endemism" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">endemic</a>&nbsp;Santa Marta conure is a&nbsp;<a href="https://en.wikipedia.org/wiki/Keystone_species" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">keystone species</a>&nbsp;for education on the uniqueness of the flora and fauna of the mountain chain. The conservation project means that all involved work as equal partners in observation activities within the Indian reservation and in the determination of distribution patterns, the identification of breeding areas and&nbsp;<a href="https://en.wikipedia.org/wiki/Bird_migration" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">migratory</a>&nbsp;routes as well as the analysis of population and causes of decline. By optimizing cheese production among the small farmers in the distribution area of the conure through a dairy specialist working on behalf of the Fonds and the establishment of a brand for this production the long-term security of the habitat structure of the conure is assured at the same time.</p><p>The causes for the endangered status of the&nbsp;<a href="https://en.wikipedia.org/wiki/Citron-crested_cockatoo" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">citron-crested cockatoo</a>&nbsp;on the&nbsp;<a href="https://en.wikipedia.org/wiki/Indonesian_island" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">Indonesian island</a>&nbsp;of&nbsp;<a href="https://en.wikipedia.org/wiki/Sumba" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">Sumba</a>&nbsp;are somewhat different. The main causes are the loss of nesting availability and most of all capture for the trade, i.e. the&nbsp;<a href="https://en.wikipedia.org/wiki/Black_market" rel="noopener noreferrer" target="_blank" style="background-color: initial; color: rgb(11, 0, 128);">black market</a>. Apart from the creation of basic data on distribution, density and the importance of the various endangering factors, the surveillance and prevention of the trade is a main project task. The prosecution of poachers could be achieved for the first time. At the same time a strategy for creating awareness among the local people was developed, which includes, for example, visiting schools showing an educational film made by a Fonds supporter. As many small schools do not have electricity, seeing such a film is a great event. The local partner here is BirdLife Indonesia.</p>',
      due_date: "2020-11-30T00:00:00.000Z",
      UserId: 77,
      CategoryId: 6,
      StatId: 2,
      point: 80,
      shareCount: 24,
      donationCount: 4,
      updateCount: 1,
      withdrawalCount: 1000000,
      createdAt: "2020-11-13T01:53:20.618Z",
      updatedAt: "2020-11-16T02:33:32.809Z",
      Category: {
        name: "Environment",
        image:
          "https://res.cloudinary.com/drqx56ocf/image/upload/v1603119261/qw1yyhnm7zvwqjqskcqv.png",
      },
    },
  };

  beforeEach(() => {
    wrapper = shallow(<CampaignCard {...props} />);
  });

  it("should contain campaign category", () => {
    expect(wrapper.find("span").text()).toEqual(props.campaign.Category.name);
  });

  it("should contain campaign title", () => {
    expect(wrapper.find(`.${styles.title}`).text()).toEqual(
      props.campaign.title
    );
  });

  it("should contain campaign subtitle", () => {
    expect(wrapper.find(`.${styles.subtitle}`).text()).toEqual(
      "Aksi Cepat Tanggap"
    );
  });

  it("should contain campaign amount raised", () => {
    expect(wrapper.find(`.${styles.amountRaised}`).text()).toEqual(
      `IDR 295,500,000`
    );
  });

  it("should contain campaign amount goal", () => {
    expect(wrapper.find(`.${styles.amountGoal}`).text()).toEqual(
      `IDR 1,300,000,000`
    );
  });
});
