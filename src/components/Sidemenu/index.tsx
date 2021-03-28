import React, { useState } from 'react'
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
        <SidemenuButton onClick={handleClick} value={"Depósitos"}>Depósitos</SidemenuButton >
        <SidemenuButton onClick={handleClick} value={"Planos"}>Planos</SidemenuButton >
        <SidemenuButton onClick={handleClick} value={"Pagamentos"}>Pagamentos</SidemenuButton >
        <SidemenuButton onClick={handleClick} value={"Transações"}>Transações</SidemenuButton >
      </SidemenuBox>
    </>
  )
}

export default Sidemenu
