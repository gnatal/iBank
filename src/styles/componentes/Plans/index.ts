import styled from 'styled-components';

export const CardsContainer = styled.div`
  width: 100%;
  max-height: 40rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;

  padding: 3rem;

  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

  border-radius: 0.5rem;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #eee;
    border-radius: 0.75rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--primary-bg-color);
    border-radius: 0.75rem;
  }

  @media (max-width: 920px) {
    padding: 1.5rem;
  }
  @media (max-width: 800px) {
    padding: 1.5rem 1.5rem 0 1.5rem;

    &::after {
      content: '';
      border-bottom: 0.5rem solid transparent;
    }
  }
`;

export const PlanCard = styled.div`
  padding: 1.5rem;

  background: #fff;

  border-radius: 0.75rem;

  /* p + p {
    margin-top: 0.5rem;
  } */

  .title-card {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .login {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--light-gray);
  }

  .type-movement {
    font-size: 1rem;
    font-weight: 400;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: background 0.3s, transform 0.3s, color 0.3s;

    &:focus,
    &:hover {
      background: var(--primary-bg-color);
      color: #fff;
      transform: scale(1.05);
    }
  }
`;
