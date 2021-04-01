import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  select,
  textarea {
    padding: 10px;
    font-size: 22px;
    background: none;
  }

  select {
    border-width: 0px 0px 1px;
    border-bottom-style: solid;
    border-bottom-color: var(--light-gray);
    height: 50px;

    margin-bottom: 25px;

    outline: none;

    &:focus {
      border-color: var(--primary-bg-color);
    }
  }
`;

export const TextareaContainer = styled.div`
  position: relative;
  display: flex;
  height: 5rem;

  margin-bottom: 1.5rem;

  textarea {
    flex: 1 1 100%;
    resize: none;
    outline: none;

    border-color: var(--light-gray);
    &:focus {
      border-color: var(--primary-bg-color);
    }
    &::placeholder {
      color: var(--gray);
    }
  }

  label {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 12px;
    font-weight: 300;
    color: var(--gray);
  }
`;
