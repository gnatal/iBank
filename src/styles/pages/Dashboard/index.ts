import styled from 'styled-components'

export const Background = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  background-image: linear-gradient(
    to top,
    #c4c5c7 0%,
    #dcdddf 52%,
    #ebebeb 100%
  );

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
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 4rem;
  padding: 0.5rem 1rem;
  background: var(--primary-bg-color);

  img {
    margin-right: 1.5rem;
  }
`

interface NavSectionProps {
  isOpen: boolean
}

export const NavSection = styled.div<NavSectionProps>`
  flex: 1;

  div.navbar {
    display: flex;
    justify-content: flex-start;
    position: relative;

    button {
      color: #fff;
      padding: 0.5rem;
      margin: 0 0.5rem;
      background: none;
      transition: all 0.2s;

      &.active {
        font-weight: bolder;
        font-size: 105%;
        background: #fff;
        color: #000;
        border-radius: 1rem;
        padding: 0.5rem;
      }

      &:hover {
        font-weight: bolder;
        transform: scale(1.05);
      }

      &:last-child {
        position: absolute;
        right: 20px;
      }
    }
  }

  div.menu-toggle {
    display: none;
    width: 40px;
    height: 30px;
    margin-right: 20px;
    cursor: pointer;

    div {
      background-color: #fff;
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;

      &.one {
        ${({ isOpen }) =>
          isOpen && 'transform: rotate(45deg) translate(7px, 7px);'}
      }

      &.two {
        ${({ isOpen }) => isOpen && 'opacity: 0;'}
      }

      &.three {
        ${({ isOpen }) =>
          isOpen && 'transform: rotate(-45deg) translate(8px, -9px);'}
      }
    }
  }

  @media (max-width: 720px) {
    div.navbar {
      display: none;
    }

    div.menu-toggle {
      display: block;
      position: absolute;
      right: 15px;
      top: 10px;
    }

    &.on {
      position: absolute;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      background-color: var(--primary-bg-color);

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;

      div.navbar {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        button {
          transition-duration: 0.5s;
          font-size: 3rem;
          line-height: 4rem;
          display: block;

          &.active {
            font-weight: bolder;
            background: none;
            color: #fff;
          }

          &:hover {
            font-weight: bolder;
            transform: scale(1.05);
          }

          &:last-child {
            position: absolute;
            bottom: -50px;
            left: 110px;
          }
        }
      }
    }
  }
`
