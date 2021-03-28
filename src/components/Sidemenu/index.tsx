import React, { useState } from 'react'


import { SidemenuBox } from '../../styles/componentes/Sidemenu'

const Sidemenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SidemenuBox isOpen={isOpen} />
    </>
  )
}

export default Sidemenu
