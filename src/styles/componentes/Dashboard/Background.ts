import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  background: var(--secondary-bg-color);
  box-sizing: border-box;

  main {
    flex: 1;
    width: 100%;
    max-width: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    padding: 1rem 1.5rem;

    background: var(--secondary-bg-color);
  }

  @media (max-width: 920px) {
    main {
      padding-bottom: 4rem;
    }
  }
`;
