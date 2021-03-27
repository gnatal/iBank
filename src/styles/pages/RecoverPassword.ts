import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 1.5rem;

  background: #f5f5f5;
  box-sizing: border-box;

  form {
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

    h2 {
      font-size: 1.5rem;
      font-weight: 700;

      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.8rem;
      font-weight: 300;
    }

    div {
      display: flex;
      flex-direction: column;

      input + input {
        margin-top: 20px;
      }
      /*   position: relative;
      div {
        position: absolute;
        bottom: 11px;
        right: 4px;
        color: rgb(208, 34, 34);
        font-size: 12px;
        display: block;

        span {
          position: absolute;
          color: rgb(255, 255, 255);
          box-shadow: rgb(0 0 0 / 34%) 0px 0px 3px;
          padding: 4px;
          top: -45px;
          border-radius: 4px;
          background: rgb(208, 34, 34);
          bottom: calc(100% + 12px);
          text-align: center;
          width: 160px;
          left: 50%;
          transform: translateX(-50%);
          min-height: 38px;
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.6s ease 0s;
        }
      } */
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
