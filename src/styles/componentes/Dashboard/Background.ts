import styled from 'styled-components';

export const Background = styled.main`
  height: 94vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1rem;

  background: var(--secondary-bg-color);
  box-sizing: border-box;
  @media (max-width: 720px) {
    height: 100%;
  }
`;
