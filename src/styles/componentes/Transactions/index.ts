import styled from 'styled-components';

export const MonthConatiner = styled.div`
  display: flex;
  /* color: white; */
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 20px;

  h2 {
    font-size: 1.2rem;
    flex: 1;
  }

  div {
    display: flex;
    align-items: center;

    input {
      background: #fff;
      border-radius: 2px;
      border: 1px solid var(--primary-bg-color);
      /* color: white; */
      height: 24px;
      padding: 2px;
      width: 40px;
      margin-left: 10px;
      font-size: 14px;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;

    div {
      margin-top: 1rem;
    }
  }

  @media (max-width: 450px) {
    div {
      margin-top: 1rem;
      flex-direction: column;

      input {
        margin-top: 0.5rem;
      }
    }
  }
`;
