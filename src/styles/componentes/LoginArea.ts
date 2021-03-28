import styled from 'styled-components';

const LoginArea = styled.div`
  background-color: #ffffffdd;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

  margin: auto;
  max-width: 350px;
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin: 0.5rem 0;
    color: var(--primary-bg-color);
    text-align: center;
    text-decoration: none;
    font-weight: 700;
  }

  .form-login-display {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 764px) {
    padding: 0;

    .login__area {
      width: 100%;
      padding: 1rem;
      right: auto;
      left: 0;
    }
  }
`;
export default LoginArea;
