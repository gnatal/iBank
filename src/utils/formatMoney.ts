export const formatMoney = (value: number | undefined) => {
  if (value || value === 0)
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  else return '';
};
