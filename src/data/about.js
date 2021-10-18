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
    text: `Who am I? Well, let's start saying that I love work, study and challenges. I'm very responsible, honest and pacient. I'm 36, married and have no child. I also love to travel, nature landscapes, strategy games, classical music and heavy metal, sometimes, and, of course, eat! I studyed physics for 12 years, reaching PhD degree and started a career as a professor, actuating in many universities for seven years, but my country have not been investing in this department as they should, what allowed me to look for new horizons. I discovered programming world 2 years ago and I found myself fascinated by web development, which is what I've liked the most. By now, definitively, this is what I wanna be profissinally. Since than, i'm dive down deep in MERN stack.`,
  },
  {
    name: 'education',
    icon: <FaUserGraduate />,
    text: `MERN stack Bootcamp: (may-july)2020;  Physics doctorate: 2013 - 2018; Physics master: 2011 - 2014; Physics graduation: 2006 - 2011`,
  },
  {
    name: 'skills',
    icon: <FaUserNinja />,
    text: `HTML(5) - 10; CSS(3) - 10; JavaScript: - 9; React - 10; Express - 8; Node - 8; MongoDB - 9; Saas - 5;`,
  },
  {
    name: 'languages',
    icon: <RiUserVoiceFill />,
    text: 'Portuguese - native; English - advanced; Spanish - medium.',
  },
  {
    name: 'experience',
    icon: <FaUserTie />,
    text: `I don't have professional experience as a Web Developer, yet, but I'm very excited to.`,
  },
  {
    name: 'address',
    icon: <FaHouseUser />,
    text: `I live in the countryside, next to Apucarana, Paraná, Brazil.`,
  },
];
