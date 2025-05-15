export const formatDate = (date) => {
  let handledDate = new Date(date);

  return handledDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
