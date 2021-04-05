export const formatDate = (date: string) => {
  const d = new Date(date);
  const formatedDate = d.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatedDate;
};
