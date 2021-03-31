import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;

  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;
`;

export const PlanCard = styled.div`
  flex: 0 1 250px;

  padding: 1.5rem;
  margin: 0.2rem;

  border: 1px solid lightgray;
  border-radius: 0.25rem;
`;

export const AddPlanCard = styled.div`
  flex: 0 1 250px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem;
  margin: 0.2rem;

  border: 1px solid lightgray;
  border-radius: 0.25rem;

  cursor: pointer;

  transition: background 0.3s;

  &:hover {
    background: var(--primary-bg-color);
  }
`;
