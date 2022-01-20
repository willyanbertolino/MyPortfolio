import styled from 'styled-components';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <Wrapper>
      <div className="social">
        <div className="container whats">
          <div className="icon">
            <FaWhatsapp />
          </div>
          <a
            href="https://web.whatsapp.com/send?phone=5543999986915"
            target="_blank"
            rel="noopener noreferrer"
          >
            +55 43 99998-6915
          </a>
        </div>
        <div className="container github">
          <div className="icon">
            <FaGithub />
          </div>

          <a
            href="https://github.com/willyanbertolino"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/willyanbertolino
          </a>
        </div>
        <div className="container linkedin">
          <div className="icon">
            <FaLinkedin />
          </div>
          <a
            href="https://www.linkedin.com/in/willyanhpbertolino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/willyanhpbertolino
          </a>
        </div>
        <div className="container email">
          <div className="icon">
            <FiMail />
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=willyanhpbertolino@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            willyanhpbertolino@gmail.com
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 70vh;
  display: grid;
  place-items: center;
  padding-top: 12rem;

  .social {
    position: relative;
    height: 15rem;
    width: 15rem;
    animation: breath-animation 5s linear infinite;
  }

  .container {
    display: grid;
    place-items: center;
    font-size: 2rem;
  }

  .whats {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    color: #25d366;
  }

  .github {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 50%;
    color: #fafafa;
  }

  .linkedin {
    position: absolute;
    top: 50%;
    left: 0;
    width: 50%;
    height: 50%;
    color: #0072b1;
  }

  .email {
    position: absolute;
    top: 50%;
    right: 0;
    width: 50%;
    height: 50%;
    color: #db4437;
  }

  a {
    display: none;
  }

  .social:hover {
    animation: none;
    width: 80vw;
    max-width: 30rem;
  }

  .social:hover .container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    font-size: 1.5rem;
  }

  .social:hover a {
    justify-self: left;
    padding-left: 1rem;
    display: inline-block;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    color: var(--clr-primary-2);
  }

  .social:hover .whats {
    width: 100%;
    height: 25%;
  }
  .social:hover .github {
    top: 25%;
    left: 0;
    width: 100%;
    height: 25%;
  }
  .social:hover .linkedin {
    top: 50%;
    left: 0;
    width: 100%;
    height: 25%;
  }
  .social:hover .email {
    top: 75%;
    left: 0;
    width: 100%;
    height: 25%;
  }

  @media screen and (min-width: 600px) {
    .social:hover .container {
      font-size: 1.8rem;
    }

    .social:hover a {
      font-size: 1rem;
    }
  }
`;

export default Contact;
