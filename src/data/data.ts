import Talent1 from '../../public/images/talents/talent1.png'
import Talent2 from '../../public/images/talents/talent2.png'
import Talent3 from '../../public/images/talents/talent3.png'
import Talent4 from '../../public/images/talents/talent4.png'

import Founder1 from '../../public/images/founders/founder1.png'
import Founder2 from '../../public/images/founders/founder2.png'
import Founder3 from '../../public/images/founders/founder3.png'

import NewsImage1 from '../../public/images/lastestNews/image1.png'
import { StaticImageData } from 'next/image'


export interface LatestNewsFeed {
    image: StaticImageData;
    title: string;
}

export interface FaqData {
    question: string;
    answer: string;
}

export const talents: StaticImageData[] = [
    Talent1,
    Talent2,
    Talent3,
    Talent4
]


export interface History {
  date: number;
  history: string;
}

export interface Founders {
  image: StaticImageData
  name: string;
  position: string;
}

export const latestNewsFeeds: LatestNewsFeed[] = [
  {
    image: NewsImage1,
    title: "Rising Star Folu Storm Lands Lead Role in Major Motion Picture",
  },
  {
    image: NewsImage1,
    title: "Rising Star Folu Storm Lands Lead Role in Major Motion Picture",
  },
  {
    image: NewsImage1,
    title: "Rising Star Folu Storm Lands Lead Role in Major Motion Picture",
  },
  {
    image: NewsImage1,
    title: "Rising Star Folu Storm Lands Lead Role in Major Motion Picture",
  },
  {
    image: NewsImage1,
    title: "Rising Star Folu Storm Lands Lead Role in Major Motion Picture",
  },
];


export const faqData: FaqData[] = [
    {
        question: "How do I join Working Talent Agency as a talent?",
        answer: "Joining Working Talent Agency is a straightforward process. Simply visit our 'Join Our Roster' page, fill out the application form, and submit your headshot, resume, and any relevant portfolio materials. Our team will review your submission and get back to you if we think you’re a good fit."
    },
    {
        question: "How do I join Working Talent Agency as a talent?",
        answer: "Joining Working Talent Agency is a straightforward process. Simply visit our 'Join Our Roster' page, fill out the application form, and submit your headshot, resume, and any relevant portfolio materials. Our team will review your submission and get back to you if we think you’re a good fit."
    },
    {
        question: "How do I join Working Talent Agency as a talent?",
        answer: "Joining Working Talent Agency is a straightforward process. Simply visit our 'Join Our Roster' page, fill out the application form, and submit your headshot, resume, and any relevant portfolio materials. Our team will review your submission and get back to you if we think you’re a good fit."
    },
    {
        question: "How do I join Working Talent Agency as a talent?",
        answer: "Joining Working Talent Agency is a straightforward process. Simply visit our 'Join Our Roster' page, fill out the application form, and submit your headshot, resume, and any relevant portfolio materials. Our team will review your submission and get back to you if we think you’re a good fit."
    },
    {
        question: "How do I join Working Talent Agency as a talent?",
        answer: "Joining Working Talent Agency is a straightforward process. Simply visit our 'Join Our Roster' page, fill out the application form, and submit your headshot, resume, and any relevant portfolio materials. Our team will review your submission and get back to you if we think you’re a good fit."
    },
    {
        question: "How do I join Working Talent Agency as a talent?",
        answer: "Joining Working Talent Agency is a straightforward process. Simply visit our 'Join Our Roster' page, fill out the application form, and submit your headshot, resume, and any relevant portfolio materials. Our team will review your submission and get back to you if we think you’re a good fit."
    },
    {
        question: "How do I join Working Talent Agency as a talent?",
        answer: "Joining Working Talent Agency is a straightforward process. Simply visit our 'Join Our Roster' page, fill out the application form, and submit your headshot, resume, and any relevant portfolio materials. Our team will review your submission and get back to you if we think you’re a good fit."
    },
    {
        question: "How do I join Working Talent Agency as a talent?",
        answer: "Joining Working Talent Agency is a straightforward process. Simply visit our 'Join Our Roster' page, fill out the application form, and submit your headshot, resume, and any relevant portfolio materials. Our team will review your submission and get back to you if we think you’re a good fit."
    },
]

export const histories: History[] = [
  {
    date: 2023,
    history:
      "Operations commenced with the registration  of the partnership, signing of talents and building of the operations structure of the company.",
  },
  {
    date: 2024,
    history:
      "The official launch and publicity of the campaign will commence in Q2 2024, as well as the signing and onboarding of more talents and manager",
  },
  {
    date: 2023,
    history:
      "Operations commenced with the registration  of the partnership, signing of talents and building of the operations structure of the company.",
  },
  {
    date: 2024,
    history:
      "The official launch and publicity of the campaign will commence in Q2 2024, as well as the signing and onboarding of more talents and manager",
  },
  {
    date: 2023,
    history:
      "Operations commenced with the registration  of the partnership, signing of talents and building of the operations structure of the company.",
  },
  {
    date: 2024,
    history:
      "The official launch and publicity of the campaign will commence in Q2 2024, as well as the signing and onboarding of more talents and manager",
  },
];


export const founders: Founders[]= [
  {
    image: Founder1,
    name: "Taiwo Adeyemi",
    position: "Creative Director"
  },
  {
    image: Founder2,
    name: "Adesegun Adetoro",
    position: "Creative Director"
  },
  {
    image: Founder3,
    name: "Demi Banwo",
    position: "Creative Director"
  }
]