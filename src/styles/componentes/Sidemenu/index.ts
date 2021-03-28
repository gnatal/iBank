import styled from 'styled-components'

interface IProps {
  isOpen: boolean
}

export const SidemenuBox = styled.div`
  width: ${(props: IProps) => (props.isOpen ? '100vw' : '0vw')};
  height: 90vh;
  background: #845891;
  transition: all 0.3s;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  z-index: 1000;
`
