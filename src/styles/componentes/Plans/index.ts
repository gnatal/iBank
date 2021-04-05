import styled from 'styled-components';

export const CardsContainer = styled.div`
  width: 100%;
  max-height: 40rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
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
  
  @media (max-width: 878px) {
    padding-bottom: 0;

    &::after {
      content: '';
      border-bottom: 0.5rem solid transparent;
    }
  }
`;

export const PlanCard = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem;

  background: #fff;
  border-radius: 0.75rem;

  h2 {
    font-weight: 700;
    font-size: 1.15rem;
  }

  h3 {
    font-size: 1rem;
  }

  em {
    font-size: 0.9rem;
    font-style: italic;
    color: var(--light-gray);
  }

  box-shadow: 0px 0px 10px rgba(10, 10, 10, 0.2);

  &:last-child {
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
