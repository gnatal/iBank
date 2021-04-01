import styled from 'styled-components';

export const DepositTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 20rem;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
