import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { usePortifolioContext } from '../context';

const Navbar = () => {
  const { links, page, changePage } = usePortifolioContext();

  console.log(page);

  return (
    <Wrapper>
      <ul className="links">
        {links.map((item, index) => {
          const { pageName, path } = item;

          if (page !== pageName)
            return (
              <li key={index}>
                <Link to={path} onClick={() => changePage(pageName)}>
                  {pageName}
                </Link>
              </li>
            );
        })}
      </ul>
      {page !== 'home' && <h2>{page}</h2>}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: grid;
  place-items: center;
  width: 80vw;
  margin: 2rem auto;

  .links {
    display: flex;
  }

  .links a {
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
  .links a:hover {
    border-bottom: 1px solid var(--clr-primary-1);
    color: var(--clr-secondary-2);
    background: var(--clr-secondary-1);
  }

  h2 {
    margin-top: 2rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-1);
  }
`;

export default Navbar;
