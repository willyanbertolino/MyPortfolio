import styled from 'styled-components';
import { usePortifolioContext } from '../context';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const { projects } = usePortifolioContext();

  return (
    <Wrapper>
      <div className="container">
        {projects.map((project) => {
          const { id, img, title, link, github, tec } = project;

          console.log(tec);

          return (
            <article key={id} className="description">
              <div className="img-container">
                <img className="image" src={img} alt={title} />
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <FiExternalLink />
                </a>
              </div>
              <div className="info">
                <h2>{title}</h2>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <span>{`<code>`}</span>
                  <span>
                    <FaGithub className="github" />
                  </span>
                  <span>{`</code>`}</span>
                </a>
                <div className="icons">
                  {tec.map((icon, index) => {
                    return <span key={index}>{icon}</span>;
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80vw;
  max-width: 1200px;
  margin: 1rem auto;
  padding-top: 10rem;

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .description {
    height: 400px;
    position: relative;
    overflow: hidden;
  }

  .img-container {
    border: 3px solid var(--clr-primary-2);
    border-radius: 7px;
    position: relative;
    transition: var(--transition);
  }

  .img-container::before {
    position: absolute;
    content: '';
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-1);
    opacity: 0.1;
    border: 3px solid var(--clr-grey-1);
    border-radius: 0.3rem;
  }

  .image {
    width: 100%;
    height: 394px;
    border-radius: 3px;
    object-fit: cover;
    transition: var(--transition);
  }

  .info {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 50%;
    visibility: hidden;
    border-radius: 200% 0 0 0 / 350% 0 0 0;
    background: var(--clr-grey-1);
    transition: var(--transition);
    text-align: center;
    text-transform: capitalize;
    line-height: 3rem;
    padding-top: 2rem;
    padding-left: 10%;
  }

  .info h2 {
    letter-spacing: var(--spacing);
    color: var(--clr-secondary-1);
  }

  .info a {
    padding-top: 2rem;
    text-transform: lowercase;
    color: var(--clr-primary-3);
  }
  .info a:hover {
    color: var(--clr-primary-4);
  }

  .info span {
    font-family: var(--ff-code);
    letter-spacing: 0.1rem;
  }

  .github {
    font-size: 1rem;
    margin: 0 1rem;
    transition: var(--transition);
  }

  .info a:hover .github {
    font-size: 1.3rem;
    transform: rotate(360deg);
  }

  .description:hover .img-container {
    background: var(--clr-primary-2);
  }
  .description:hover .image {
    border-radius: 100% 3px 3px 3px;
  }

  .description:hover .info {
    color: var(--clr-primary-2);
    top: 50%;
    visibility: visible;
    background: var(--clr-grey-1);
    opacity: 0.93;
    z-index: 1;
  }

  .link {
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 2rem;
    color: var(--clr-primary-3);
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    transition-delay: 0.1s;
  }

  .link:hover {
    color: var(--clr-primary-4);
    transform: scale(1.05) translate(3px, -3px);
  }

  .description:hover .link {
    z-index: 0;
    opacity: 1;
  }

  .icons {
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }

  .icons span {
    padding: 0 0.5rem;
  }
`;

export default Projects;
