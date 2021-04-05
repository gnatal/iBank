import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 10px;
  top: 18px;
  display: block;

  span {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);

    width: 10rem;
    min-height: 2.5rem;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background: var(--error-red);
    color: #fff;
    padding: 0.25rem;

    border-radius: 0.25rem;

    opacity: 0;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.34);

    transition: opacity 0.6s ease 0s;

    &::after {
      content: '';
      display: inline-block;
      border-style: solid;
      border-color: var(--error-red) transparent;
      border-width: 6px 6px 0px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    span {
      opacity: 1;
    }
  }
`;
