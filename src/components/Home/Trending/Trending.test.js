import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Trending } from "./Trending";

configure({ adapter: new Adapter() });

describe("<Trending />", () => {
  let wrapper;

  const props = {
    trendingCampaign: {
      documents: {
        id: 79,
        title: "Help Athlete to Survive ",
        goal: 200000000,
        raised: 82805000,
        header_img:
          "https://res.cloudinary.com/drqx56ocf/image/upload/v1604462285/n5xvfr9llv2yv3eumvjh.jpg",
        story:
          '<p>Where does the story start?</p><p>In the back of a taxi. It\'s as good a place as anywhere. Maurice Greene arrived in Taegu this week. He took a cab from the airport and when he was done he gave the driver a signed picture of himself. The baffled cabbies did a double-take, then handed Greene a photo back, taken of himself 20 years ago when he was working as a fireman.</p><p>The sorry truth is that sports journalists always use taxi drivers as barometers of local opinion. It\'s a little lazy, but when you spend your days shuttling back and forth between the stadium and the hotel you don\'t get too much time to talk to the locals, and cabbies tend to be more forthcoming than waiters and stewards.</p><p>A lot of people in the athletics community are as confused about what they are doing in Daegu as Greene and that taxi driver were with their exchange. It\'s a pleasant but nondescript sort city, 2.5 million citizens and an hour\'s flight from Seoul. By coming here the IAAF are trying to take the sport to new markets, but the flip side of that is that these championships are being hosted by a country that has no great love for, or interest in, athletics.&nbsp;<a href="https://www.theguardian.com/world/south-korea" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 132, 198);">South Korea</a>&nbsp;has never won a medal at a world championships, and it doesn\'t look like they are going to add to that tally in the next week.</p><p>And yet, despite that, there is a Korean hero at these championships His face is plastered on posters around the city, and his life story is written down in leaflets piled up at the information booths. The opening ceremony included a film of his life story. His name is Sohn Kee-chung, and while he may not be well known in the west, his autobiography is part of the school syllabus in South Korea. He died only eight years ago, but his life is already part of the national mythology.</p><p>You may not have seen it, but Sohn is the man at the centre of&nbsp;<a href="http://en.wikipedia.org/wiki/File:Sohn_Nam_British.jpg" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 132, 198);">one of the iconic photographs of Olympic history</a>. It is more understated than the snap of Tommie Smith and John Carlos giving the black power salute at Mexico \'68, but just as powerful. It was taken on 9 August 1936, at the Olympic Stadium in Berlin. It shows three athletes on the podium during the medal ceremony of the Olympic marathon. At the back is the British silver medallist Ernie Harper. He is standing tall, shoulders back and head held high, a proud smile on his face. In front of him are two Korean runners, Sohn, gold medallist, and Nam Sung-yong, bronze medallist. Their heads are bowed and both are staring at their feet in, what they later called, "silent shame and outrage". Sohn is clutching a young oak tree to his chest. Nam would later say how envious he was of his team-mate. Not because of colour of his medal, but because unlike Sohn he had no oak tree to cover up the Japanese flag that was emblazoned across his shirt.</p><p class="ql-align-center">Advertisement</p><p class="ql-align-center"><br></p><p>We remember the 1936 Olympics for Jesse Owens and his four gold medals. Sohn\'s was just as defiant a victory. And if history has forgotten that, it is because it was many years before the wider world realised the significance of what he did. Between 1910 and 1948 Korea was part of the Japanese empire, who suppressed the indigenous culture and language. The flags that were raised and the anthem that was played to salute Sohn and Nam were not Korean, but Japanese, and the press and the IOC did not award or record the victory as a Korean triumph, but a Japanese one. Sohn was not even allowed to compete under his own name, but went by the Japanese transliteration, Son Kitei.</p><p>"Japan produced three fine marathon runners in Son, winner of the marathon, Nan, third in the same race, and Kohei Murakoso, the only man who could give the Finns a race in the 5,000 and 10,000m," wrote E A Montague in the Manchester Guardian the day after the race. All three men were Korean.</p><p>During his stay in Berlin Sohn tried to tell the would that they should not think of him as Japanese. He would sign his name in Korean characters, and would often draw a small picture of his country alongside his autograph. After the race he tried to tell the newspapermen again and again that he was Korean, not Japanese, but his minders refused to translate his remarks. Montague\'s mistake was repeated right around the world, with one conspicuous exception. Back in Korea the newspapers blurred the Japanese flag out of the photographs of Sohn. The Korean daily&nbsp;<em>Dong-A Ilbo</em>, which still exists today, carried the photo – with the Japanese flag scratched out – on its front page on 25 August. Immediately afterwards the Japanese government shut the&nbsp;<em>Dong-A Ilbo</em>&nbsp;down for nine months and arrested, then tortured, eight of its journalists.</p><p>Sohn was born in Sinuiju, in what is now North Korea, in 1914, four years after the country was annexed by Japan. In school he was taught Japanese, and had to learn his own language in secret. He began to run, racing against friends on bicycles, and when his teachers realised how talented he was they sent him to study in Seoul. There he was coached by Lee Sun-il, who used to make him run with stones strapped to his back and his pockets filled with sand to help him build his strength and stamina.</p><p>The regime worked well. When he was 17, Sohn won his first marathon. And in the next five years, between 1931 and 1936, he would run in 12 more, winning nine of them. In November 1935 he ran the Tokyo marathon in 2hr 26min and 42sec, a world best, five minutes faster than the time that won Argentina\'s Juan Carlos Zabala gold at the 1932 Olympics. The next year Sohn finished third in the Olympic trial, behind his countryman Nam. The Japanese had made a lot of noise about how they intended to finish third in the medal table. They were happy to send the three Koreans to Berlin, a 12-day train journey away, to represent them in the marathon, so long as they ran under Japanese names and in the Japanese kit.</p><p class="ql-align-center"><br></p><p>Zabala was the favorite for the race itself. He led the field out from the Olympic Stadium, the 56 runners trailing in his wake through the Grunewald forest. His fast pace meant he stretched out ahead of the pack. Sohn, 90 seconds behind after three miles, considered making a move to catch him. But as he set off he heard a voice come over his shoulder. It was Harper, the Englishman. "Take it easy," he said, "let Zabala run himself out." Sohn couldn\'t speak English, but he understood the sentiment. For the next 14 miles he and Harper ran together. And then, after 19 miles, the exhausted Zabala tripped and fell. Sohn and Harper passed him. Staggering and stumbling, Zabala dropped out two miles later.</p><p>Harper began to suffer with blisters, and his shoes filled with blood. Montague wrote afterwards that "Harper\'s performance, the last 10 minutes of it with a blistered and bandaged foot, can vie with Owens\' sprinting as the finest performance of the Games." Sohn kicked on, racked with pain, his leaden legs pounding the tarmac track. "The human body can do so much," Sohn said later. "Then your heart and spirit must take over."</p><p>Heart and spirit carried him up one final slope, back into the stadium and across the line. As athletes always do, Sohn looked up at the scoreboard as he finished. He did not see his name, but the Japanese transliteration of it, and alongside it was not his nationality, but that of his nation\'s conquerors.</p><p>Soon after the race the Japanese athletes held a party to celebrate Sohn\'s victory. But neither he nor his team-mates were there. Instead they were at the house of An Bong-geun, a prominent member of the Korean nationalist movement. At An\'s house Sohn is said to have seen the Korean flag, forbidden from use, for the first time in his life. He was overcome with shame at the memory of being forced to wear the Japanese Rising Sun emblem in Berlin.</p><p>After the war, Sohn became the head coach of the Korean marathon team. Fourteen years on from Berlin, after Korea had been liberated from Japan and then occupied by the US and the Soviet Union, Sohn led a team of South Korean runners – the first athletes ever to wear the Korean flag on their kit – to a clean sweep in the 1950 Boston marathon. He was still coaching 42 years later, and was in the stadium in Barcelona to watch his protege, Hwang Young-jo, win South Korea\'s second Olympic gold in the marathon.</p><p>In his own country Sohn was already a hero. But it took 50 years for the rest of the world to acknowledge what he had done. He was an instrumental member of the Seoul Olympics Organising Committee, and it was only when Korea was awarded the Games that the athletics community rewrote the record books. In 1986 Sohn was invited to a ceremony in Culver City in California, where his nationality and name were changed on a monument to Olympic marathon winners. Two years later he carried the torch into the stadium for the opening ceremony of the 1988 Olympics, to a standing ovation from 80,000 of his countrymen.</p><p>"The Japanese could stop our musicians from playing our songs. They could stop our singers and silence our speakers," Sohn said before he died. "But they could not stop me from running."</p>',
        due_date: "2020-11-30T00:00:00.000Z",
        UserId: 77,
        CategoryId: 5,
        StatId: 2,
        point: 156,
        shareCount: 44,
        donationCount: 10,
        updateCount: 2,
        withdrawalCount: 50000000,
        createdAt: "2020-11-04T03:58:05.844Z",
        updatedAt: "2020-11-15T11:34:51.011Z",
        Category: {
          name: "Humanity",
          image:
            "https://res.cloudinary.com/drqx56ocf/image/upload/v1603119215/a2pkbtheprztlln6nfbr.jpg",
        },
        User: {
          name: "Andika",
          photo:
            "https://res.cloudinary.com/drqx56ocf/image/upload/v1604425457/woviqctfvmhbbu2fsrrg.jpg",
        },
      },
    },
    getTrendingCampaign: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Trending {...props} />);
  });

  it("should render and h3 with Trending Topic text", () => {
    expect(wrapper.find("h3").text()).toEqual("Trending Topic");
  });

  it("should render and h2 with Topic title", () => {
    expect(wrapper.find("h2").text()).toEqual(
      props.trendingCampaign.documents.title
    );
  });

  it("should render four images", () => {
    expect(wrapper.find("img")).toHaveLength(4);
  });
});
