export const formatCustomDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // Convertir a formato de 12 horas

  return `${day}/${month}/${year} ${hours}:${minutes} ${period}`;
};
