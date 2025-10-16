export function formatDateRange(start: string, end: string) {
  if (!start) return "TBD";

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (start === end)
    return startDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    startDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    " - " +
    endDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
}
