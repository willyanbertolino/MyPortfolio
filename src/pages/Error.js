import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <div className="error">
        <h1>Sorry,</h1>
        <h3>Could not find this page</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;
  letter-spacing: var(--spacing);
  h1 {
    font-size: 3rem;
  }
  h3 {
    margin-top: 1rem;
  }
`;

export default Error;
