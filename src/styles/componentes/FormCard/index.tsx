import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 3rem;

  border-radius: 0.5rem;

  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  box-shadow: 0px 0px 20px rgba(10, 10, 10, 0.2);

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