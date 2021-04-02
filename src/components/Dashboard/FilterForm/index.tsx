import { useState, useEffect } from 'react';
import { MonthConatiner } from '../../../styles/componentes/Transactions';

interface IProps {
  referenceDate: number;
  updateReference: Function
}

export default function FilterForm({ referenceDate, updateReference }: IProps) {
  const [monthPeriod, setMonthPeriod] = useState('');

  useEffect(() => {
    const date = new Date();
    const yearToday = date.getFullYear();
    const monthToday = date.toLocaleDateString('pt-BR', { month: 'long' });
    const newDate = new Date(date.setMonth(date.getMonth() - referenceDate));
    const yearInit = newDate.getFullYear();
    const monthInit = newDate.toLocaleDateString('pt-BR', { month: 'long' });

    let period = '';
    if (referenceDate === 1) {
      period = `${monthToday}/${yearToday}`;
    } else {
      period = `${monthInit}/${yearInit} - ${monthToday}/${yearToday}`;
    }
    setMonthPeriod(period)
  }, [referenceDate])

  return (
    <MonthConatiner>
      <h2><strong>Periódo atual:</strong> {monthPeriod}</h2>
      <div>
        <h2>Escolha a quantidade de <strong>meses</strong> para o filtro: </h2>
        <input type="number" min={1} max={12} value={referenceDate} onChange={(e) => updateReference(e)} />
      </div>
    </MonthConatiner>
  )
}