import styled from 'styled-components'

interface IProps {
  isOpen: boolean
}

export const SidemenuBox = styled.div`
  width: 100vw;
  display: ${(props: IProps) => (props.isOpen ? 'block' : 'none')};
  height: 90vh;
  background: var(--primary-bg-color);
  transition: all 0.3s;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  z-index: 1000;
`

export const SidemenuButton = styled.button`
  margin: 5px 0px;
  padding: 5px;
  height: 40px;
  border: none;
  width: 100%;
  border-bottom: solid 1px #a874a8;
  text-align: center;
  background: transparent;
  color: #fff;
`
