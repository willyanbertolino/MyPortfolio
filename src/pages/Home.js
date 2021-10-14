import React from 'react';
import styled from 'styled-components';
import picture from '../assets/WillyanBertolino.jpg';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Home = () => {
  return (
    <Wrapper>
      <div className="title">
        <span>Hi, I'm</span>
        <br />
        <h1>willyan bertolino</h1>
      </div>

      <div className="container">
        <div>
          <img src={picture} alt="Willyan Bertolino" className="image" />
        </div>
        <div className="description">
          <p className="text">I'm a full-stack web developer</p>
          <div className="icons">
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiMongodb className="icon mongo" />
            </a>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiExpress className="icon express" />
            </a>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact className="icon react" />
            </a>
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaNodeJs className="icon node" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 100px);
  display: grid;
  place-items: center;

  .title h1 {
    font-size: 6rem;
    font-family: var(--ff-secondary);
    letter-spacing: var(--spacing);
    color: var(--clr-primary-1);
    text-transform: capitalize;
  }

  .title span {
    letter-spacing: var(--spacing);
    padding-left: 1rem;
    font-size: 1.5rem;
    font-family: var(--ff-primary);
    color: var(--clr-primary-2);
  }

  .container {
    display: flex;
    justify-content: space-between;

    padding-left: 1rem;
  }

  .image {
    display: block;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    object-position: top;
    border: 3px solid var(--clr-primary-2);
  }

  .description {
    text-align: center;
    margin: auto;
    padding-left: 2rem;
  }

  .text {
    font-size: 1.3rem;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-2);
  }

  .icons {
    padding: 2rem;
    display: flex;
  }

  .icons a {
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    background: var(--clr-primary-2);
  }

  .icon {
    font-size: 2rem;
  }

  .mongo {
    color: #4db33d;
  }
  .express {
    color: #ff3953;
  }
  .react {
    color: #61dbfb;
  }
  .node {
    color: #3c873a;
  }

  .icons a:hover {
    background: var(--clr-primary-3);
  }
`;

export default Home;
