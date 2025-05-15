export const formatToInputDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0]; // returns "YYYY-MM-DD"
};
