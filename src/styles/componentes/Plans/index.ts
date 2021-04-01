import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 900px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  padding: 1.5rem;

  @media (max-width: 720px) {
    padding: 0;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;

  padding: 3rem;

  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

  border-radius: 0.25rem;

  @media (max-width: 720px) {
    padding: 1.5rem;
  }
`;

export const PlanCard = styled.div`
  padding: 1.5rem;

  background: #fff;

  border-radius: 0.75rem;

  p + p {
    margin-top: 0.5rem;
  }

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
`;

export const AddPlanCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem;

  background: #fff;

  border-radius: 0.75rem;

  cursor: pointer;

  transition: background 0.3s, transform 0.3s, color 0.3s;

  &:focus,
  &:hover {
    background: var(--primary-bg-color);
    color: #fff;
    transform: scale(1.05);
  }
  &:active {
  }
`;
