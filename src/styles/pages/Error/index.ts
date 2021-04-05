import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 1.5rem;

  background-image: linear-gradient(
    to top,
    #c4c5c7 0%,
    #dcdddf 52%,
    #ebebeb 100%
  );
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 420px;
    width: 100%;
    max-width: 400px;

    background: white;
    padding: 3rem 2rem;
    border-radius: 0.5rem;

    text-align: center;

    background: #fff;

    box-sizing: border-box;

    h3 {
      font-size: 1.2rem;
      font-weight: 600;

      margin-bottom: 0.5rem;
    }
  }
`;
