import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 1.5rem;

  background: #fff;
  background-image: linear-gradient(
    to top,
    #c4c5c7 0%,
    #dcdddf 52%,
    #ebebeb 100%
  );
  box-sizing: border-box;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 420px;
    width: 100%;
    max-width: 400px;

    background: white;
    padding: 3rem 2rem;
    border-radius: 0.25rem;

    text-align: center;

    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(10, 10, 10, 0.2);

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0.5rem 0;
      font-size: 0.8rem;
      font-weight: 300;
    }

    div {
      display: flex;
      flex-direction: column;

      input + input {
        margin-top: 20px;
      }
    }
  }
`;
