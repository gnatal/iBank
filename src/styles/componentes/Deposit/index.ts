import styled from 'styled-components';

export const DepositTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    flex: 1;
  }

  button {
    width: 19rem;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
