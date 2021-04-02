import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 14rem;

  h1 {
    font: 700 1.8rem 'Lato', sans-serif;
    margin-bottom: 35px;
  }

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 0 4rem;
  }

  @media (max-width: 720px) {
    height: 10rem;

    div {
      padding: 0;
    }

    h1 {
      font-size: 1.4rem;
      margin-bottom: 25px;
    }

    button.modal-ok,
    button.modal-cancel {
      width: 7rem;
      font-size: 0.75rem;
    }
  }
`;
