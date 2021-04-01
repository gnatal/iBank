import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 3rem;

  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

  border-radius: 0.5rem;

  h2 {
    font-size: 1.6rem;
    line-height: 4rem;
  }

  @media (max-width: 720px) {
    padding: 2rem;

    h2 {
      line-height: 2.5rem;
    }
  }
`;