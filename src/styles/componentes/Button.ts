import styled from 'styled-components';

const ButtonStandard = styled.button`
  margin: 1rem 0; 
  color: #FFF;
  background-color: var(--primary-bg-color);
  border-radius: 25px;
  border: 0;
  padding: 15px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: all .2s ease-in-out;

  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .8;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }

  .button-icon-posisiton{
    vertical-align: middle;
    margin: 0 5px;
  }

`;

export default ButtonStandard;
