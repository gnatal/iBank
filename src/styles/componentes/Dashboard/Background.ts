import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;  
  flex-direction: column;
  box-sizing: border-box;
  
  background: #fff;
  background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);

  main {
    flex: 1;
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 920px) {
    main {
      padding-bottom: 4rem;
    }
  }
`;
