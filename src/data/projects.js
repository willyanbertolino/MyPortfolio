import { FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiMongodb, SiExpress } from 'react-icons/si';
import memory from '../assets/memory.JPG';
import lambdabar from '../assets/lambdabar.JPG';
import burgerset from '../assets/burgerset.JPG';
import protocolsAPI from '../assets/protocolsAPI.JPG';

const html5 = <FaHtml5 style={{ color: '#f06529' }} />;
const css3 = <SiCss3 style={{ color: '#2965f1', padding: '0.1rem' }} />;

const js = (
  <SiJavascript
    style={{
      color: '#f0db4f',
    }}
  />
);

const react = <FaReact className="icon react" />;
const mongo = <SiMongodb className="icon mongo" />;
const node = <FaNodeJs className="icon node" />;
const express = <SiExpress className="icon express" />;

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
  {
    id: 3,
    img: protocolsAPI,
    title: 'Protocols API',
    link: 'https://simplereactapp.willyanhpbertolino.app.br/',
    github: 'https://github.com/willyanbertolino/React-app-for-Simple-CRUD-api',
    tec: [react, mongo, express, node],
  },
];
