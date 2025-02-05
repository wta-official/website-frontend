import Talent1 from '../../public/images/talents/talent1.png';
import Talent2 from '../../public/images/talents/talent2.png';
import Talent3 from '../../public/images/talents/talent3.png';
import Talent4 from '../../public/images/talents/talent4.png';

import Founder1 from '../../public/images/founders/founder1.jpg';
import Founder2 from '../../public/images/founders/founder2.jpg';

import { StaticImageData } from 'next/image';

export type Category = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
};

export type Partner = {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
};

export type Work = {
  id: number;
  title: string;
  category: Category[];
  partners: Partner[];
  image: string;
  created_at: string;
  updated_at: string;
};

export type Talent = {
  id: number;
  name: string;
  description: string;
  works: Work[];
  image: string;
  instagram?: string;
  x?: string; // Twitter/X handle
  linkedIn?: string;
  facebook?: string;
  height?: number; // DecimalField (converted to number)
  eye_color?: string;
  hair?: string;
  dietary_requirements?: string;
  roles: string[]; // ArrayField
  partners: Partner[];
  created_at: string;
  updated_at: string;
};

export interface LatestNewsFeed {
  image: StaticImageData;
  title: string;
}

export interface FaqData {
  question: string;
  answer: string;
}

export const talents: StaticImageData[] = [Talent1, Talent2, Talent3, Talent4];

export interface Founders {
  image: StaticImageData;
  name: string;
  position: string;
  about: string;
}

export const founders: Founders[] = [
  {
    image: Founder1,
    name: 'Taiwo Adeyemi',
    position: 'Creative Director',
    about: `Taiwo Adeyemi, fondly known as ‘Oga Boxx’, is a seasoned talent manager, creative businessman, and a quiet influence driving the brands and image of African stars from behind the scenes. 

Building on a solid foundation in advertising, Taiwo Adeyemi has established a remarkable reputation for connecting top brands and talents, creating iconic partnerships, and amplifying their missions to reach global audiences. His portfolio includes work with leading brands in telecommunication, FMCG, aviation, real estate, governmental and non-governmental organizations. Taiwo is known for his work with Nollywood idol Nse Ikpe-Etim, where he led the efforts for her inspiring comeback after a prolonged hiatus, and for his pivotal role with National Chessmaster Tunde Onakoya’s world-record campaign to raise a million dollars for underprivileged children in Africa.

Taiwo’s understanding of the unique challenges faced by emerging talents has influenced his commitment to nurturing growth and innovation in the creative community. His documentary, Road2Blow has become an essential resource for over 30,000 creatives, earning recognition at the Africa Magic Viewers’ Choice Awards and the Africa International Film Festival. Similarly, his co-creation hub, Polygon, offers spaces and programs that empower creatives to collaborate and thrive.

Taiwo has earned academic recognition from prestigious institutions such as the University of Pennsylvania’s Hollywood X program and has contributed to enriching the practice of global artists in residence at the University of Michigan. He currently shares his wealth of knowledge as a visiting lecturer at the Pan Atlantic University’s School of Media and Communications, where he trains on topics such as creative leadership and talent management. He is also a Forbes delegate and a passionate advocate for preserving Nigerian film history, spearheading the establishment of Nigeria’s first film museum.

`,
  },
  {
    image: Founder2,
    name: 'Adesegun Adetoro',
    position: 'Creative Director',
    about: `Adesegun Adetoro is a creative and finance professional with over thirteen years of experience in related fields. 

As a creative professional, Adesegun is a fierce lover of the Nigerian creative space with primary interests in the film industry. He began his career within a technology firm providing solutions to cinema audiences in 2012. This led to him setting up one of Nigeria’s foremost film media sites, ‘The MoviePencil’, which focused on film reviews, industry news, and commentary focused on the growth of Nigeria’s film industry. As his experience in the film industry progressed, Adesegun transitioned from his role as the Editor of The MoviePencil to consult on film projects in both a creative and business capacity, actively assisting filmmakers to structure their businesses for success and raise finance for film production. 

In 2020, he co-founded Depth and Optics Productions Limited (D&O); an independent film investment and production company in Lagos with a vision to develop impactful and authentic projects that elevate the narrative of the Nigerian film landscape. Since inception, D&O has been involved in titles such as Gangs of Lagos, Everything Scatter and The Other Side of the Bridge.  

As a finance professional, Adesegun has roughly 12 years of experience in Taxation, starting his career as a consultant in one of the Big Four accounting firms. He demonstrated a penchant for value creation, continuous learning and development during his time in consulting and gained valuable experience providing tax & business advisory services to clients in the FMCG, Retail, Aviation, Infrastructure, Real Estate, Healthcare, Telecommunications and Entertainment sectors. He consulted on various issues such as Tax Compliance – Corporate and Personal, Tax Advisory, Tax Planning, Tax Audits and Queries, Tax Management – including the obtainment of Incentives and Grants. Following a long career in consulting rising through the ranks, he chose to become an in-house tax professional in 2021 and has held pivotal senior roles in the FMCG sector till date. In his current role, he heads the tax affairs of his company across West and Central Africa.

In 2022, Adesegun joined forces with long-time collaborator Demi Banwo and exceptional Talent Manager Taiwo Adeyemi to establish Working Talent Agency (WTA) – a full-service talent management agency that represents a diverse array of talent, from captivating actors to influential trendsetters. WTA is an expression of Adesegun’s desire to contribute to the sustainability of the Nigerian Creative Space, as he believes that Nigerian creatives need sufficient structures to elevate their capacity whilst also supporting their long-term career success. 

When he’s not working as a finance or creative professional, Adesegun enjoys travel, writing, reading fiction, and other creative pursuits such as fashion, theatre, and collecting art. 
`,
  },
  // {
  //   image: Founder3,
  //   name: "Demi Banwo",
  //   position: "Creative Director",
  //   about: `Lorem ipsum dolor sit amet consectetur. Facilisi ac id nisi feugiat etiam. Mollis pretium amet eget ac at varius sed. Dictum scelerisque est nunc tincidunt. Nibh mauris id luctus sapien. Aenean dignissim neque scelerisque amet purus viverra lobortis. Volutpat nunc at augue at tristique suspendisse. Luctus interdum orci quis risus sit et. Iaculis velit in risus neque. Amet eu dolor enim suspendisse nibh. Porttitor dui sed tristique mauris vulputate a platea tristique pretium. Auctor mattis ac est adipiscing rhoncus at. Integer egestas in magna turpis. Consectetur quis bibendum purus platea et nibh amet gravida. Ac mattis eget a hendrerit amet id pellentesque amet lacinia.
  //   Malesuada nec duis arcu eu id turpis vel in. In pellentesque neque bibendum sed. Volutpat diam turpis pellentesque cursus. Habitant nullam etiam volutpat amet. Vel enim quisque rhoncus morbi pellentesque id urna. A arcu eu magna hendrerit eget aliquam. A sed rhoncus imperdiet ullamcorper. Vulputate enim suspendisse maecenas lorem aliquam. Adipiscing sit tincidunt metus cras vitae sed maecenas morbi. Facilisis nunc neque purus mauris in. Risus maecenas libero tristique curabitur. Amet in eget congue facilisis.
  //   Eros gravida odio vel nullam dictum in molestie. Sed velit posuere commodo ac eleifend velit. Tempor sit non eros neque amet magna fringilla. Ultrices tincidunt ultrices.`,
  // },
];
