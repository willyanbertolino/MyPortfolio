import { FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiCss3 } from 'react-icons/si';
import elephant from '../assets/elephant.jpeg';
import nature from '../assets/nature.jpeg';

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
    img: elephant,
    title: 'project1',
    link: 'https://',
    github: 'https://',
    tec: [html5, css3],
  },
  {
    id: 2,
    img: nature,
    title: 'project2',
    link: 'https://',
    github: 'https://',
    tec: [html5, css3, js],
  },
];
