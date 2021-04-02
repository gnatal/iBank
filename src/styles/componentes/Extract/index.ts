import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 45vh;
  max-height: 20rem;

  overflow: auto;

  padding: 1.5rem 2rem;

  border-radius: 0.5rem;

  background: #fff;
  box-shadow: 0px 0px 20px rgba(10, 10, 10, 0.2);

  header {
    display: flex;
    align-items: center;

    color: var(--light-gray);

    img {
      width: 2rem;
      margin-right: 1rem;
    }
    margin-bottom: 1.8rem;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #eee;
    border-radius: 0.75rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--primary-bg-color);
    border-radius: 0.75rem;
  }
`;

interface TransactionsCardProps {
  type: string;
}
export const TransactionsCard = styled.div<TransactionsCardProps>`
  display: flex;

  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--light-gray);

  div.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 4rem;

    h2 {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${({ type }) =>
        type === 'R'
          ? 'var(--green)'
          : type === 'D'
          ? 'var(--red)'
          : 'var(--blue)'};
    }

    h3 {
      font-weight: 500;
    }

    em {
      font-style: italic;
      color: var(--light-gray);
    }
  }

  & + div {
    margin-top: 1rem;
  }
`;

export const IconContainer = styled.div`
  font-size: 2rem;
  color: var(--light-gray);
  margin-right: 1rem;
`;

export const TitleBox = styled.div`
  display: flex;
  margin: 10px;

  .title {
    margin-left: 10px;
    line-height: 38px;
  }
`;

export const TransactionBox = styled.div`
  box-shadow: 0px 0px 20px rgba(10, 10, 10, 0.2);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

export const TransactionText = styled.th`
  font-size: 0.8rem;
  font-weight: bold;
`;

export const CardStyles = styled.div`
  .transactionsbox {
    height: 50vh;
    overflow: scroll;
    @media (min-width: 600px) {
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }

  .transactionsbox::-webkit-scrollbar {
    @media (min-width: 600px) {
      width: 8px;
      border-left: 1px solid lightblue;
    }
  }

  .bottom-spaces {
    @media (min-width: 600px) {
      display: none;
    }
    height: 200px;
    width: 100vw;
  }

  .row-active {
    margin: 2px;
    font-weight: bold;
  }
`;
