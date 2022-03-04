import {
  FaUser,
  FaUserGraduate,
  FaUserTie,
  FaUserNinja,
  FaHouseUser,
} from 'react-icons/fa';
import { RiUserVoiceFill } from 'react-icons/ri';

export const about = [
  {
    name: 'profile',
    icon: <FaUser />,
    text: [
      ` Who am I? Well, let's start saying that I love work, study and challenges. I'm very responsible, honest and pacient. I'm 36, married and have no child. I also love to travel, nature landscapes, strategy games, classical music and heavy metal, sometimes, and, of course, eat! I studied physics for 12 years, reaching PhD degree and started a career as a professor, actuating in many universities for seven years, but my country have not been investing in this department as they should, what allowed me to look for new horizons. I discovered programming world 2 years ago and I found myself fascinated by web development, which is what I've liked the most. By now, definitively, this is what I wanna be professionally. Since then, i'm dive down deep in MERN stack.`,
    ],
  },
  {
    name: 'education',
    icon: <FaUserGraduate />,
    text: [
      'Internet Systems Technology – Unicesumar (graduation): 2022 – present',
      "NodeJS Tutorial and Projects Course by John Smilga's Udemy course: (31.5h) january 2022",
      "React Tutorial and Projects Course by John Smilga's Udemy course: (48.5h) january 2022",
      "JavaScript Tutorial and Projects Course by John Smilga's Udemy course: (40h) january 2022",
      "HTML & CSS Tutorial and Projects Course by John Smilga's Udemy course: (36h)september 2021",
      'MERN stack Bootcamp by IGTI Brasil: (may-july)2020',
      'Physics doctorate by UEL: 2013 - 2018',
      'Physics master by UEL: 2011 - 2014',
      'Physics bachelor by UEL: 2006 - 2011',
    ],
  },
  {
    name: 'skills',
    icon: <FaUserNinja />,
    text: [
      'HTML5 - 10',
      'CSS3 - 10',
      'JavaScript: - 9',
      'React - 10',
      'Styled Components - 10',
      'Express - 8',
      'Node - 8',
      'MongoDB - 9',
      'Saas - 5',
      'Python - 7',
      'Github - 10',
    ],
  },
  {
    name: 'languages',
    icon: <RiUserVoiceFill />,
    text: ['Portuguese - native', 'English - advanced', 'Spanish - medium'],
  },
  {
    name: 'experience',
    icon: <FaUserTie />,
    text: [
      `I don't have experience at companies as a Web Developer, yet, but I'm very excited to.`,
    ],
  },
  {
    name: 'address',
    icon: <FaHouseUser />,
    text: [`I live in the countryside, next to Apucarana, Paraná, Brazil.`],
  },
];
