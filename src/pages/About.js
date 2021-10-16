import React from 'react';
import styled from 'styled-components';
import { about } from '../data/about';

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        {about.map((item) => {
          const { name, icon, text } = item;

          return (
            <article className={name}>
              <div className="icon">{icon}</div>
              <div className="text">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 10rem;

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }

  .icon {
    padding-right: 1rem;
    font-size: 1.5rem;
    color: var(--clr-secondary-1);
    transition: var(--transition);
  }

  article:hover .icon {
    transform: translateY(-10px);
    color: var(--clr-secondary-2);
  }

  .text {
    padding-right: 1rem;
  }

  .text h3 {
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    color: var(--clr-primary-1);
  }

  .text p {
    color: var(--clr-primary-2);
    line-height: 1.2rem;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    text-align: justify;
  }

  @media screen and (min-width: 600px) {
    .icon {
      font-size: 2rem;

      padding-right: 3rem;
    }

    .text h3 {
      font-size: 1.3rem;
    }

    .text p {
      line-height: 1.5rem;
      font-size: 1rem;
    }
  }
`;

export default About;
