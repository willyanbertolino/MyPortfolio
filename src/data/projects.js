import { FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiCss3 } from 'react-icons/si';
import memory from '../assets/memory.JPG';
import lambdabar from '../assets/lambdabar.JPG';
import burgerset from '../assets/burgerset.JPG';

const html5 = <FaHtml5 style={{ color: '#f06529', background: '#ebebeb' }} />;
const css3 = (
  <SiCss3
    style={{ color: '#2965f1', background: '#ebebeb', padding: '0.1rem' }}
  />
);

const js = (
  <SiJavascript
    style={{
      color: '#f0db4f',
      background: '#323330',
      border: '2px solid #ebebeb',
    }}
  />
);

export const projects = [
  {
    id: 1,
    img: memory,
    title: 'Matching Cards',
    link: 'https://cards-matching-game-willyan-bertolino.netlify.app/',
    github: 'https://github.com/willyanbertolino/card-matching-game',
    tec: [html5, css3, js],
  },
  {
    id: 2,
    img: lambdabar,
    title: 'Lambda Bar',
    link: 'https://lambda-bar-willyan-bertolino.netlify.app',
    github: 'https://github.com/willyanbertolino/Lambda-Bar',
    tec: [html5, css3],
  },
  {
    id: 3,
    img: burgerset,
    title: 'Burger Set',
    link: 'https://burgerset.netlify.app/',
    github: 'https://github.com/willyanbertolino/Burgerset',
    tec: [html5, css3],
  },
];
