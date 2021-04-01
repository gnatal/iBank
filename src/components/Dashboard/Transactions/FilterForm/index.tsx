import { FilterFormStyle } from '../../../../styles/componentes/Dashboard/FilterForm'
// import { MonthConatiner, TransactionsContainer } from '../../../styles/componentes/Dashboard/Transactions';

interface IProps {
  referenceDate: number;
  updateReference: Function
}

export default function FilterForm({ referenceDate, updateReference }: IProps) {
  return (
    <FilterFormStyle>
      <p>Escolhe a quantidade de <strong>meses</strong> para o filtro: </p>
      <input type="number" min={1} max={12} value={referenceDate} onChange={(e) => updateReference(e)} />
    </FilterFormStyle>
  )
}