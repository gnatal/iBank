import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 1 20rem;
  height: 11rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  background: #fff;

  border-radius: 0.75rem;

  margin: 15px 0;

  @media (max-width: 720px) {
    flex: 1 1 100%;
  }

  h2 {
    color: var(--light-gray);
  }

  div.balance-card-header {
    display: flex;
    align-items: center;

    color: var(--gray);

    margin-bottom: 1rem;

    img {
      width: 1.8rem;
      margin-right: 1rem;
    }
  }

  div.flex-column {
    h2 {
      margin-bottom: 0.5rem;
    }
  }

  div.flex-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      margin-right: 1rem;
    }
    div {
      flex: 1;
      text-align: right;
    }
  }
`;

interface HideContainerProps {
  hide: boolean;
  value: number | undefined;
}

export const HideContainer = styled.div<HideContainerProps>`
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

    transition: opacity 1s, z-index 1s;

    opacity: ${({ hide }) => (hide ? 1 : 0)};
    z-index: ${({ hide }) => (hide ? 1 : -1)};
  }

  h3 {
    font-weight: 700;
    font-size: 1.4rem;

    opacity: 1;

    transition: opacity 1s, z-index 1s;

    opacity: ${({ hide }) => (!hide ? 1 : 0)};

    &.fatura {
      color: var(--blue);
    }
    &.transactions {
      color: ${({ value }) =>
        value && value > 0 ? 'var(--primary-bg-color)' : 'var(--red)'};
    }
    &.limit {
      color: var(--primary-bg-color);
    }
  }
`;
