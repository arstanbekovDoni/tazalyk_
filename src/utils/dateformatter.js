export function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();

  const month = date.getMonth() + 1;

  const year = date.getFullYear();

  const formattedDate = `${day}/${month < 10 ? "0" : ""}${month}/${year}`;

  return formattedDate;
}
