import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 1 275px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  background: #fff;

  border-radius: 0.75rem;

  margin: 15px 0;

  h2 {
    margin: 0.5rem 0;
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
`;

interface HideContainerProps {
  hide: boolean;
  type: string;
}

export const HideContainer = styled.div<HideContainerProps>`
  position: relative;

  /* line-height: 2rem; */

  div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

    transition: opacity 0.8s, z-index 0.8s;

    opacity: ${({ hide }) => (hide ? 1 : 0)};
    z-index: ${({ hide }) => (hide ? 1 : -1)};
  }

  h3 {
    font-weight: 600;
    font-size: 1.2rem;

    /* color: ${({ type }) => (type === 'banco' ? '#000' : 'var(--blue)')}; */

    opacity: 1;

    /* margin-top: 0.25rem; */

    transition: opacity 0.8s, z-index 0.8s;

    opacity: ${({ hide }) => (!hide ? 1 : 0)};

    &.fatura {
      color: var(--blue);
    }
  }
`;
