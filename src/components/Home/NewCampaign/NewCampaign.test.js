import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { NewCampaign } from "./NewCampaign";
import CampaignCard from "../../CampaignCard/CampaignCard";

configure({ adapter: new Adapter() });

describe("<NewCampaign />", () => {
  let wrapper;

  const props = {
    newCampaign: {
      documents: [
        {
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
        {
          id: 108,
          title: "Help Indonesian People Recover From Huge Tsunami",
          goal: 50000000,
          raised: 10000000,
          header_img:
            "https://res.cloudinary.com/drqx56ocf/image/upload/v1605193267/mickln5ligajm45craqi.jpg",
          story:
            "The group, Seventeen, reported that the bass player and the road manager had been killed, two of at least 281 people who died when a tsunami in Indonesia’s Sunda Strait struck without warning on the country’s two most-populous islands.&nbsp;&nbsp;<div><br></div><div>The band’s lead singer, Riefan Fajarsyah, fighting back tears in an Instagram post, said that his wife, two other band members and a crew member were missing, and a frantic search was underway on Sunday for survivors of the tsunami that barreled ashore at about 9:30 p.m. on Saturday. Many Indonesians were at the beaches on western Java and southern Sumatra celebrating a long Christmas weekend.</div>",
          due_date: null,
          UserId: 86,
          CategoryId: 7,
          StatId: 2,
          point: 2,
          shareCount: 0,
          donationCount: 1,
          updateCount: null,
          withdrawalCount: null,
          createdAt: "2020-11-12T15:01:08.062Z",
          updatedAt: "2020-11-13T01:38:30.358Z",
          Category: {
            name: "Disaster",
            image:
              "https://res.cloudinary.com/drqx56ocf/image/upload/v1603119315/odqbav0rx8evrb4uspve.jpg",
          },
        },
        {
          id: 105,
          title: "Help Us Build Back the Greek Temples",
          goal: 700000000,
          raised: 225250000,
          header_img:
            "https://res.cloudinary.com/drqx56ocf/image/upload/v1605167765/tz00ttiywlcbopm87qv6.jpg",
          story:
            "<p>Greek temples of the ancient period are the oldest historic places on the globe. The list of the Greek’s architecture is endless. Nobody can find better example of the ancient culture and architecture as Greek temples. Moreover, lots of them continue to exist till nowadays. By around 6th century BC the temples were made of stone and marble structures. One of the best examples is the Parthenon built in the 5th century BC.</p><p><br></p><p>The Parthenon was built at the instigation of Pericles. It was situated in the Acropolis of Athens to pray Athena who was the city’s goddess. The building was called the Temple of Athena the Virgin. Greeks used to build temples to honor their gods. It was not a place of worship. Only several people could come inside to bring gifts. Mostly, temples were built to be admired from outside.</p><p><br></p><p>In the center of the temple, there was a statue of goddess. The Parthenon combined Greek tradition of the megaron house (houses built for living in Greece) with the Egyptian temple. They created an elegant and simple structure. This temple was not built according to Greek methods. The Romans used the arch in their building. The Parthenon has a lot free space while Greeks build temples stuffed with columns.</p><p><br></p><p>The building is a Doric temple. It has a rectangular floor, Doric columns, interior rooms and the naos (shrine). The metopes (architectural elements used for decoration) present various fights between the chaos and justice. The meteope on the west side shows the mythological struggle against the Amazonomachy (Amazons). The Parthenon frieze has the only subject. They are placed on four sides of the temple. They depict the demonstration of a horseman, sacrificial animals and other sacrament functions.</p><p><br></p><p>Athenians devoted a lot of attention to each detail during the building of the Parthenon. The impressive thing about it is that they managed to finish building only in ten years. It shows their enormous sophistication according to those times.</p>",
          due_date: "2021-07-12T00:00:00.000Z",
          UserId: 9,
          CategoryId: 4,
          StatId: 2,
          point: 4,
          shareCount: 0,
          donationCount: 2,
          updateCount: null,
          withdrawalCount: null,
          createdAt: "2020-11-12T07:56:05.814Z",
          updatedAt: "2020-11-16T02:15:08.125Z",
          Category: {
            name: "Religious",
            image:
              "https://res.cloudinary.com/drqx56ocf/image/upload/v1603119169/dlaatyynmj1h9uab9of9.jpg",
          },
        },
      ],
    },
    getNewCampaign: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<NewCampaign {...props} />);
  });

  it("should render three <CampaignCard>", () => {
    expect(wrapper.find(CampaignCard)).toHaveLength(3);
  });

  it("should render a h2 with topic title", () => {
    expect(wrapper.find("h2").text()).toEqual(
      "The latest people who need your help"
    );
  });
});
