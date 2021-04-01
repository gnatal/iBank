import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 900px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  padding: 1.5rem;

  h2 {
    font-size: 1.6rem;
    line-height: 4rem;
  }

  @media (max-width: 720px) {
    padding: 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 3rem;

  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

  border-radius: 0.25rem;

  @media (max-width: 720px) {
    padding: 1rem 1.5rem;
  }
`;