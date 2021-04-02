import { SidemenuBox, SidemenuButton } from '../../styles/componentes/Sidemenu'

interface IProps {
  isOpen: boolean
  close: Function
  changeComponent: Function
}

const Sidemenu: React.FC<IProps> = ({ isOpen, close, changeComponent }: IProps) => {

  function handleClick(e: any) {
    changeComponent(e.target.value)
    close()
  }

  return (
    <>
      <SidemenuBox isOpen={isOpen} >
        <SidemenuButton onClick={handleClick} value={"deposits"}>Depósitos</SidemenuButton >
        <SidemenuButton onClick={handleClick} value={"plans"}>Planos</SidemenuButton >
        <SidemenuButton onClick={handleClick} value={"payments"}>Pagamentos</SidemenuButton >
        <SidemenuButton onClick={handleClick} value={"transactions"}>Transações</SidemenuButton >
      </SidemenuBox>
    </>
  )
}

export default Sidemenu
