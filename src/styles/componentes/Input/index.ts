import styled from 'styled-components';

const InputStandard = styled.input`
  padding: 0.8rem;
  margin: 5px 0;
  width: 100%;

  border: 1px solid #838383;
  border-radius: 25px;

  box-sizing: border-box;

  &:focus {
    outline: 0;
    box-shadow: 0 0 1px 1px var(--primary-bg-color);
  }

  @media (max-width: 400px){
    padding: 0.6rem;
  }
`;

export default InputStandard;
