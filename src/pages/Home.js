import styled from 'styled-components';
import picture from '../assets/WillyanBertolino.jpg';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Home = () => {
  return (
    <Wrapper>
      <article className="title">
        <span>Hi, I'm</span>
        <br />
        <h1>willyan bertolino</h1>
      </article>

      <div className="container">
        <div className="image-container">
          <img src={picture} alt="Willyan Bertolino" className="image" />
        </div>

        <div className="description">
          <p className="text">I'm a full-stack web developer</p>
          <div className="icons">
            <article className="icon-container">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <SiMongodb className="icon mongo" />
              </a>
              <p className="bubble-text">MongoDB</p>
            </article>
            <article className="icon-container">
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <SiExpress className="icon express" />
              </a>
              <p className="bubble-text">Express</p>
            </article>
            <article className="icon-container">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaReact className="icon react" />
              </a>
              <p className="bubble-text">React</p>
            </article>
            <article className="icon-container">
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaNodeJs className="icon node" />
              </a>
              <p className="bubble-text">Node.js</p>
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 8rem;

  .title h1 {
    padding-left: 1.5rem;
    font-size: 4rem;
    font-family: var(--ff-secondary);
    letter-spacing: var(--spacing);
    color: var(--clr-primary-1);
    text-transform: capitalize;
  }

  .title span {
    letter-spacing: var(--spacing);
    padding-left: 2.5rem;
    font-size: 1.5rem;
    font-family: var(--ff-primary);
    color: var(--clr-primary-2);
  }

  .image-container {
    margin-top: 2rem;
  }

  .image {
    margin: 0 auto;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    object-position: top;
    border: 3px solid var(--clr-primary-2);
  }

  .description {
    text-align: center;
  }

  .text {
    font-size: 1rem;
    padding: 3rem 0;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-2);
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0.3rem;
    margin-bottom: 1rem;
  }

  .icon-link {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    background: var(--clr-primary-2);
    position: relative;
  }

  .icon {
    font-size: 1.5rem;
  }

  .bubble-text {
    position: relative;
    visibility: hidden;
    background: var(--clr-primary-3);
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    width: 70%;
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 0.6rem;
    color: var(--clr-primary-2);
  }

  .bubble-text::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: var(--clr-primary-3);
    border-top: 0;
    margin-left: -12px;
    margin-top: -10px;
  }

  .icon-link:hover {
    background: var(--clr-primary-3);
  }
  .icon-link:hover + .bubble-text {
    visibility: visible;
  }

  @media screen and (min-width: 600px) {
    .title h1 {
      font-size: 6.5rem;
    }

    .text {
      font-size: 1.3rem;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }

    .icons {
      padding-top: 1.5rem;
    }

    .icon-link {
      width: 4rem;
      height: 4rem;
      padding: 1rem;
    }

    .icon {
      font-size: 2rem;
    }

    .bubble-text {
      font-size: 1rem;
      width: 100%;
      padding: 0.8rem 1rem;
    }
  }
`;

export default Home;
