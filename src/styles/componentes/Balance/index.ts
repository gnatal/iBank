import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 1.2rem;

    h1 {
      font-size: 2rem;
      font-weight: 500;
      margin-right: 1rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 8px;

      background: #fff;
      border-radius: 50%;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
