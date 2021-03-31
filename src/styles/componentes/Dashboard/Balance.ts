import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  /* padding: 25px; */

  /* background: var(--secondary-bg-color); */

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 750px;

    margin: 20px 0;

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  .accounts-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    max-width: 750px;
  }

  .account-card {
    flex: 0 1 250px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 12rem;

    padding: 20px;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

    border-radius: 0.25rem;

    margin: 15px 0;
  }

  .title {
    display: flex;
    align-items: center;

    img {
      margin-right: 15px;
    }
  }

  @media (max-width: 720px) {
    header {
      h1 {
        font-size: 1.2rem;
      }
    }
    .accounts-container {
      justify-content: center;
    }

    .account-card {
      flex: 0 1 100%;
    }
  }
`;

interface HideContainerProps {
  hide: boolean;
}

export const HideContainer = styled.div<HideContainerProps>`
  position: relative;

  line-height: 1.8rem;

  div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

    opacity: ${({ hide }) => (hide ? 1 : 0)};

    transition: opacity 1s;
  }

  h3 {
    font-weight: 600;
    font-size: 1.2rem;

    opacity: 1;

    transition: opacity 1s;

    opacity: ${({ hide }) => (!hide ? 1 : 0)};
  }
`;
