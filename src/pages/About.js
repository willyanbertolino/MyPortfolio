import React from 'react';
import styled from 'styled-components';
import {
  FaUser,
  FaUserGraduate,
  FaUserTie,
  FaUserNinja,
  FaHouseUser,
} from 'react-icons/fa';
import { RiUserVoiceFill } from 'react-icons/ri';

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <article className="profile">
          <div className="icon">
            <FaUser />
          </div>
          <div className="text">
            <h3>Profile</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              laborum necessitatibus! Quos in, illum, similique autem dolorum
              consectetur accusantium ducimus asperiores doloremque sit error.
              Explicabo!
            </p>
          </div>
        </article>
        <article className="education">
          <div className="icon">
            <FaUserGraduate />
          </div>
          <div className="text">
            <h3>Education</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              laborum necessitatibus! Quos in, illum, similique autem dolorum
              consectetur accusantium ducimus asperiores doloremque sit error.
              Explicabo!
            </p>
          </div>
        </article>
        <article className="skills">
          <div className="icon">
            <FaUserNinja />
          </div>
          <div className="text">
            <h3>Skills</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              laborum necessitatibus! Quos in, illum, similique autem dolorum
              consectetur accusantium ducimus asperiores doloremque sit error.
              Explicabo!
            </p>
          </div>
        </article>
        <article className="languages">
          <div className="icon">
            <RiUserVoiceFill />
          </div>
          <div className="text">
            <h3>Languages</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              laborum necessitatibus! Quos in, illum, similique autem dolorum
              consectetur accusantium ducimus asperiores doloremque sit error.
              Explicabo!
            </p>
          </div>
        </article>
        <article className="experience">
          <div className="icon">
            <FaUserTie />
          </div>
          <div className="text">
            <h3>Experience</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              laborum necessitatibus! Quos in, illum, similique autem dolorum
              consectetur accusantium ducimus asperiores doloremque sit error.
              Explicabo!
            </p>
          </div>
        </article>
        <article className="address">
          <div className="icon">
            <FaHouseUser />
          </div>
          <div className="text">
            <h3>Address</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              laborum necessitatibus! Quos in, illum, similique autem dolorum
              consectetur accusantium ducimus asperiores doloremque sit error.
              Explicabo!
            </p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80vw;
  margin: 3rem auto;

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }

  .icon {
    padding: 0 2rem;
    font-size: 2rem;
    color: var(--clr-secondary-1);
    transition: var(--transition);
  }

  article:hover .icon {
    transform: translateY(-10px);
    color: var(--clr-secondary-2);
  }

  .text {
    padding-right: 2rem;
  }

  .text h3 {
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-1);
  }

  .text p {
    color: var(--clr-primary-2);
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
  }
`;

export default About;
