import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { usePortifolioContext } from '../context';

const Navbar = () => {
  const { links, page, changePage } = usePortifolioContext();
  const [sidebar, setSidebar] = useState(false);

  const handleClick = (pageName) => {
    changePage(pageName);
    setSidebar(false);
  };

  function linksDisplay() {
    return links.map((item, index) => {
      const { pageName, path } = item;

      if (page !== pageName)
        return (
          <li key={index} onClick={() => handleClick(pageName)}>
            <Link to={path}>{pageName}</Link>
          </li>
        );
    });
  }

  return (
    <NavContainer>
      <div className="nav-header">
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setSidebar(!sidebar)}
        >
          <span className="btn-toggle-1"></span>
          <span className="btn-toggle btn-toggle-2"></span>
          <span className="btn-toggle btn-toggle-4"></span>
          <span className="btn-toggle-3"></span>
          {/* <div className="btn-toggle"></div> */}
        </button>
      </div>

      <ul className="nav-links">{linksDisplay()}</ul>

      <aside className={`aside-container ${sidebar && 'show-aside-container'}`}>
        <button
          type="button"
          className="close-side-links"
          onClick={() => setSidebar(!sidebar)}
        ></button>
        <ul className="side-links">{linksDisplay()}</ul>
      </aside>
      {page !== 'home' && (
        <div className="page-text">
          <h2>{page}</h2>
        </div>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: relative;

  .nav-header {
    position: absolute;
    top: 2rem;
    right: 10%;
    background: grey;
    align-self: right;
  }

  .nav-links {
    display: none;
  }

  .aside-container {
    display: none;
    position: fixed;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
  }

  .side-links {
    position: absolute;
    left: 30%;
    width: 70%;
    height: 100vh;
    background: var(--clr-bcg);
    padding-top: 10rem;
    padding-left: 3rem;
    border-left: 1px solid var(--clr-primary-1);
    transition: var(--transition);
  }

  .show-aside-container {
    display: block;
    left: 0;
  }

  .side-links li {
    font-size: 1.5rem;
    padding: 1.5rem;
    width: 100%;
    margin-bottom: 1rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    transition: var(--transition);
  }

  .side-links li:hover {
    border-bottom: 1px solid var(--clr-primary-1);
    background: var(--clr-secondary-1);
    cursor: pointer;
  }

  .side-links li:hover a {
    color: var(--clr-secondary-2);
  }

  .close-side-links {
    position: absolute;
    left: 0%;
    width: 30%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    border: transparent;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    cursor: pointer;
  }

  .nav-toggle {
    position: relative;
    width: 3rem;
    height: 3rem;
    border: transparent;
    background: var(--clr-bcg);
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  .btn-toggle {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--clr-primary-1);
    animation: toggle-animation 4s linear infinite;
    animation-delay: 1s;
  }

  .btn-toggle-1 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    transform: translate(-50%, -50%);
    border: 2px solid var(--clr-primary-1);
    animation: toggle-animation 4s linear infinite;
  }

  .btn-toggle-2 {
    animation-delay: 1s;
  }

  .btn-toggle-4 {
    animation-delay: 3s;
  }

  .btn-toggle-3 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3rem;
    height: 3rem;
    transform: translate(-50%, -50%);
    border: 2px solid var(--clr-primary-1);
    animation: toggle-animation 4s linear infinite;
    animation-delay: 2s;
  }

  .page-text {
    position: absolute;
    top: 6rem;
    left: 50%;
    transform: translateX(-50%);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-1);
  }

  @media screen and (min-width: 600px) {
    .nav-toggle {
      display: none;
    }

    .nav-links {
      position: absolute;
      left: 50%;
      top: 2rem;
      width: 80%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
    }

    .nav-links a {
      font-size: 1.2rem;
      color: var(--clr-secondary-1);
      padding: 0.6rem 1.2rem;
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      margin: 0.3rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      transition: var(--transition);
    }
    .nav-links a:hover {
      border-bottom: 1px solid var(--clr-primary-1);
      color: var(--clr-secondary-2);
      background: var(--clr-secondary-1);
    }
  }

  @keyframes toggle-animation {
    0%,
    25% {
      opacity: 1;
    }
    37.5%,
    87.5% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const PageText = styled.div``;

export default Navbar;
