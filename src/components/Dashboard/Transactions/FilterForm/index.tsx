import React from 'react'
import { Background } from '../../../../styles/componentes/Dashboard/Background'
import { FilterFormStyle } from '../../../../styles/componentes/Dashboard/FilterForm'

interface IProps {
    referenceDate: number;
    updateReference: Function
}

export default function FilterForm({ referenceDate, updateReference }: IProps) {
    return (

        <Background>
            <FilterFormStyle>

                <p>Escolhe a quantidade de <strong>meses</strong> para o filtro: </p>
                <input type="number" min={1} max={12} onChange={(e) => updateReference(e)} />
            </FilterFormStyle>
        </Background>
    )
}