export function formatDate(createdAt: Date) {
  const parsedToDate = new Date(createdAt);

  const formattedDate =
    `${parsedToDate.getDate()}`.padStart(2, "0") +
    `.${(parsedToDate.getMonth() + 1).toString().padStart(2, "0")}` +
    `.${parsedToDate.getFullYear()}`;

  return formattedDate;
}
