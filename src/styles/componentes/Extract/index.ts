import styled from 'styled-components'

export const TitleBox = styled.div`
  display: flex;
  margin: 10px;

  .title {
    margin-left: 10px;
    line-height: 38px;
  }
`

export const TransactionBox = styled.div`
  box-shadow: 0px 0px 20px rgba(10, 10, 10, 0.2);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`

export const TransactionText = styled.th`
  font-size: 0.8rem;
  font-weight: bold;
`

export const CardStyles = styled.div`
  .transactionsbox {
<<<<<<< HEAD
    height: 50vh;
    overflow: scroll;
    @media (min-width: 600px) {
=======
    height: 40vh;
    overflow: scroll;
    @media (min-width: 920px) {
>>>>>>> f6c28a41d3667479f3cdcec32355497b1ed20cea
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
<<<<<<< HEAD
    @media (min-width: 600px) {
      display: none;
    }
=======
>>>>>>> f6c28a41d3667479f3cdcec32355497b1ed20cea
    height: 200px;
    width: 100vw;
  }

  .row-active {
    margin: 2px;
    font-weight: bold;
  }
`
