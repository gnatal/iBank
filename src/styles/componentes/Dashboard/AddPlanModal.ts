import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  h2 {
    /* color: var(--text-title); */
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  select,
  textarea {
    padding: 3px 9px;
    font-size: 22px;
    background: #fff;
    background: none;
  }

  select {
    border-width: 0px 0px 1px;
    /* border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-image: initial; */
    border-bottom-style: solid;
    border-bottom-color: rgb(68, 68, 68);
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

    &:focus {
      border-color: var(--primary-bg-color);
    }
  }

  label {
    position: absolute;
    bottom: 5px;
    right: 5px;

    font-size: 12px;
    font-weight: 300;
  }
`;
