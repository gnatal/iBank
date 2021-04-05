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
    width: 8px;
    border: 1px solid lightgray;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  &::-webkit-scrollbar-track {
  }
  &::-webkit-scrollbar-thumb {
    width: 100%;
    background: var(--primary-bg-color);
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

interface TransactionsCardProps {
  type: string;
}
export const TransactionsCard = styled.div<TransactionsCardProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const MainContent = styled.div`
  display: flex;
`;

export const DateContainer = styled.div`
  font-size: 1rem;
  color: var(--light-gray);
`;

export const IconContainer = styled.div`
  font-size: 2rem;
  color: var(--light-gray);
  margin-right: 1rem;
`;
