import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 1.5rem;

  background: #f5f5f5;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 420px;
    width: 100%;
    max-width: 400px;

    background: white;
    padding: 3rem 2rem;
    border-radius: 0.25rem;

    text-align: center;

    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

    box-sizing: border-box;

    h3 {
      font-size: 1.2rem;
      font-weight: 600;

      margin-bottom: 0.5rem;
    }

    button {
      height: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 2rem;

      border-radius: 0.25rem;

      color: #fff;
      background: var(--primary-bg-color);
    }
  }
`;
