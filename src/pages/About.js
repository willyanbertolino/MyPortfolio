import styled from 'styled-components';
import { about } from '../data/about';

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        {about.map((item, index) => {
          const { name, icon, text } = item;

          return (
            <article key={index} className={name}>
              <div className="icon">{icon}</div>
              <div className="text">
                <h3>{name}</h3>
                <ul>
                  {text.map((textItem, i) => (
                    <li
                      key={i}
                      className={
                        text.length > 1 ? 'text-list style-type' : 'text-list'
                      }
                    >
                      {textItem}
                    </li>
                  ))}
                </ul>
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
  padding-top: 8rem;

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
    text-align: justify;
    width: 100%;
  }

  .text h3 {
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    color: var(--clr-primary-1);
  }

  .text-list {
    color: var(--clr-primary-2);
    line-height: 1.2rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }

  .style-type {
    list-style-type: square;
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
